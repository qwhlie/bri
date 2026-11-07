import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
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
import nine from "@/assets/moments/moment-9.png.asset.json";
import ten from "@/assets/moments/moment-10.png.asset.json";
const photos = [one, two, three, four, five, six, seven, eight, nine, ten];
export const Route = createFileRoute("/momentos")({ head: () => surpriseHead("Nossos momentinhos", "Só para vc não esquecer de alguns momentinhos que passamos juntos."), component: Moments });
function Moments() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(0);
  const photo = photos[selected];
  function move(direction: number) {
    setSelected(current => (current + direction + photos.length) % photos.length);
  }
  return <Scene><Ornament /><h1 className="script-heading">Só para vc não esquecer de alguns momentinhos que passamos juntos</h1>
    <Dialog.Root open={opened} onOpenChange={setOpened}>
      <div className="polaroid-pile">
        {photos.map((asset, i) => <Dialog.Trigger asChild key={asset.asset_id}>
          <Button className={`moment-polaroid polaroid-${i}`} aria-label={`Abrir foto ${i + 1}`} onClick={() => setSelected(i)}>
            <img src={asset.url} alt={`Momentinho ${i + 1}`} width={400} height={320} />
            <span aria-hidden="true">{String(i + 1).padStart(2, "0")} ♡</span>
          </Button>
        </Dialog.Trigger>)}
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="moment-overlay" />
        <Dialog.Content className="moment-viewer" aria-describedby={undefined} onKeyDown={event => {
          if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
        }}>
          <Dialog.Title className="sr-only">Nossos momentinhos</Dialog.Title>
          <Dialog.Close asChild><Button className="moment-close" variant="secondary" size="icon" aria-label="Fechar foto" title="Fechar foto"><X /></Button></Dialog.Close>
          <figure className="moment-expanded">
            {photo && <img src={photo.url} alt={`Momentinho ${selected + 1}`} />}
            <figcaption aria-live="polite">{selected + 1} / {photos.length} ♡</figcaption>
          </figure>
          <div className="moment-navigation">
            <Button variant="secondary" size="icon" aria-label="Foto anterior" title="Foto anterior" onClick={() => move(-1)}><ChevronLeft /></Button>
            <Button variant="secondary" size="icon" aria-label="Próxima foto" title="Próxima foto" onClick={() => move(1)}><ChevronRight /></Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    <Next to="/little-things" />
  </Scene>;
}