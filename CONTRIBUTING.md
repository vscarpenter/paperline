# Contributing

Paperline is intentionally small: CSS tokens, React JSX primitives, browser-global demo artifacts, and static documentation. Contributions should preserve that simplicity unless a larger tooling change has been discussed first.

## Local Setup

No install step is required for the static docs. To review locally:

```bash
npm run build   # regenerates dist/ from src/
npm test        # structural + parity check
npm run docs    # serves the repo for manual review
```

Then open `http://localhost:8000/docs/index.html`.

## Change Guidelines

- Token changes belong in `src/styles/paperline.css`. Run `npm run build` to copy them into `dist/paperline.css`.
- React component changes belong in `src/components.jsx`. Run `npm run build` to regenerate `dist/paperline-components.global.jsx`.
- Icon changes belong in `src/icons.jsx`. Run `npm run build` to regenerate `dist/paperline-icons.global.jsx`.
- **Never edit anything inside `dist/` by hand.** `npm test` will fail with a parity error.
- New `PL*` exports must appear in (a) the `export { … }` block of `src/components.jsx`, (b) the `Object.assign(window, …)` block in the same file, and (c) `src/index.jsx`. The check script enforces all three.
- Documentation examples should live in `docs/index.html` or `examples/`.

## Pull Requests

Describe the design or API change, list changed files, include screenshots for visual updates, and note which manual browser checks were performed.
