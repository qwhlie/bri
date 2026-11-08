import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Scene, Next } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
import chat from "@/assets/capn-clarks/chat.png.asset.json";
import game from "@/assets/capn-clarks/game.png.asset.json";

export const Route = createFileRoute("/animacao")({ head: () => surpriseHead("uer ir capn clarks — Nossa surpresa", "Duas lembranças em polaroids sob uma chuva de interrogações."), component: Animation });

function Animation() {
  const [second, setSecond] = useState(false);
  return <Scene lunar blurred>
    <div className="clarks-rain" aria-hidden="true">
      {Array.from({ length: 24 }, (_, index) => <span key={index}>?</span>)}
    </div>
    <section className="clarks-chapter">
      <h1 className="clarks-heading">uer ir capn clarks</h1>
      <figure key={second ? "game" : "chat"} className={`clarks-polaroid ${second ? "clarks-second" : "clarks-first"}`}>
        <img src={second ? game.url : chat.url} alt={second ? "Personagens no jogo com a mensagem uer ir capn clarks" : "Conversa no jogo com a mensagem uer ir capn clarks"} />
        <figcaption aria-live="polite">{second ? "02" : "01"} ♡</figcaption>
      </figure>
      <div className={`clarks-next ${second ? "clarks-next-ready" : ""}`}>
        {second ? <Next to="/momentos" /> : <Button className="continue-button" size="lg" onClick={() => setSecond(true)} aria-label="Ver segunda polaroid">Próxima foto<ArrowRight aria-hidden="true" /></Button>}
      </div>
    </section>
  </Scene>;
}