import { describe, expect, it } from "vitest";

import { letterGreeting, letterParagraphs } from "@/lib/letter";

describe("Carta de Belle para Bri", () => {
  it("opens with the birthday greeting exactly as Julie wrote it", () => {
    expect(letterGreeting).toBe("Feliz aniversário Briiiii!");
  });

  it("keeps the three paragraphs of the letter", () => {
    expect(letterParagraphs).toHaveLength(3);
  });

  it("keeps the lines Julie wrote about writing with her heart", () => {
    expect(letterParagraphs[0]).toContain("estou escrevendo com meu coração");
    expect(letterParagraphs[0]).toContain("Zero chat gpt");
  });

  it("keeps the Shadow do Mingau line and the ending about the true Julie", () => {
    expect(letterParagraphs[1]).toContain("“Shadow” do Mingau");
    expect(letterParagraphs[2]).toContain("conheceu a verdadeira Julie");
  });
});
