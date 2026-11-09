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
  const answers = ["8 minutos", "Belle", "Bri", "14", "No mamilo", "4 skins", "bruxinha"];
  answers.forEach((answer, question) => {
    it(`question ${question + 1} accepts ${answer} and rejects every incorrect option`, () => {
      const item = quiz[question];
      expect(item).toBeDefined();
      if (!item) return;
      expect(isCorrectAnswer(question, item.options.indexOf(answer))).toBe(true);
      item.options.forEach((option, index) => expect(isCorrectAnswer(question, index)).toBe(option === answer));
      expect(isCorrectAnswer(question, -1)).toBe(false);
    });
  });
  it("has only bruxinha for the last question", () => expect(quiz[6]?.options).toEqual(["bruxinha"]));
  it("continues to the moon after question 7", () => expect(nextQuizStep(7)).toBe("inclusive"));
  it("continues other questions in sequence", () => { for (let question = 1; question < 7; question++) expect(nextQuizStep(question)).toBe(String(question + 1)); });
});
