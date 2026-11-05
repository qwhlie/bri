import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { Scene, Next } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
export const Route = createFileRoute("/animacao")({ head: () => surpriseHead("Um carinho pra você", "Um pequeno carinho sob a luz da lua."), component: Animation });
function Animation() { return <Scene lunar blurred><Heart className="floating-heart" aria-hidden="true" /><p className="temporary-caption">Sua animação vem aqui ♡</p><Next to="/momentos" /></Scene>; }