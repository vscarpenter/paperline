# Repository Guidelines

## Project Structure & Module Organization

Paperline is a static-first design-system package. Source files live in `src/`: `src/styles/paperline.css` contains tokens and themes, `src/icons.jsx` exports the `I` icon set, `src/components.jsx` exports React primitives, and `src/index.jsx` is the main package entry. Browser-ready artifacts live in `dist/`. Documentation and demos live in `docs/` and `examples/`.

## Build, Test, and Development Commands

- `npm run build`: regenerates `dist/*` from `src/` via `scripts/build.mjs`. Run after any change to `src/components.jsx`, `src/icons.jsx`, or `src/styles/paperline.css`.
- `npm test`: runs `scripts/check-package.mjs`. Verifies required files, docs references, src↔dist parity, and that every `PL*` export appears in `src/index.jsx`, the `Object.assign(window, …)` block, and the dist artifact.
- `npm run docs`: serves the repository with `python3 -m http.server 8000`.
- Open `docs/index.html` for the full spec, or `examples/browser.html` for the smallest static integration.

`dist/` is generated. Do not edit it by hand — re-run `npm run build`.

## Coding Style & Naming Conventions

Use two-space indentation. Keep CSS tokens prefixed with `--pl-` and grouped by purpose. Name React primitives with the `PL` prefix, for example `PLButton` or `PLToast`. Icons belong under the `I` namespace, inherit `currentColor`, use a 24x24 viewBox, and default to the established 1.6 stroke style.

Prefer `var(--pl-*)` token references over hardcoded component colors. Keep React as a peer dependency and avoid adding runtime dependencies unless the value is clear.

## Testing Guidelines

Run `npm test` after structural changes. Manually review `docs/index.html` in light and dark modes after token, component, icon, or docs edits. For component changes, add or update a visible example so reviewers can inspect default, hover/focus, disabled, and error states where relevant.

## Commit & Pull Request Guidelines

Use short imperative commit messages such as `Add table density tokens` or `Refine toast component`. Pull requests should summarize the visual or API change, list affected files, include screenshots for UI-facing updates, and note manual browser checks.

## Agent-Specific Instructions

Preserve the static distribution model. Source JSX changes must be paired with `npm run build` (which regenerates `dist/*.global.jsx`) and `npm test` (which fails if anything in `dist/` drifted). Never hand-edit `dist/`. If you add a new `PL*` primitive, also add it to `src/index.jsx` and to the `Object.assign(window, …)` block in `src/components.jsx`.
