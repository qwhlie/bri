import { createFileRoute } from "@tanstack/react-router";
import { Scene, Next, Ornament } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
export const Route = createFileRoute("/little-things")({ head: () => surpriseHead("Little things", "Pequenas coisas que me lembram você."), component: LittleThings });
function LittleThings() { return <Scene><Ornament /><h1 className="script-heading">Little things</h1><p className="text-4xl">Coisas que me lembram você</p><p className="temporary-caption">Suas pequenas lembranças vêm aqui ♡</p><Next to="/cartinha" /><Ornament /></Scene>; }