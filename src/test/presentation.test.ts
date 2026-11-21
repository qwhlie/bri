import { describe, expect, it } from "vitest";
import { MOON_FRAME_MS, quizDecorationGroup, soundtrackForPath, youtubeEmbedUrl } from "@/lib/presentation";

describe("chapter presentation rules", () => {
  it("changes decoration every two questions through question 16 only", () => {
    const expected = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];
    expected.forEach((group, index) => expect(quizDecorationGroup(index + 1)).toBe(group));
    expect(quizDecorationGroup(17)).toBeNull();
    expect(quizDecorationGroup(0)).toBeNull();
  });
  it("uses the supplied Xito video for the music chapter", () => expect(soundtrackForPath("/musica")?.id).toBe("Qdv3DjIOl6w"));
  it("switches to the supplied You Are the Right One video on the letter", () => expect(soundtrackForPath("/cartinha")?.id).toBe("Y_hdQXQfsNg"));
  it("keeps You Are the Right One on the letter outside its envelope", () => expect(soundtrackForPath("/carta")?.id).toBe("Y_hdQXQfsNg"));
  it("keeps You Are the Right One on the second letter page", () => expect(soundtrackForPath("/carta-2")?.id).toBe("Y_hdQXQfsNg"));
  it("keeps You Are the Right One on the final page", () => expect(soundtrackForPath("/obrigada")?.id).toBe("Y_hdQXQfsNg"));
  it("accelerates the moon frames from the previous 2200ms", () => expect(MOON_FRAME_MS).toBeLessThan(2200));
  it("requests automatic playback", () => expect(new URL(youtubeEmbedUrl("ORXurYriT8Q")).searchParams.get("autoplay")).toBe("1"));
  it("uses Combo da Sorte on ordinary chapters", () => expect(soundtrackForPath("/quiz/3")?.id).toBe("2NAlWaC1v44"));
  it("never overlays music on horror", () => expect(soundtrackForPath("/do-mal")).toBeNull());
  it("loops each provided video", () => {
    for (const id of ["Qdv3DjIOl6w", "Y_hdQXQfsNg", "2NAlWaC1v44"]) {
      const url = new URL(youtubeEmbedUrl(id));
      expect(url.searchParams.get("loop")).toBe("1");
      expect(url.searchParams.get("playlist")).toBe(id);
    }
  });
});