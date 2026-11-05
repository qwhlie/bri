import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const mods = import.meta.glob("@/assets/intro/frame*.png.asset.json", { eager: true }) as Record<
  string,
  { default: { url: string } }
>;
const frames = Object.entries(mods)
  .sort(([a], [b]) => Number(a.match(/frame(\d+)/)?.[1] ?? 0) - Number(b.match(/frame(\d+)/)?.[1] ?? 0))
  .map(([, m]) => m.default.url);
const FRAME_MS = 180;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uma surpresinha pra você" },
      { name: "description", content: "Alguém preparou uma surpresinha pra você." },
      { property: "og:title", content: "Uma surpresinha pra você" },
      { property: "og:description", content: "Alguém preparou uma surpresinha pra você." },
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

  const done = i === frames.length - 1;

  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-background">
      <img src={frames[i]} alt="" className="absolute inset-0 h-full w-full object-cover" />
      {done && (
        <div className="relative z-10 flex animate-in fade-in zoom-in-95 duration-700 flex-col items-center gap-6 px-6 text-center">
          <h1 className="script-heading text-primary">
            Parece que alguém fez uma surpresinha pra você
          </h1>
          <Button asChild className="continue-button"><Link
            to="/escolha"
          >
            Continuar
          </Link></Button>
        </div>
      )}
    </main>
  );
}
