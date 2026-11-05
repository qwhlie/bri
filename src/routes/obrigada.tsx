import { createFileRoute } from "@tanstack/react-router";
import { surpriseHead } from "@/lib/surprise-head";
import night from "@/assets/moon-night.jpg";
import plaque from "@/assets/moon-plaque.png";
export const Route = createFileRoute("/obrigada")({ head: () => surpriseHead("Eu amo você até a lua", "Eu amo você até a lua estupidamente redonda, cheia e amarela."), component: Thanks });
function Thanks() { return <main className="moon-finale"><img src={night} className="finale-sky" alt="Céu azul estrelado com a lua" /><div className="hanging-plaque"><img src={plaque} alt="" /><h1>Eu amo você até a lua estupidamente redonda, cheia e amarela</h1></div></main>; }