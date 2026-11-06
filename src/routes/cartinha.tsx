import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Next } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
import linen from "@/assets/letter-linen.png.asset.json";
import cloud from "@/assets/letter-cloud.png";
import waves from "@/assets/letter-waves.png";
import bird from "@/assets/letter-bird.png";
export const Route = createFileRoute("/cartinha")({ head: () => surpriseHead("Uma carta de Belle para Bri", "Palavras guardadas com carinho para Bri."), component: Letter });
function Letter() {
  const [arrived, setArrived] = useState(false);
  useEffect(() => {
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 8500;
    const timer = window.setTimeout(() => setArrived(true), delay);
    return () => window.clearTimeout(timer);
  }, []);
  return <main className={`letter-scene ${arrived ? "letter-arrived" : ""}`}>
    <img src={linen.url} className="scene-background" alt="" />
    <div className="letter-wave letter-wave-back" aria-hidden="true"><img src={waves} alt="" /></div>
    <div className="letter-wave letter-wave-front" aria-hidden="true"><img src={waves} alt="" /></div>
    <img className="letter-cloud letter-cloud-left" src={cloud} alt="" />
    <img className="letter-cloud letter-cloud-right" src={cloud} alt="" />
     <img className="letter-cloud letter-cloud-upper-left" src={cloud} alt="" />
     <img className="letter-cloud letter-cloud-upper-right" src={cloud} alt="" />
     <img className="letter-cloud letter-cloud-lower-left" src={cloud} alt="" />
     <img className="letter-cloud letter-cloud-lower-right" src={cloud} alt="" />
     <img className="letter-cloud letter-cloud-center-left" src={cloud} alt="" />
     <img className="letter-cloud letter-cloud-center-right" src={cloud} alt="" />
    <img className="letter-bird" src={bird} alt="" />
    <div className="letter-center">
      <div className="envelope-delivery"><div className="envelope">
        <div className="envelope-back" /><div className="envelope-flap" />
        <div className="letter-paper" aria-hidden={!arrived}><p>de: Belle<br />para: Bri</p></div>
        <div className="envelope-front"><div className="envelope-embroidery" aria-hidden="true">✧ ❦ ✧</div></div><span className="envelope-seal" aria-hidden="true">♡</span>
      </div></div>
      <div className="letter-next">{arrived && <Next to="/carta" />}</div>
    </div>
  </main>;
}