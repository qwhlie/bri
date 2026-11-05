import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import lace from "@/assets/intro/frame13.png.asset.json";

export const Route = createFileRoute("/duo")({
  head: () => ({
    meta: [
      { title: "Acho bom mesmo — quiz da nossa amizade" },
      { name: "description", content: "Um mini quiz sobre a nossa amizade." },
      { property: "og:title", content: "Quiz da nossa amizade" },
      { property: "og:description", content: "Um mini quiz sobre a nossa amizade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Duo,
});

// Perguntas de exemplo — trocar pelas reais
const QUIZ = [
  { q: "Onde a gente se conheceu?", options: ["Na escola", "Na internet", "Numa festa"], answer: 0 },
  { q: "Qual é a nossa comida favorita juntas?", options: ["Pizza", "Açaí", "Hambúrguer"], answer: 0 },
  { q: "Quem é a mais atrasada?", options: ["Eu", "Você", "As duas"], answer: 1 },
];

function Duo() {
  const [step, setStep] = useState(-1);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);

  const answer = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === QUIZ[step]!.answer) setScore((s) => s + 1);
    setTimeout(() => {
      setPicked(null);
      setStep((s) => s + 1);
    }, 900);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      <img src={lace.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="relative z-10 w-full max-w-xl animate-in fade-in duration-700 text-center" key={step}>
        {step === -1 && (
          <div className="flex flex-col items-center gap-8">
            <h1 className="font-serif text-5xl italic text-primary md:text-7xl">acho bom mesmo</h1>
            <button
              onClick={() => setStep(0)}
              className="rounded-full bg-primary px-8 py-3 font-serif text-lg text-primary-foreground shadow-lg transition hover:scale-105"
            >
              continuar
            </button>
          </div>
        )}
        {step >= 0 && step < QUIZ.length && (
          <div className="rounded-3xl bg-card/80 p-8 shadow-xl backdrop-blur">
            <p className="mb-2 text-sm text-muted-foreground">
              pergunta {step + 1} de {QUIZ.length}
            </p>
            <h2 className="mb-6 font-serif text-3xl text-primary">{QUIZ[step]!.q}</h2>
            <div className="flex flex-col gap-3">
              {QUIZ[step]!.options.map((o, idx) => {
                const state =
                  picked === null ? "" : idx === QUIZ[step]!.answer ? "bg-primary text-primary-foreground" : idx === picked ? "bg-destructive text-destructive-foreground" : "opacity-50";
                return (
                  <button
                    key={o}
                    onClick={() => answer(idx)}
                    className={`rounded-xl border border-primary/30 px-4 py-3 font-serif text-lg transition hover:bg-primary/10 ${state}`}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {step >= QUIZ.length && (
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-card/80 p-8 shadow-xl backdrop-blur">
            <h2 className="font-serif text-4xl italic text-primary">
              você acertou {score} de {QUIZ.length}!
            </h2>
            <button
              onClick={() => {
                setScore(0);
                setStep(0);
              }}
              className="rounded-full bg-primary px-8 py-3 font-serif text-primary-foreground"
            >
              jogar de novo
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
