import { createFileRoute, redirect } from "@tanstack/react-router";
import { surpriseHead } from "@/lib/surprise-head";
export const Route = createFileRoute("/musica")({
  head: () => surpriseHead("Continuando a surpresa", "A próxima pergunta da nossa amizade."),
  beforeLoad: () => { throw redirect({ to: "/quiz/$question", params: { question: "2" }, replace: true }); },
});