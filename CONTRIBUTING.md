# Contributing

Paperline is intentionally small: CSS tokens, React JSX primitives, browser-global demo artifacts, and static documentation. Contributions should preserve that simplicity unless a larger tooling change has been discussed first.

## Local Setup

No install step is required for the static docs. To review locally:

```bash
npm test
npm run docs
```

Then open `http://localhost:8000/docs/index.html`.

## Change Guidelines

- Token changes belong in `src/styles/paperline.css` and must be copied to `dist/paperline.css`.
- React component changes belong in `src/components.jsx`; update `dist/paperline-components.global.jsx` when the browser demo should receive the same behavior.
- Icon changes belong in `src/icons.jsx`; update `dist/paperline-icons.global.jsx` for browser demos.
- Documentation examples should live in `docs/index.html` or `examples/`.

## Pull Requests

Describe the design or API change, list changed files, include screenshots for visual updates, and note which manual browser checks were performed.
