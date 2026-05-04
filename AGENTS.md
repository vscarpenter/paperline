# Repository Guidelines

## Project Structure & Module Organization

Paperline is a static-first design-system package. Source files live in `src/`: `src/styles/paperline.css` contains tokens and themes, `src/icons.jsx` exports the `I` icon set, `src/components.jsx` exports React primitives, and `src/index.jsx` is the main package entry. Browser-ready artifacts live in `dist/`. Documentation and demos live in `docs/` and `examples/`.

## Build, Test, and Development Commands

- `npm test`: runs `scripts/check-package.mjs` to verify required files and docs references.
- `npm run docs`: serves the repository with `python3 -m http.server 8000`.
- Open `docs/index.html` for the full spec, or `examples/browser.html` for the smallest static integration.

There is no bundler step today. Keep `dist/` aligned manually when changing source files used by browser demos.

## Coding Style & Naming Conventions

Use two-space indentation. Keep CSS tokens prefixed with `--pl-` and grouped by purpose. Name React primitives with the `PL` prefix, for example `PLButton` or `PLToast`. Icons belong under the `I` namespace, inherit `currentColor`, use a 24x24 viewBox, and default to the established 1.6 stroke style.

Prefer `var(--pl-*)` token references over hardcoded component colors. Keep React as a peer dependency and avoid adding runtime dependencies unless the value is clear.

## Testing Guidelines

Run `npm test` after structural changes. Manually review `docs/index.html` in light and dark modes after token, component, icon, or docs edits. For component changes, add or update a visible example so reviewers can inspect default, hover/focus, disabled, and error states where relevant.

## Commit & Pull Request Guidelines

Use short imperative commit messages such as `Add table density tokens` or `Refine toast component`. Pull requests should summarize the visual or API change, list affected files, include screenshots for UI-facing updates, and note manual browser checks.

## Agent-Specific Instructions

Preserve the static distribution model unless asked to add a bundler. If source JSX behavior changes, update the matching `dist/*.global.jsx` file or document why it intentionally diverges.
