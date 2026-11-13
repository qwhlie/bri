import { createFileRoute } from "@tanstack/react-router";
import { Scene, Next, Ornament } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
import background from "@/assets/backgrounds/bg-little-things.png.asset.json";

export const Route = createFileRoute("/little-things")({ head: () => surpriseHead("Little things", "Pequenas coisas que me lembram você."), component: LittleThings });

// Conteúdo provisório: as pequenas lembranças chegam aqui quando a Julie enviar.
const lines = ["Suas pequenas lembranças vêm aqui ♡"];
const LINE_START = 2.6;
const LINE_STEP = 0.5;
const LINE_FADE = 0.9;
const NEXT_DELAY = LINE_START + lines.length * LINE_STEP + LINE_FADE;

function LittleThings() {
  return <Scene background={background}>
    <Ornament />
    <h1 className="script-heading">Little things</h1>
    <p className="text-4xl">Coisas que me lembram você</p>
    <div className="scroll-stage">
      <div className="scroll-scroll">
        <div className="scroll-rod scroll-rod-top" aria-hidden="true" />
        <div className="scroll-body">
          <div className="scroll-paper">
            <div className="scroll-message">
              {lines.map((line, i) => <p className="scroll-line" key={line + i} style={{ animationDelay: `${LINE_START + i * LINE_STEP}s` }}>{line}</p>)}
            </div>
          </div>
          <div className="scroll-rod scroll-rod-bottom" aria-hidden="true" />
        </div>
      </div>
    </div>
    <div className="scroll-next" style={{ animationDelay: `${NEXT_DELAY}s` }}><Next to="/cartinha" /></div>
    <Ornament />
  </Scene>;
}
