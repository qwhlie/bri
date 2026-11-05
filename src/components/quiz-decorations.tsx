import plaque from "@/assets/quiz/plaque.png.asset.json";
import brush from "@/assets/quiz/brush.png.asset.json";
import tiles from "@/assets/quiz/tiles.png.asset.json";
import spirals from "@/assets/quiz/spirals.png.asset.json";
import frame from "@/assets/quiz/frame.png.asset.json";
import fish from "@/assets/quiz/fish.png.asset.json";
import lighthouse from "@/assets/quiz/lighthouse.png.asset.json";
import ducks from "@/assets/duck-chicks.png";
import bird from "@/assets/letter-bird.png";
import { quizDecorationGroup } from "@/lib/presentation";

const compositions = [
  [tiles, fish, plaque, brush],
  [lighthouse, frame, brush, tiles],
  [spirals, plaque, fish, frame],
  [frame, tiles, lighthouse, brush],
  [fish, brush, spirals, plaque],
  [tiles, lighthouse, frame, spirals],
  [brush, fish, plaque, tiles],
  [spirals, frame, lighthouse, fish],
];

export function QuizDecorations({ question }: { question: number }) {
  const group = quizDecorationGroup(question);
  if (group === null) return null;
  const composition = compositions[group];
  if (!composition) return null;
  return <div className={`quiz-collage collage-${group}`} data-decoration-group={group} aria-hidden="true">
    {composition.map((asset, index) => <img key={index} src={asset.url} alt="" className={`collage-art collage-art-${index}`} />)}
    <img src={composition[0]?.url} alt="" className="collage-art collage-echo" />
    <img src={ducks} alt="" className="collage-ducks" />
    <img src={bird} alt="" className="collage-bird" />
    <div className="collage-stitches" /><span className="collage-star">✧</span>
  </div>;
}