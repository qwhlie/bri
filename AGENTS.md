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
