import { createFileRoute } from "@tanstack/react-router";
import { surpriseHead } from "@/lib/surprise-head";
import night from "@/assets/moon-night.jpg";
import plaque from "@/assets/moon-plaque.png";
export const Route = createFileRoute("/obrigada")({ head: () => surpriseHead("Eu te amo — Belle e Bri", 'Eu te amo até quando me fala "to assistindo o jogo, desgraça".'), component: Thanks });
function Thanks() { return <main className="moon-finale"><img src={night} className="finale-sky" alt="Céu azul estrelado com a lua" /><img src={night} className="finale-sky finale-shimmer" alt="" aria-hidden="true" /><div className="hanging-plaque"><img src={plaque} alt="" /><h1>Eu te amo até quando me fala "to assistindo o jogo, desgraça"</h1></div></main>; }