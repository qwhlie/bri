import { describe, expect, it } from "vitest";
import { quizDecorationGroup, soundtrackForPath, youtubeEmbedUrl } from "@/lib/presentation";

describe("chapter presentation rules", () => {
  it("changes decoration every two questions through question 16 only", () => {
    const expected = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];
    expected.forEach((group, index) => expect(quizDecorationGroup(index + 1)).toBe(group));
    expect(quizDecorationGroup(17)).toBeNull();
    expect(quizDecorationGroup(0)).toBeNull();
  });
  it("uses the supplied Xito video for the music chapter", () => expect(soundtrackForPath("/musica")?.id).toBe("Qdv3DjIOl6w"));
  it("switches to the supplied Wicked Game video on the letter", () => expect(soundtrackForPath("/cartinha")?.id).toBe("20UpB7XwQv4"));
  it("uses Será on ordinary chapters", () => expect(soundtrackForPath("/quiz/3")?.id).toBe("q6fqIe8vMHk"));
  it("never overlays music on horror", () => expect(soundtrackForPath("/do-mal")).toBeNull());
  it("loops each provided video", () => {
    for (const id of ["Qdv3DjIOl6w", "20UpB7XwQv4", "q6fqIe8vMHk"]) {
      const url = new URL(youtubeEmbedUrl(id));
      expect(url.searchParams.get("loop")).toBe("1");
      expect(url.searchParams.get("playlist")).toBe(id);
    }
  });
});