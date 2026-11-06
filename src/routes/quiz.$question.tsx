import { createFileRoute, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Scene, Next, Ornament } from "@/components/surprise";
import { quiz, isCorrectAnswer, nextQuizStep, canContinuePhrase, isCorrectPhrase } from "@/lib/quiz";
import { surpriseHead } from "@/lib/surprise-head";

export const Route = createFileRoute("/quiz/$question")({
  beforeLoad: ({ params }) => {
    if (!/^\d+$/.test(params.question) || Number(params.question) < 1 || Number(params.question) > quiz.length) throw notFound();
  },
  head: ({ params }) => surpriseHead(`Pergunta ${params.question}`, quiz[Number(params.question) - 1]?.question ?? "Quiz da nossa amizade."),
  component: QuizPage,
});

function QuizPage() {
  const { question } = Route.useParams();
  return <Question key={question} number={Number(question)} />;
}

function Question({ number }: { number: number }) {
  const [picked, setPicked] = useState<number | null>(null);
  const [phrase, setPhrase] = useState("");
  const [phraseWrong, setPhraseWrong] = useState(false);
  const navigate = useNavigate();
  const item = quiz[number - 1];
  if (!item) return null;
  if (number === quiz.length) return <Scene quizQuestion={number}><section className="quiz-content">
    <Ornament />
    <h1 className="quiz-heading">{item.question}</h1>
    <form className="phrase-form" onSubmit={event => {
      event.preventDefault();
      if (!canContinuePhrase(phrase)) return;
      if (isCorrectPhrase(phrase)) void navigate({ to: "/inclusive" });
      else setPhraseWrong(true);
    }}>
      <input className="phrase-input" aria-label="Complete a frase" aria-invalid={phraseWrong} aria-describedby={phraseWrong ? "phrase-error" : undefined} placeholder="…" value={phrase} onChange={event => { setPhrase(event.target.value); setPhraseWrong(false); }} autoComplete="off" />
      <Button type="submit" className="continue-button" size="lg" disabled={!canContinuePhrase(phrase)}>Continuar<ArrowRight aria-hidden="true" /></Button>
    </form>
    <div className="quiz-feedback" aria-live="polite">{phraseWrong && <><X aria-label="Resposta incorreta" /><p id="phrase-error">Vc errou bri, era bruxinha</p><Next to="/inclusive" /></>}</div>
  </section></Scene>;
  const next = nextQuizStep(number);
  return <Scene quizQuestion={number}><section className="quiz-content">
    <Ornament /><p className="question-number">{String(number).padStart(2, "0")} / {quiz.length}</p>
    <h1 className="quiz-heading">{item.question}</h1>
    <div className="quiz-options">{item.options.map((option, index) => {
      const correct = isCorrectAnswer(number - 1, index);
      const revealed = picked !== null;
      return <Button key={option} variant="outline" disabled={revealed} aria-pressed={picked === index} onClick={() => setPicked(index)} className={`quiz-option ${revealed && correct ? "answer-correct" : revealed && picked === index ? "answer-wrong" : ""}`}>
        <span>{option}</span>{revealed && correct ? <Check aria-label="Resposta correta" /> : revealed && picked === index ? <X aria-label="Resposta incorreta" /> : <span className="option-dot" aria-hidden="true" />}
      </Button>;
    })}</div>
    <div className="quiz-feedback" aria-live="polite">{picked !== null && <>{number !== quiz.length && <p>{isCorrectAnswer(number - 1, picked) ? "Não fez mais que a obrigação" : "Eu não acredito q vc errou vey"}</p>}
      {next === "inclusive" ? <Next to="/inclusive" /> : <Next to="/quiz/$question" question={next} />}</>}</div>
  </section></Scene>;
}