import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import medonho from "@/assets/medonho.png.asset.json";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useHorrorAudio } from "@/hooks/use-horror-audio";

export const Route = createFileRoute("/do-mal")({
  head: () => ({
    meta: [
      { title: "Gg vey — O lado do mal" },
      { name: "description", content: "Escolha errada." },
      { property: "og:title", content: "Gg vey — O lado do mal" },
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
  const { playing, volume, setVolume, toggle } = useHorrorAudio();

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
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const draw = () => {
      ctx.fillStyle = trail;
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = red;
      ctx.font = `${size}px monospace`;
      drops.forEach((y, x) => {
        ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)] ?? "Ж", x * size, y * size);
        drops[x] = y * size > c.height && Math.random() > 0.97 ? 0 : y + 1;
      });
    };
    draw();
    const id = reduced ? undefined : setInterval(draw, 65);
    return () => {
      clearInterval(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="dark horror-scene">
      <img
        src={medonho.url}
        alt=""
        className="horror-face"
      />
      <canvas ref={ref} className="horror-code" aria-hidden="true" />
      <div className="horror-scanlines" aria-hidden="true" />
      <div className="horror-content">
        <h1 className="horror-heading text-destructive">
          Gg vey
        </h1>
        <Button asChild className="continue-button horror-link"><Link
          to="/escolha"
        >
          Voltar para o bem
        </Link></Button>
      </div>
      <div className="horror-audio">
        <Button variant="ghost" size="icon" onClick={() => void toggle()} aria-label={playing ? "Silenciar terror" : "Ativar som de terror"} title={playing ? "Silenciar terror" : "Ativar som de terror"}>
          {playing ? <Volume2 /> : <VolumeX />}
        </Button>
        <input type="range" min="0" max="1" step="0.05" value={volume} onChange={event => setVolume(Number(event.target.value))} aria-label="Volume do terror" />
      </div>
    </main>
  );
}
