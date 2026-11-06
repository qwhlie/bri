export const MOON_FRAME_MS = 1600;

export function quizDecorationGroup(question: number) {
  if (!Number.isInteger(question) || question < 1 || question > 16) return null;
  return Math.floor((question - 1) / 2);
}

export function soundtrackForPath(path: string) {
  if (path === "/do-mal") return null;
  if (path === "/musica") return { id: "Qdv3DjIOl6w", title: "EU XITO XITO MESMO APOSTADO — 86 RATO" };
  if (path === "/cartinha" || path === "/carta") return { id: "20UpB7XwQv4", title: "Wicked Game — Chris Isaak" };
  if (path === "/obrigada") return { id: "20UpB7XwQv4", title: "Wicked Game — Chris Isaak" };
  return { id: "2NAlWaC1v44", title: "Combo da Sorte" };
}

export function youtubeEmbedUrl(id: string) {
  return `https://www.youtube.com/embed/${id}?autoplay=1&loop=1&playlist=${id}&playsinline=1&rel=0`;
}