import { createFileRoute } from "@tanstack/react-router";
import { Scene, Next, Ornament } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";

export const Route = createFileRoute("/duo")({
  head: () => surpriseHead("Acho bom mesmo", "O começo de um quiz sobre a nossa amizade."),
  component: Duo,
});

function Duo() {
  return <Scene><Ornament /><h1 className="script-heading">Acho bom mesmo</h1><Next to="/quiz/$question" /><Ornament /></Scene>;
}
