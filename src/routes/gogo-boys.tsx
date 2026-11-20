import { createFileRoute } from "@tanstack/react-router";
import { MemoryAlbum } from "@/components/memory-album";
import { Next, Ornament, Scene } from "@/components/surprise";
import { surpriseHead } from "@/lib/surprise-head";
import one from "@/assets/memories/memory-30.png.asset.json";
import two from "@/assets/memories/memory-31.png.asset.json";
import three from "@/assets/memories/memory-32.png.asset.json";
import four from "@/assets/memories/memory-33.png.asset.json";
import background from "@/assets/backgrounds/bg-outras-memorias.png.asset.json";

const photos = [one, two, three, four];

export const Route = createFileRoute("/gogo-boys")({
  head: () => surpriseHead("Gogo boys — Belle e Bri", "Uma lembrança de Belle e Bri para rirem juntos mais uma vez."),
  component: GogoBoys,
});

function GogoBoys() {
  return (
    <Scene background={background}>
      <Ornament />
      <h1 className="script-heading gogo-boys-heading">
        <span>belle: gogo boys, podem vir pela janela viu?</span>
        <span className="block">bri:</span>
      </h1>
      <MemoryAlbum photos={photos} />
      <Next to="/little-things" />
    </Scene>
  );
}
