import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import f1 from "@/assets/intro/frame1.png.asset.json";
import f2 from "@/assets/intro/frame2.png.asset.json";
import f3 from "@/assets/intro/frame3.png.asset.json";
import f4 from "@/assets/intro/frame4.png.asset.json";
import f5 from "@/assets/intro/frame5.png.asset.json";
import f6 from "@/assets/intro/frame6.png.asset.json";

const frames = [f1, f2, f3, f4, f5, f6].map((f) => f.url);
const FRAME_MS = 180;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abertura" },
      { name: "description", content: "Abertura animada em stop motion." },
      { property: "og:title", content: "Abertura" },
      { property: "og:description", content: "Abertura animada em stop motion." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [i, setI] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let n = 0;
    frames.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        n++;
        if (n === frames.length) setLoaded(true);
      };
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (!loaded || i >= frames.length - 1) return;
    const t = setTimeout(() => setI((v) => v + 1), FRAME_MS);
    return () => clearTimeout(t);
  }, [loaded, i]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <img
        src={frames[i]}
        alt="Abertura"
        className="h-screen w-screen object-cover"
        onClick={() => setI(0)}
      />
    </main>
  );
}
