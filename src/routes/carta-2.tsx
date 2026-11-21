import { createFileRoute } from "@tanstack/react-router";
import { Next, Ornament } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
import { letterClosingParagraphs } from "@/lib/letter";
import linen from "@/assets/letter-linen.png.asset.json";
import bird from "@/assets/letter-bird.png";

export const Route = createFileRoute("/carta-2")({
  head: () => surpriseHead("O restinho da carta", "O final da carta de Belle para Bri."),
  component: OpenLetterClosing,
});

function OpenLetterClosing() {
  return <main className="open-letter-scene">
    <img src={linen.url} className="scene-background" alt="" />
    <div className="open-letter-content">
      <article className="open-letter-sheet open-letter-closing" aria-label="Final da carta de Belle para Bri">
        <img className="open-letter-bird" src={bird} alt="" />
        <Ornament />
        <div className="open-letter-message">
          {letterClosingParagraphs.map((paragraph) => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
        </div>
        <Ornament />
      </article>
      <Next to="/obrigada" />
    </div>
  </main>;
}
