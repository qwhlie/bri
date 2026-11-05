import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Scene, Next, Ornament } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
export const Route = createFileRoute("/cartinha")({ head: () => surpriseHead("Uma cartinha pra você", "Palavras guardadas com carinho."), component: Letter });
function Letter() { return <Scene><Ornament /><Mail size={40} strokeWidth={1} aria-hidden="true" /><h1 className="script-heading">Uma cartinha pra você</h1><div className="letter-preview">Sua cartinha vem aqui ♡</div><Next to="/obrigada" /></Scene>; }