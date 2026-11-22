import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/bri/",
  },

  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: false,
    },
  },

  nitro: {
    preset: "github_pages",
    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        "/animacao",
        "/carta",
        "/carta-2",
        "/cartinha",
        "/do-mal",
        "/duo",
        "/escolha",
        "/gogo-boys",
        "/inclusive",
        "/little-things",
        "/mais-momentos",
        "/momentos",
        "/obrigada",
        "/outras-memorias",
        "/quiz-intro",
        "/quiz/1",
        "/quiz/2",
        "/quiz/3",
        "/quiz/4",
        "/quiz/5",
        "/quiz/6",
        "/quiz/7",
        "/quiz/8",
        "/quiz/9",
      ],
    },
  },
});
