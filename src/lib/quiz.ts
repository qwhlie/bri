export const quiz = [
  { question: "Quando as transmissões do Discord voltarem, qual foi a promessa?", options: ["Jogar Silent Hill", "Jogar comp no Valorant", "Ver todos os filmes de Harry Potter", "Xitar, xitar, xitar mesmo no apostado"], correct: [1] },
  { question: "No quiz das princesas, você era qual?", options: ["Cinderela", "Pocahontas", "Aurora", "Tiana", "Rapunzel"], correct: [1] },
  { question: "Qual música foi ao ar quando a gente se afastou?", options: ["Lisboa", "Tentar ser breve", "Será?", "A última dança", "Puxa o lança"], correct: [2] },
  { question: "Cantor(a) que eu não aguento te ouvir cantar em call?", options: ["Ana Vitoria", "Veigh", "KayBlack", "Marina Sena", "Vulgo FK"], correct: [0] },
  { question: "Quem me ensinou a jogar Valorant?", options: ["Cauã", "Nicolas", "Theo", "Jake", "Lixcth"], correct: [1] },
  { question: "Complete a frase: só queria meu…", options: ["Duo", "Bumbum", "Computador", "Viado", "Fone"], correct: [1] },
  { question: "Os Robux mais bem gastos:", options: ["Skin nova", "Gamepass", "Evento", "Jogo de anime", "Bloxburg"], correct: [4] },
  { question: "Qual é a música do Omen e da Sage?", options: ["Segredo", "Superficial", "Mistério", "Sal e pimenta", "Vestido da Fendi"], correct: [0] },
  { question: "Agora, um hiperfoco seu:", options: ["Moto", "Perfume", "Filmes", "Músicas", "Guerreiras do K-pop"], correct: [1] },
  { question: "Quem troca o banner do duo no Valorant?", options: ["Theo", "Jake", "Shadow", "Xm7", "Nicolas"], correct: [4] },
  { question: "Quem tem realmente marra?", options: ["Nicolas", "Shadow", "Theo", "Vitor", "Rodney"], correct: [0] },
  { question: "Complete a frase: entra na minha…", options: ["Casa", "Vida", "Jam", "Mandinga", "Alma"], correct: [2] },
  { question: "Você faz barulhos estranhos quando?", options: ["Perde no Valorant", "Entra em call", "Janta", "Nem te conto", "Escova os dentes"], correct: [4] },
  { question: "Quem é a cachorra mais fofa?", options: ["Sofi", "Sofia", "Cachorra", "Safada", "Goda"], correct: [0, 1, 2, 3, 4] },
  { question: "Que cor é o ursinho que você me deu por pura pressão?", options: ["Laranja", "Amarelo claro", "Vermelho", "Marrom", "Marrom amarelado"], correct: [0] },
  { question: "Eu sou sua...", options: ["bruxinha"], correct: [0] },
];

export function isCorrectAnswer(question: number, option: number) {
  return quiz[question]?.correct.includes(option) ?? false;
}

export function canContinuePhrase(text: string) {
  return text.trim().length > 0;
}

export function isCorrectPhrase(text: string) {
  return text.trim().toLocaleLowerCase("pt-BR") === "bruxinha";
}

export function nextQuizStep(question: number) {
  if (question === quiz.length) return "inclusive";
  return String(question + 1);
}