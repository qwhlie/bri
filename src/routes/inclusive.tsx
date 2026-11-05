import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Next } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
import first from "@/assets/moon/frame1.jpg.asset.json";
import second from "@/assets/moon/frame2.jpg.asset.json";
import third from "@/assets/moon/frame3.jpg.asset.json";
const frames = [first.url, second.url, third.url];
export const Route = createFileRoute("/inclusive")({ head: () => surpriseHead("Inclusive…", "Uma pequena viagem até a lua, feita pra você."), component: Inclusive });
function Inclusive() {
  const [frame, setFrame] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let active = true;
    Promise.all(frames.map(src => new Promise<void>(resolve => { const img = new Image(); img.onload = img.onerror = () => resolve(); img.src = src; }))).then(() => { if (active) setLoaded(true); });
    return () => { active = false; };
  }, []);
  useEffect(() => {
    if (!loaded || frame === 2) return;
    const timer = setTimeout(() => setFrame(f => f + 1), 220);
    return () => clearTimeout(timer);
  }, [loaded, frame]);
  return <main className="surprise-scene lunar-scene"><img className="scene-background" src={frames[frame]} alt="A lua emoldurada por um arco de pedra" />{frame === 2 && <div className="scene-content"><h1 className="script-heading">Inclusive...</h1><Next to="/animacao" /></div>}</main>;
}