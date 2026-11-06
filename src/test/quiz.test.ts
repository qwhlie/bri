import { describe, expect, it } from "vitest";
import { quiz, isCorrectAnswer, nextQuizStep, canContinuePhrase, isCorrectPhrase } from "@/lib/quiz";

describe("Julie's friendship quiz", () => {
  it("prevents another submission after an incorrect typed answer", () => {
    expect(canContinuePhrase("bruxa", true)).toBe(false);
    expect(canContinuePhrase("bruxinha", true)).toBe(false);
    expect(canContinuePhrase("bruxinha", false)).toBe(true);
  });
  it("accepts bruxinha as the typed final answer and rejects other answers", () => {
    expect(isCorrectPhrase("bruxinha")).toBe(true);
    expect(isCorrectPhrase(" Bruxinha ")).toBe(true);
    expect(isCorrectPhrase("vida pela sua")).toBe(false);
    expect(isCorrectPhrase("bruxa")).toBe(false);
    expect(isCorrectPhrase("")).toBe(false);
    expect(canContinuePhrase("   ")).toBe(false);
  });
  const answers = ["Jogar comp no Valorant", "Pocahontas", "Será?", "Ana Vitoria", "Nicolas", "Bumbum", "Bloxburg", "Segredo", "Perfume", "Nicolas", "Nicolas", "Jam", "Escova os dentes", "Sofi", "Laranja", "bruxinha"];
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
  it("has only bruxinha for the last question", () => expect(quiz[15]?.options).toEqual(["bruxinha"]));
  it("skips the removed Xito chapter after the first question", () => expect(nextQuizStep(1)).toBe("2"));
  it("continues to the moon after question 16", () => expect(nextQuizStep(16)).toBe("inclusive"));
  it("continues other questions in sequence", () => { for (let question = 2; question < 16; question++) expect(nextQuizStep(question)).toBe(String(question + 1)); });
});