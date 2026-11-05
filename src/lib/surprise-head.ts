export function surpriseHead(title: string, description: string) {
  return { meta: [
    { title: `${title} — Uma surpresinha pra você` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} — Uma surpresinha pra você` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] };
}