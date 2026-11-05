import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { Scene, Ornament } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
export const Route = createFileRoute("/obrigada")({ head: () => surpriseHead("Muito obrigada por tudo", "Eu amo vc. Uma surpresa feita com carinho."), component: Thanks });
function Thanks() { return <Scene><Ornament /><h1 className="script-heading">Muito obrigada por tudo,<br />eu amo vc</h1><Heart className="floating-heart" aria-hidden="true" /><Ornament /></Scene>; }