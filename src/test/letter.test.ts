import { describe, expect, it } from "vitest";

import { letterClosingParagraphs, letterGreeting, letterParagraphs } from "@/lib/letter";

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

  it("keeps the three closing paragraphs Julie sent for the second letter page", () => {
    expect(letterClosingParagraphs).toHaveLength(3);
  });

  it("keeps the 18 ANOS line exactly as Julie wrote it", () => {
    expect(letterClosingParagraphs[0]).toContain("principalmente nos seus 18 ANOS");
    expect(letterClosingParagraphs[0]).toContain("é uma parte da sua vida neee");
  });

  it("keeps the wish for health, peace and wisdom and the coming-of-age ending", () => {
    expect(letterClosingParagraphs[1]).toContain("Muita saude, paz e prosperidade na sua vida sempreeee");
    expect(letterClosingParagraphs[1]).toContain("ta podendo ir preso");
    expect(letterClosingParagraphs[2]).toBe("Feliz maioridadeeee briiii!!");
  });
});
