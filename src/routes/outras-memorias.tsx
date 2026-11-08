import { createFileRoute } from "@tanstack/react-router";
import { MemoryAlbum } from "@/components/memory-album";
import { Scene, Next, Ornament } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
import one from "@/assets/memories/memory-17.png.asset.json";
import two from "@/assets/memories/memory-18.png.asset.json";
import three from "@/assets/memories/memory-19.png.asset.json";
import four from "@/assets/memories/memory-20.png.asset.json";
import five from "@/assets/memories/memory-21.png.asset.json";
import six from "@/assets/memories/memory-22.png.asset.json";
import seven from "@/assets/memories/memory-23.png.asset.json";
import background from "@/assets/backgrounds/bg-outras-memorias.png.asset.json";

const photos = [one, two, three, four, five, six, seven];
export const Route = createFileRoute("/outras-memorias")({
  head: () => surpriseHead("Lembranças guardadas — Belle e Bri", "Mais memórias de Belle e Bri guardadas com carinho."),
  component: OtherMemories,
});
function OtherMemories() {
  return <Scene background={background}><Ornament /><h1 className="script-heading">Lembranças guardadas com carinho</h1><MemoryAlbum photos={photos} /><Next to="/little-things" /></Scene>;
}