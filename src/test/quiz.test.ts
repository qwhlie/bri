import { describe, expect, it } from "vitest";
import { quiz, isCorrectAnswer, nextQuizStep } from "@/lib/quiz";

describe("Julie's friendship quiz", () => {
  const answers = ["Jogar comp no Valorant", "Pocahontas", "Será?", "Ana Vitoria", "Nicolas", "Bumbum", "Bloxburg", "Segredo", "Perfume", "Nicolas", "Nicolas", "Jam", "Escova os dentes", "Sofi", "Laranja", "Vida pela sua"];
  answers.forEach((answer, question) => {
    it(`question ${question + 1} accepts ${answer} and rejects every incorrect option`, () => {
      const item = quiz[question];
      expect(item).toBeDefined();
      if (!item) return;
      expect(isCorrectAnswer(question, item.options.indexOf(answer))).toBe(true);
      item.options.forEach((option, index) => expect(isCorrectAnswer(question, index)).toBe(question === 13 || option === answer));
      expect(isCorrectAnswer(question, -1)).toBe(false);
    });
  });
  it("accepts every name for the cutest dog", () => {
    expect(quiz[13]?.options).toEqual(["Sofi", "Sofia", "Cachorra", "Safada", "Goda"]);
    for (let option = 0; option < 5; option++) expect(isCorrectAnswer(13, option)).toBe(true);
  });
  it("has only vida pela sua for the last question", () => expect(quiz[15]?.options).toEqual(["Vida pela sua"]));
  it("places music immediately after the first question", () => expect(nextQuizStep(1)).toBe("music"));
  it("continues to the moon after question 16", () => expect(nextQuizStep(16)).toBe("inclusive"));
  it("continues other questions in sequence", () => { for (let question = 2; question < 16; question++) expect(nextQuizStep(question)).toBe(String(question + 1)); });
});