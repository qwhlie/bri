import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import anjos from "@/assets/anjinhos.png.asset.json";
import inferno from "@/assets/inferno.png.asset.json";
import lace from "@/assets/intro/frame13.png.asset.json";
import { Button } from "@/components/ui/button";
import { StoryDecorations } from "@/components/surprise";

export const Route = createFileRoute("/escolha")({
  head: () => ({
    meta: [
      { title: "Você já sabe quem fez?" },
      { name: "description", content: "Escolha: duo ou do mal." },
      { property: "og:title", content: "Você já sabe quem fez?" },
      { property: "og:description", content: "Escolha: duo ou do mal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Escolha,
});

function Escolha() {
  const [hover, setHover] = useState<"duo" | "mal" | null>(null);
  const bg = hover === "duo" ? anjos.url : hover === "mal" ? inferno.url : lace.url;

  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-background">
      {[lace.url, anjos.url, inferno.url].map((src) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 h-full w-full scale-110 object-cover transition-opacity duration-500 ${
            src === bg ? "opacity-100" : "opacity-0"
          } blur-md`}
        />
      ))}
      {!hover && <StoryDecorations />}
      <div className="relative z-10 flex flex-col items-center gap-10 px-6 text-center">
        <h1
          className={`script-heading transition-colors ${
            hover === "mal" ? "text-destructive" : "text-primary"
          }`}
        >
          Você já sabe quem fez, né?
        </h1>
        <div className="flex gap-6">
          <Button asChild className="continue-button"><Link
            to="/duo"
            onMouseEnter={() => setHover("duo")}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover("duo")}
            onBlur={() => setHover(null)}
          >
            Duo
          </Link></Button>
          <Button asChild variant="destructive" className="continue-button"><Link
            to="/do-mal"
            onMouseEnter={() => setHover("mal")}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover("mal")}
            onBlur={() => setHover(null)}
          >
            Do mal
          </Link></Button>
        </div>
      </div>
    </main>
  );
}
