import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Flower2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import lace from "@/assets/intro/frame13.png.asset.json";
import moon from "@/assets/moon/frame3.jpg.asset.json";
import ducks from "@/assets/duck-chicks.png";
import bird from "@/assets/letter-bird.png";
import { QuizDecorations } from "@/components/quiz-decorations";

export function StoryDecorations() {
  return <div className="story-decorations" aria-hidden="true">
    <div className="storybook-frame" />
    <div className="storybook-ribbon"><span /><Heart strokeWidth={1} /><span /></div>
    <div className="storybook-sprig sprig-left"><Flower2 /><span /><Flower2 /></div>
    <div className="storybook-sprig sprig-right"><Flower2 /><span /><Flower2 /></div>
    <img src={ducks} className="storybook-ducks" alt="" width={1024} height={1024} />
    <img src={bird} className="storybook-bird" alt="" width={1024} height={1024} />
    <span className="storybook-sparkle">✧</span>
    <div className="storybook-postmark"><Sparkles strokeWidth={1} /><Heart strokeWidth={1} /></div>
    <div className="storybook-bottom-lace" />
  </div>;
}

export function Scene({ children, lunar = false, blurred = false, quizQuestion, background }: { children: ReactNode; lunar?: boolean; blurred?: boolean; quizQuestion?: number; background?: { url: string } }) {
  return <main className={`surprise-scene ${lunar ? "lunar-scene" : ""}`}>
    <img src={background?.url ?? (lunar ? moon.url : lace.url)} alt="" className={`scene-background ${blurred || !lunar ? "scene-blurred" : ""}`} />
    {!lunar && (quizQuestion === undefined ? <StoryDecorations /> : <QuizDecorations question={quizQuestion} />)}
    {lunar && <div className="lunar-shade" />}
    <div className="scene-content">{children}</div>
  </main>;
}

type NextDestination = "/quiz-intro" | "/quiz/$question" | "/musica" | "/inclusive" | "/animacao" | "/momentos" | "/mais-momentos" | "/outras-memorias" | "/gogo-boys" | "/little-things" | "/cartinha" | "/carta" | "/carta-2" | "/obrigada" | "/escolha" | "/duo" | "/do-mal";
export function Next({ to, question, children = "Continuar" }: { to: NextDestination; question?: string; children?: ReactNode }) {
  return <Button asChild className="continue-button" size="lg">
    {to === "/quiz/$question" ? <Link to="/quiz/$question" params={{ question: question ?? "1" }}>{children}<ArrowRight aria-hidden="true" /></Link> : <Link to={to}>{children}<ArrowRight aria-hidden="true" /></Link>}
  </Button>;
}

export function Ornament() {
  return <div className="ornament" aria-hidden="true"><span /><Heart size={18} strokeWidth={1} /><span /></div>;
}