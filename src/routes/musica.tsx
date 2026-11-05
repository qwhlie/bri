import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Scene, Next, Ornament } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
import disco from "@/assets/disco.png.asset.json";

export const Route = createFileRoute("/musica")({ head: () => surpriseHead("Saudades de xitar mesmo", "Um intervalo musical entre as nossas lembranças."), component: Music });

function Music() {
  const [playing, setPlaying] = useState(false);
  const audio = useRef<AudioContext | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const stop = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
    void audio.current?.close();
    audio.current = null;
  };
  useEffect(() => () => stop(), []);
  const toggle = async () => {
    if (playing) { stop(); setPlaying(false); return; }
    const ctx = new AudioContext();
    audio.current = ctx;
    await ctx.resume();
    let note = 0;
    const melody = [261.63, 329.63, 392, 523.25, 392, 329.63, 293.66, 349.23];
    const tick = () => {
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = melody[note++ % melody.length] ?? 261.63;
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(.08, ctx.currentTime + .025);
      gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .65);
      oscillator.connect(gain); gain.connect(ctx.destination);
      oscillator.start(); oscillator.stop(ctx.currentTime + .7);
    };
    tick(); timer.current = setInterval(tick, 700); setPlaying(true);
  };
  return <Scene><Ornament /><img className={`record ${playing ? "record-playing" : ""}`} src={disco.url} alt="Disco azul marmorizado com selo lilás" /><h1 className="script-heading">Inclusive, saudades de xitar mesmo</h1><Button className="music-control" size="icon" aria-label={playing ? "Pausar música" : "Tocar música"} onClick={toggle}>{playing ? <Pause /> : <Play />}</Button><p className="temporary-caption">Melodia temporária ♡</p><Next to="/quiz/$question" question="2" /></Scene>;
}