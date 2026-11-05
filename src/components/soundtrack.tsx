import { useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Music2, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { soundtrackForPath, youtubeEmbedUrl } from "@/lib/presentation";

export function Soundtrack() {
  const pathname = useRouterState({ select: state => state.location.pathname });
  const [enabled, setEnabled] = useState(true);
  const track = soundtrackForPath(pathname);
  if (!track) return null;
  return <aside className={`soundtrack ${enabled ? "soundtrack-open" : ""}`} aria-label="Música da página">
    <div className="soundtrack-bar">
      <Button variant="secondary" size="icon" onClick={() => setEnabled(value => !value)} aria-label={enabled ? "Parar música" : "Tocar música"} title={enabled ? "Parar música" : "Tocar música"}>
        {enabled ? <Pause size={18} /> : <Music2 size={18} />}
      </Button>
    </div>
    {enabled && <iframe key={track.id} src={youtubeEmbedUrl(track.id)} title={pathname === "/musica" ? "Música da página" : track.title} width="224" height="200" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />}
  </aside>;
}