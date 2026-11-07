import { createFileRoute } from "@tanstack/react-router";
import { MemoryAlbum } from "@/components/memory-album";
import { Scene, Next, Ornament } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
import one from "@/assets/memories/memory-11.png.asset.json";
import two from "@/assets/memories/memory-12.png.asset.json";
import three from "@/assets/memories/memory-13.png.asset.json";
import four from "@/assets/memories/memory-15.png.asset.json";
import five from "@/assets/memories/memory-16.png.asset.json";
import six from "@/assets/memories/memory-17.png.asset.json";
import seven from "@/assets/memories/memory-18.png.asset.json";
import eight from "@/assets/memories/memory-19.png.asset.json";
import nine from "@/assets/memories/memory-20.png.asset.json";

const photos = [one, two, three, four, five, six, seven, eight, nine];
export const Route = createFileRoute("/mais-momentos")({
  head: () => surpriseHead("Mais momentinhos — Belle e Bri", "Mais lembranças dos nossos momentos juntos."),
  component: MoreMoments,
});
function MoreMoments() {
  return <Scene><Ornament /><h1 className="script-heading">Mais dos nossos momentinhos</h1><MemoryAlbum photos={photos} /><Next to="/little-things" /></Scene>;
}