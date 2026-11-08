import { createFileRoute } from "@tanstack/react-router";
import { MemoryAlbum } from "@/components/memory-album";
import { Scene, Next, Ornament } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
import one from "@/assets/memories/memory-11.png.asset.json";
import two from "@/assets/memories/memory-12.png.asset.json";
import three from "@/assets/memories/memory-13.png.asset.json";
import four from "@/assets/memories/memory-15.png.asset.json";
import five from "@/assets/memories/memory-16.png.asset.json";
import previousOne from "@/assets/moments/moment-9.png.asset.json";
import previousTwo from "@/assets/moments/moment-10.png.asset.json";
import background from "@/assets/backgrounds/bg-mais-momentos.png.asset.json";

const photos = [previousOne, previousTwo, one, two, three, four, five];
export const Route = createFileRoute("/mais-momentos")({
  head: () => surpriseHead("Mais momentinhos — Belle e Bri", "Mais lembranças dos nossos momentos juntos."),
  component: MoreMoments,
});
function MoreMoments() {
  return <Scene background={background}><Ornament /><h1 className="script-heading">Mais dos nossos momentinhos</h1><MemoryAlbum photos={photos} /><Next to="/outras-memorias" /></Scene>;
}