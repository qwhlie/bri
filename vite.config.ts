import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/bri/",
  },

  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
    pages: [
      { path: "/quiz/1" },
      { path: "/quiz/2" },
      { path: "/quiz/3" },
      { path: "/quiz/4" },
      { path: "/quiz/5" },
      { path: "/quiz/6" },
      { path: "/quiz/7" },
      { path: "/quiz/8" },
      { path: "/quiz/9" },
    ],
  },

  nitro: {
    preset: "github-pages",
  },
});
