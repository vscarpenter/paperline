# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm test` — runs `scripts/check-package.mjs`, which verifies the required files exist and that `docs/index.html` still references the three `../dist/paperline*` artifacts. It is a structural check, not a unit-test runner.
- `npm run docs` — serves the repo root via `python3 -m http.server 8000`. Open `http://localhost:8000/docs/index.html` for the full spec or `http://localhost:8000/examples/browser.html` for the minimal integration.
- There is no build step, no lint, and no test framework. Source files are shipped as-is.

## Architecture

Paperline is a static-first design-system package with a **dual distribution** that must be kept in sync manually:

- `src/` is the ESM entry consumed by bundled React apps (`exports` in `package.json` points here). `src/index.jsx` re-exports `Icon`, `I`, and the `PL*` primitives. React is a peer dependency — never add it as a runtime dep.
- `dist/` contains browser-global twins of the same code. `dist/paperline-components.global.jsx` and `dist/paperline-icons.global.jsx` are loaded directly in `<script type="text/babel">` tags by `docs/index.html` and `examples/browser.html`. They strip `import`/`export`, replace `import { useState } from "react"` with `const { useState } = React`, and end with `Object.assign(window, { … })` to expose symbols globally.
- `dist/paperline.css` is a byte-for-byte copy of `src/styles/paperline.css`. The check script does not enforce parity between src and dist — when you change source files used by the browser demos, you must mirror the change into the matching `dist/*` file.

### Tokens and theming

All visual decisions flow through CSS custom properties defined in `src/styles/paperline.css`:

- Surfaces (`--pl-paper-*`), ink (`--pl-ink-*`), accent plum (`--pl-accent-*`), muted status colors, categorical chart palette, type stack, 4px-rhythm spacing, radius, shadows, and motion tokens.
- Components apply tokens through inline `style={{ background: "var(--pl-accent-500)", … }}` — they have no className-based theming. Never hardcode hex colors in components; always reference `var(--pl-*)`.
- Dark mode is achieved by adding `pl-dark` (or `data-theme="dark"`) to a wrapping element; the CSS file rebinds the same variables under that selector. New tokens must define both light and dark values.

### Icons

`src/icons.jsx` exports a single `Icon` wrapper (24x24 viewBox, 1.6 stroke, `currentColor`) and an `I` namespace object whose keys return small JSX helpers like `I.Plus`, `I.Search`. Add new icons as members of `I` so consumers can pass them as props (`<PLButton icon={I.Plus} />`). Mirror additions into `dist/paperline-icons.global.jsx`.

### Components

`src/components.jsx` exports `PL`-prefixed primitives (`PLButton`, `PLInput`, `PLBadge`, `PLCard`, `PLTable`, `PLToast`, etc.). Conventions in this file:

- Variant maps live as plain objects at the top of each component (`const kinds = { primary: {...}, ghost: {...} }`); add new variants by extending the map, not by branching.
- Sizing maps follow the same pattern (`sm`/`md`/`lg`).
- Components stay small and composable — no internal state beyond what the primitive obviously owns (e.g. `PLToast` manages its own visibility timer).
- After changing behavior here, update `dist/paperline-components.global.jsx` to match (or document why it intentionally diverges).

## Conventions

- Two-space indentation across CSS and JSX.
- CSS tokens are prefixed `--pl-` and grouped by purpose with banner comments.
- React primitives use the `PL` prefix; icons live under the `I` namespace.
- Plum is the only primary accent and should be used sparingly; status colors are muted earth tones, never saturated.
- For component changes, add or update a visible example in `docs/index.html` so reviewers can inspect default, hover/focus, disabled, and error states.

## Package surface

`package.json` `exports` map (do not break without a version bump):

- `.` → `./src/index.jsx`
- `./styles.css` → `./src/styles/paperline.css`
- `./components`, `./icons` → matching `src/*.jsx`
- `./dist/paperline.css`, `./dist/components.global.jsx`, `./dist/icons.global.jsx` → the browser-global artifacts
