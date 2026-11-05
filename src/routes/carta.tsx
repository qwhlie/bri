import { createFileRoute } from "@tanstack/react-router";
import { Next, Ornament } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
import linen from "@/assets/letter-linen.png.asset.json";
import bird from "@/assets/letter-bird.png";

export const Route = createFileRoute("/carta")({
  head: () => surpriseHead("De Julei para Nikolai", "Uma carta guardada com carinho para Nikolai."),
  component: OpenLetter,
});

function OpenLetter() {
  return <main className="open-letter-scene">
    <img src={linen.url} className="scene-background" alt="" />
    <div className="open-letter-content">
      <article className="open-letter-sheet" aria-label="Carta de Julei para Nikolai">
        <img className="open-letter-bird" src={bird} alt="" />
        <header><p>de: Julei<br />para: Nikolai</p></header>
        <Ornament />
        <div className="open-letter-message"><p>Sua mensagem vem aqui ♡</p></div>
        <Ornament />
      </article>
      <Next to="/obrigada" />
    </div>
  </main>;
}