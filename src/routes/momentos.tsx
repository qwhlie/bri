import { createFileRoute } from "@tanstack/react-router";
import { MemoryAlbum } from "@/components/memory-album";
import { Scene, Next, Ornament } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
import one from "@/assets/moments/moment-1.png.asset.json";
import two from "@/assets/moments/moment-2.png.asset.json";
import three from "@/assets/moments/moment-3.png.asset.json";
import four from "@/assets/moments/moment-4.png.asset.json";
import five from "@/assets/moments/moment-5.png.asset.json";
import six from "@/assets/moments/moment-6.png.asset.json";
import seven from "@/assets/moments/moment-7.png.asset.json";
import eight from "@/assets/moments/moment-8.png.asset.json";
import background from "@/assets/backgrounds/bg-momentos.png.asset.json";
const photos = [one, two, three, four, five, six, seven, eight];
export const Route = createFileRoute("/momentos")({ head: () => surpriseHead("Nossos momentinhos", "Só para vc não esquecer de alguns momentinhos que passamos juntos."), component: Moments });
function Moments() {
  return <Scene background={background}><Ornament /><h1 className="script-heading script-heading-white">Só para vc não esquecer de alguns momentinhos que passamos juntos</h1><MemoryAlbum photos={photos} /><Next to="/mais-momentos" /></Scene>;
}
