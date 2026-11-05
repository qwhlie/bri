import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import medonho from "@/assets/medonho.png.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/do-mal")({
  head: () => ({
    meta: [
      { title: "gg vey" },
      { name: "description", content: "Escolha errada." },
      { property: "og:title", content: "gg vey" },
      { property: "og:description", content: "Escolha errada." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DoMal,
});

const CHARS = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

function DoMal() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const size = 18;
    let drops: number[] = [];
    const resize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      drops = Array(Math.ceil(c.width / size)).fill(0).map(() => Math.random() * -50);
    };
    resize();
    window.addEventListener("resize", resize);
    const red = getComputedStyle(document.documentElement).getPropertyValue("--destructive");
    const trail = getComputedStyle(document.documentElement).getPropertyValue("--code-trail");
    const id = setInterval(() => {
      ctx.fillStyle = trail;
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = red;
      ctx.font = `${size}px monospace`;
      drops.forEach((y, x) => {
        ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)] ?? "Ж", x * size, y * size);
        drops[x] = y * size > c.height && Math.random() > 0.97 ? 0 : y + 1;
      });
    }, 50);
    return () => {
      clearInterval(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="dark relative flex min-h-svh items-center justify-center overflow-hidden bg-night">
      <img
        src={medonho.url}
        alt=""
        className="absolute inset-0 h-full w-full object-contain opacity-80 animate-pulse"
      />
      <canvas ref={ref} className="absolute inset-0 mix-blend-screen" />
      <div className="relative z-10 flex flex-col items-center gap-10">
        <h1 className="horror-heading text-destructive">
          Gg vey
        </h1>
        <Button asChild className="continue-button horror-link"><Link
          to="/escolha"
        >
          Voltar para o bem
        </Link></Button>
      </div>
    </main>
  );
}
