import { createFileRoute } from "@tanstack/react-router";
import { Scene, Next, Ornament } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";

export const Route = createFileRoute("/quiz-intro")({
  head: () => surpriseHead("Vamo ver se vc acerta", "Antes das perguntas: será que ele acerta tudo?"),
  component: QuizIntro,
});

function QuizIntro() {
  return (
    <Scene>
      <Ornament />
      <h1 className="script-heading">Eiiiiitchaaa, como ele é ligeiro! Agora vamo ver se vc acerta</h1>
      <Next to="/quiz/$question" question="1" />
      <Ornament />
    </Scene>
  );
}
