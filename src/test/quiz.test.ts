import { describe, expect, it } from "vitest";
import { quiz, isCorrectAnswer, nextQuizStep, canContinuePhrase, isCorrectTyped, isCorrectPhrase } from "@/lib/quiz";

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
  it("accepts king e kenga for the nickname question and rejects other answers", () => {
    const item = quiz[6];
    expect(item?.typed).toBe(true);
    expect(isCorrectTyped("king e kenga", item?.answer ?? "")).toBe(true);
    expect(isCorrectTyped(" King e Kenga ", item?.answer ?? "")).toBe(true);
    expect(isCorrectTyped("kenga e king", item?.answer ?? "")).toBe(false);
    expect(item?.wrongMessage).toBe("Nãooooo Briii, é King e Kenga esqueceu");
  });
  it("accepts daddy for the nickname question and rejects other answers", () => {
    const item = quiz[7];
    expect(item?.typed).toBe(true);
    expect(isCorrectTyped("daddy", item?.answer ?? "")).toBe(true);
    expect(isCorrectTyped(" Daddy ", item?.answer ?? "")).toBe(true);
    expect(isCorrectTyped("bri", item?.answer ?? "")).toBe(false);
    expect(item?.wrongMessage).toBe("Oxi, ta certo isso não, eu acho que é daddy");
  });
  const answers = ["8 minutos", "Belle", "Bri", "14", "No mamilo", "4 skins"];
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
  it("has only bruxinha for the last question", () => expect(quiz[8]?.options).toEqual(["bruxinha"]));
  it("continues to the moon after question 9", () => expect(nextQuizStep(9)).toBe("inclusive"));
  it("continues other questions in sequence", () => { for (let question = 1; question < 9; question++) expect(nextQuizStep(question)).toBe(String(question + 1)); });
});
