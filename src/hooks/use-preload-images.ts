import { useEffect } from "react";

const pointers = import.meta.glob<{ url: string }>("/src/assets/**/*.asset.json", {
  eager: true,
  import: "default",
});
const bundled = import.meta.glob<string>("/src/assets/**/*.{png,jpg,jpeg,webp,gif,svg}", {
  eager: true,
  query: "?url",
  import: "default",
});

const imageUrls = [...new Set([
  ...Object.entries(pointers)
    .filter(([path]) => !path.includes("/intro/") && /\.(png|jpe?g|webp|gif|svg)\.asset\.json$/.test(path))
    .map(([, asset]) => asset.url),
  ...Object.values(bundled),
])];

// Keep decoded images available across chapter navigation, not just in HTTP cache.
const warmedImages = new Map<string, HTMLImageElement>();

export function usePreloadImages() {
  useEffect(() => {
    let cancelled = false;
    let next = 0;
    const cleanups = new Set<() => void>();

    const loadNext = () => {
      if (cancelled) return;
      const url = imageUrls[next++];
      if (!url) return;
      if (warmedImages.has(url)) {
        loadNext();
        return;
      }
      const image = new Image();
      image.fetchPriority = "low";
      image.decoding = "async";
      let settled = false;
      const cleanup = () => {
        clearTimeout(timeout);
        image.onload = null;
        image.onerror = null;
      };
      const finish = (success: boolean) => {
        if (settled) return;
        settled = true;
        cleanup();
        cleanups.delete(cleanup);
        if (success) warmedImages.set(url, image);
        loadNext();
      };
      const timeout = setTimeout(() => finish(false), 15000);
      cleanups.add(cleanup);
      image.onload = () => finish(true);
      image.onerror = () => finish(false);
      image.src = url;
    };

    // Bound parallel work so upcoming photos do not delay the opening animation.
    for (let worker = 0; worker < 4; worker++) loadNext();
    return () => {
      cancelled = true;
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);
}