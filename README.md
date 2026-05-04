# Paperline

Paperline is a warm, editorial design system for any app: paper-toned surfaces, refined plum accents, Instrument Serif paired with Instrument Sans, curated 1.6-stroke icons, and small React primitives built on CSS variables.

## What's Included

```text
src/
  styles/paperline.css    Design tokens, themes, utility classes
  icons.jsx               ESM icon exports
  components.jsx          ESM React component exports
  index.jsx               Main package entry
dist/
  paperline.css           Copy-paste CSS artifact
  *.global.jsx            Browser globals for static demos
docs/
  index.html              Design system spec
  standalone.html         Self-contained spec bundle
examples/
  browser.html            Minimal browser integration
```

## Use the Tokens

Load the fonts and CSS, then apply `pl-root` to your application shell.

```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="dist/paperline.css" />
<body class="pl-root">...</body>
```

```css
.primary-action {
  background: var(--pl-accent-500);
  color: var(--pl-accent-ink);
  border-radius: var(--pl-r-md);
  box-shadow: var(--pl-shadow-sm);
  font-family: var(--pl-font-sans);
}
```

## Use the React Primitives

Paperline exports source JSX for React projects and keeps React as a peer dependency.

```jsx
import "paperline-design-system/styles.css";
import { I, PLBadge, PLButton, PLStat } from "paperline-design-system";

export function DashboardHeader() {
  return (
    <div>
      <PLButton kind="primary" icon={I.Plus}>New project</PLButton>
      <PLBadge tone="ok" dot>Active</PLBadge>
      <PLStat label="Revenue" value="$48.2k" delta="+12%" tone="ok" />
    </div>
  );
}
```

## Browser-Only Usage

For prototypes or static pages, use the files in `dist/` with React, ReactDOM, and Babel Standalone:

```html
<link rel="stylesheet" href="dist/paperline.css" />
<script type="text/babel" src="dist/paperline-icons.global.jsx"></script>
<script type="text/babel" src="dist/paperline-components.global.jsx"></script>
```

## Full Usage Guide

See [`docs/USAGE.md`](docs/USAGE.md) for an end-to-end guide: bundled-React vs. static-HTML setup, the full token cheat sheet, every component's prop signature, and a section on driving Paperline from coding agents like Claude Code and Codex.

## Local Review

```bash
npm test
npm run docs
```

`npm test` verifies the package structure and docs references. `npm run docs` serves the repo at `http://localhost:8000`; open `docs/index.html` or `examples/browser.html`.

## Dark Mode

Add `pl-dark` or `data-theme="dark"` to any wrapping element.

```html
<div class="pl-root pl-dark">...</div>
```

## Design Principles

- Paper, not panels: warm surfaces, hairlines, and soft depth.
- Serif for voice, sans for work.
- Plum is the only primary accent and should be used sparingly.
- Status colors are muted earth tones, never candy.
- Icons are one stroke, one set, and inherit `currentColor`.

## License

MIT. Created by [Vinny Carpenter](https://vinny.dev/).
