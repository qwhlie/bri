import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FolderHeart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Scene, Next, Ornament } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
import one from "@/assets/moon/frame1.jpg.asset.json";
import two from "@/assets/moon/frame2.jpg.asset.json";
import three from "@/assets/moon/frame3.jpg.asset.json";
const samples = [one.url, two.url, three.url];
export const Route = createFileRoute("/momentos")({ head: () => surpriseHead("Nossos momentos", "Alguns momentos registrados nossos."), component: Moments });
function Moments() {
  const [opened, setOpened] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);
  return <Scene><Ornament /><h1 className="script-heading">E aproveitando esse clima, alguns momentos registrados nossos</h1><Button className="folder-control" aria-label={opened ? "Fechar pasta de fotos" : "Abrir pasta de fotos"} aria-expanded={opened} onClick={() => setOpened(v => !v)}><FolderHeart /></Button>
    {opened && <><p className="temporary-caption">Fotos temporárias, esperando as nossas ♡</p><div className="photo-grid">{samples.map((src, i) => <Button className="photo-button" key={src} aria-label={`Abrir foto ${i + 1}`} onClick={() => setPhoto(src)}><img src={src} alt={`Foto temporária da lua ${i + 1}`} /></Button>)}</div></>}
    <Next to="/little-things" />{photo && <div className="photo-dialog" role="dialog" aria-modal="true" aria-label="Foto ampliada" onKeyDown={e => { if (e.key === "Escape") setPhoto(null); }}><Button autoFocus className="photo-close" size="icon" aria-label="Fechar foto" onClick={() => setPhoto(null)}><X /></Button><img src={photo} alt="Lua ampliada" /></div>}</Scene>;
}