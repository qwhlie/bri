import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import lace from "@/assets/intro/frame13.png.asset.json";
import moon from "@/assets/moon/frame3.jpg.asset.json";
import ducks from "@/assets/duck-chicks.png";

export function StoryDecorations() {
  return <div className="story-decorations" aria-hidden="true"><div className="storybook-frame" /><img src={ducks} className="storybook-ducks" alt="" width={1024} height={1024} /><span className="storybook-sparkle">✧</span></div>;
}

export function Scene({ children, lunar = false, blurred = false }: { children: ReactNode; lunar?: boolean; blurred?: boolean }) {
  return <main className={`surprise-scene ${lunar ? "lunar-scene" : ""}`}>
    <img src={lunar ? moon.url : lace.url} alt="" className={`scene-background ${blurred || !lunar ? "scene-blurred" : ""}`} />
    {!lunar && <StoryDecorations />}
    {lunar && <div className="lunar-shade" />}
    <div className="scene-content">{children}</div>
  </main>;
}

type NextDestination = "/quiz/$question" | "/musica" | "/inclusive" | "/animacao" | "/momentos" | "/little-things" | "/cartinha" | "/obrigada" | "/escolha" | "/duo" | "/do-mal";
export function Next({ to, question, children = "Continuar" }: { to: NextDestination; question?: string; children?: ReactNode }) {
  return <Button asChild className="continue-button" size="lg">
    {to === "/quiz/$question" ? <Link to="/quiz/$question" params={{ question: question ?? "1" }}>{children}<ArrowRight aria-hidden="true" /></Link> : <Link to={to}>{children}<ArrowRight aria-hidden="true" /></Link>}
  </Button>;
}

export function Ornament() {
  return <div className="ornament" aria-hidden="true"><span /><Heart size={18} strokeWidth={1} /><span /></div>;
}