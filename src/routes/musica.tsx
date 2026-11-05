import { createFileRoute } from "@tanstack/react-router";
import { Scene, Next, Ornament } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
import disco from "@/assets/disco.png.asset.json";

export const Route = createFileRoute("/musica")({ head: () => surpriseHead("Saudades de xitar mesmo", "Um intervalo musical entre as nossas lembranças."), component: Music });

function Music() {
  return <Scene><Ornament /><img className="record record-playing" src={disco.url} alt="Disco azul marmorizado com selo lilás" /><h1 className="script-heading">Inclusive, saudades de xitar mesmo</h1><p className="temporary-caption">EU XITO XITO MESMO APOSTADO — 86 RATO</p><Next to="/quiz/$question" question="2" /></Scene>;
}