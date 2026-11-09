export const quiz = [
  { question: "Quanto tempo é de Londrina City até Franca Hill?", options: ["8 minutos", "6 horas e 40 minutos", "3 horinhas só"], correct: [0] },
  { question: "Quem faz o melhor bolo no joguinho do Roblox?", options: ["Belle", "Bri"], correct: [0] },
  { question: "Quem (apesar de não ser o melhor) sempre ganha no joguinho de bolo no Roblox?", options: ["Belle", "Bri"], correct: [1] },
  { question: "Quantas skins escolhemos em um dia (no dia que entramos naquele jogo de skins)?", options: ["7", "4", "3", "14"], correct: [3] },
  { question: "No Roblox, seu piercing principal é onde?", options: ["No rosto", "Na orelha", "No umbigo", "No mamilo"], correct: [3] },
  { question: "Quantas skins combinando já usamos?", options: ["4 skins", "3 skins", "5 skins"], correct: [0] },
  { question: "Eu sou sua...", options: ["bruxinha"], correct: [0] },
];

export function isCorrectAnswer(question: number, option: number) {
  return quiz[question]?.correct.includes(option) ?? false;
}

export function canContinuePhrase(text: string, answeredWrong = false) {
  return !answeredWrong && text.trim().length > 0;
}

export function isCorrectPhrase(text: string) {
  return text.trim().toLocaleLowerCase("pt-BR") === "bruxinha";
}

export function nextQuizStep(question: number) {
  if (question === quiz.length) return "inclusive";
  return String(question + 1);
}
