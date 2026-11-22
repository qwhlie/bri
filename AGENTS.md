<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep each surprise chapter as a separate TanStack leaf route with shared presentation in `src/components/surprise.tsx`, so the sequence has real page navigation.
- Keep quiz content and answer validation in a browser-safe data module with one-based URL question numbers and zero-based answer indices, so correctness is independently testable.
- Use temporary client-only audio and clearly marked sample content until the owner supplies personal media; never invent personal memories or a letter.
- Keep story decorations in the shared presentation and chapter animations in CSS with reduced-motion fallbacks, so animated chapters remain accessible without changing quiz logic.
- Keep the temporary horror soundtrack in a client-only Web Audio hook with bounded gain, user volume controls and unmount cleanup, so it needs no remote media and never continues on other chapters.
- Derive paired quiz collages and chapter soundtrack selection in a browser-safe presentation module, so their boundaries can be tested without rendering.
- Mount one route-aware visible YouTube player in the shared root, request autoplay with a manual playback fallback, and exclude horror, so recordings never overlap chapter audio and browser restrictions remain respected.
- Keep memory chapters on separate leaf routes sharing `MemoryAlbum`, with uploaded photos as CDN pointers and an accessible modal with cyclic navigation, so presentation stays consistent and keyboard focus remains contained.
- Serve the surprise at the domain root using the default Lovable deployment configuration; redirect the legacy /bri entry to / so static hosting settings cannot bypass the opening animation.
