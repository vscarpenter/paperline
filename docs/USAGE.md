# Using Paperline

A practical guide to dropping Paperline into your project — and to handing it to a coding agent (Claude Code, Codex, Cursor) so it builds on-brand UI for you.

---

## 1. Pick your integration

Paperline ships in two shapes from the same repo:

| You have… | Use this | What loads |
| --- | --- | --- |
| A bundled React app (Vite, Next, Remix, CRA) | `src/` ESM entry | `import { PLButton, I } from "paperline-design-system"` + `import "paperline-design-system/styles.css"` |
| A static HTML page or prototype | `dist/` browser globals | Babel Standalone parses `dist/*.global.jsx`; components attach to `window` |

Either way you need the three Google Fonts (Instrument Sans, Instrument Serif, JetBrains Mono) and a wrapping element with class `pl-root`.

### React app

```bash
npm install paperline-design-system react react-dom
```

```jsx
// app entry
import "paperline-design-system/styles.css";
import { PLButton, PLCard, PLStat, I } from "paperline-design-system";

export default function Dashboard() {
  return (
    <div className="pl-root" style={{ padding: 24 }}>
      <PLCard>
        <div className="pl-eyebrow">Today</div>
        <h1 className="pl-serif" style={{ fontSize: 32, margin: "8px 0" }}>
          Welcome back.
        </h1>
        <PLButton kind="primary" icon={I.Plus}>New project</PLButton>
      </PLCard>
    </div>
  );
}
```

Don't forget the font links in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
```

### Static HTML

Copy `dist/paperline.css`, `dist/paperline-icons.global.jsx`, and `dist/paperline-components.global.jsx` into your site, then:

```html
<link rel="stylesheet" href="paperline.css" />
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"></script>

<body class="pl-root">
  <main id="root"></main>
  <script type="text/babel" src="paperline-icons.global.jsx"></script>
  <script type="text/babel" src="paperline-components.global.jsx"></script>
  <script type="text/babel">
    ReactDOM.createRoot(document.getElementById("root")).render(
      <PLCard><PLButton icon={I.Plus}>Create</PLButton></PLCard>
    );
  </script>
</body>
```

`examples/browser.html` is a working copy of this.

### Tokens only (no React)

If you just want the look, link the CSS and reference variables directly:

```css
.cta {
  background: var(--pl-accent-500);
  color: var(--pl-accent-ink);
  border-radius: var(--pl-r-md);
  box-shadow: var(--pl-shadow-sm);
  padding: var(--pl-s-2) var(--pl-s-4);
  font-family: var(--pl-font-sans);
}
```

### Dark mode

Toggle a class on any wrapping element. The same variables rebind underneath:

```html
<div class="pl-root pl-dark"><!-- or data-theme="dark" --></div>
```

---

## 2. Token cheat sheet

All tokens are CSS custom properties prefixed `--pl-`. **Never hardcode hex colors when a token exists** — that is what keeps dark mode and future re-skins working.

| Group | Tokens |
| --- | --- |
| Surfaces | `--pl-paper-0/1/2/3`, `--pl-paper-card` |
| Hairlines | `--pl-hairline`, `--pl-hairline-strong` |
| Ink | `--pl-ink-1` (primary) → `--pl-ink-5` (disabled) |
| Accent (plum) | `--pl-accent-50/100/200/300/400/500/600/700`, `--pl-accent-ink` |
| Status | `--pl-{ok,warn,danger,info}-{50,200,500,700}` |
| Categorical | `--pl-cat-{blue,amber,green,rose,plum,clay,moss,teal}` |
| Type | `--pl-font-sans`, `--pl-font-serif`, `--pl-font-mono` |
| Spacing (4px rhythm) | `--pl-s-0` … `--pl-s-11` (0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 96) |
| Radius | `--pl-r-xs/sm/md/lg/xl/2xl/pill` |
| Shadow | `--pl-shadow-xs/sm/md/lg/xl/lift` |
| Focus | `--pl-focus`, `--pl-focus-danger` |
| Motion | `--pl-ease`, `--pl-ease-out`, `--pl-dur-1/2/3/4` |
| Z-index | `--pl-z-dropdown/sticky/overlay/modal/toast` |

Utility classes on `.pl-root`: `pl-eyebrow`, `pl-display`, `pl-h1`, `pl-h2`, `pl-h3`, `pl-body`, `pl-small`, `pl-serif`, `pl-mono`.

---

## 3. Component reference

All components are exported from `paperline-design-system` and prefixed `PL`. Every variant prop is a **string union** — use the exact strings below.

| Component | Key props |
| --- | --- |
| `PLButton` | `kind`: `primary` \| `secondary` \| `ghost` \| `danger` \| `accentSoft` · `size`: `sm` \| `md` \| `lg` · `icon`, `iconRight` (icon component) · `disabled`, `fullWidth` |
| `PLInput` | `icon`, `suffix`, `placeholder`, `value`, `onChange`, `type`, `error` |
| `PLTextarea` | `placeholder`, `value`, `onChange`, `rows` |
| `PLToggle` / `PLCheckbox` / `PLRadio` | `checked`, `onChange`, `label` (Checkbox also: `indeterminate`) |
| `PLBadge` | `tone`: `neutral` \| `accent` \| `ok` \| `warn` \| `danger` \| `info` · `dot` |
| `PLTag` | children only — mono-font code chip |
| `PLCard` | `padding`, `lifted`, `hover`, plus passthrough `style` |
| `PLAvatar` | `name`, `size`, `src`, `color` (any `--pl-cat-*`) |
| `PLAvatarGroup` | `people: [{ name, color }]`, `max` |
| `PLProgress` | `value` (0–100), `label`, `accent` |
| `PLAlert` | `tone`: `info` \| `ok` \| `warn` \| `danger` · `title`, `icon` |
| `PLTabs` | `items: [{ value, label }]`, `value`, `onChange` |
| `PLStat` | `label`, `value`, `delta` (string starting with `+`/`-`), `tone` |
| `PLTable` | `columns: [{ key, label, render? }]`, `rows` |
| `PLToast` | `tone`: `neutral` \| `ok` \| `danger` · `icon`, `title`, `action` |

### Icons

All icons live under the `I` namespace and are passed as **components**, not elements:

```jsx
import { I } from "paperline-design-system";

<PLButton icon={I.Plus}>Add</PLButton>          // ✅
<PLButton icon={<I.Plus />}>Add</PLButton>      // ❌ wrong shape
```

`I` includes `Search`, `Filter`, `Plus`, `ChevLeft/Right/Up/Down`, `More`, `Calendar`, `Tag`, `Flag`, `Check`, `X`, `Edit`, `Share`, `Move`, `Archive`, `Trash`, `Info`, `Alert`, and more — open `src/icons.jsx` for the full list. Each icon accepts `size`, `strokeWidth`, and `style`, and inherits `currentColor`.

---

## 4. Using Paperline with Claude Code

Claude Code (and similar agents like Codex CLI / Cursor) work best when you tell them about the design system **before** asking them to build UI. Three options, in increasing durability:

### Option A — drop a system prompt in the chat

Paste this once at the start of a session:

```
We use the Paperline design system. Rules:
- Wrap the app in <div className="pl-root"> and import "paperline-design-system/styles.css".
- Use <PLButton>, <PLCard>, <PLBadge>, <PLInput>, <PLAlert>, <PLStat>, <PLTabs>, <PLTable>, <PLToast>, <PLAvatar>, <PLProgress>, <PLToggle>, <PLCheckbox>, <PLRadio>, <PLTag> from "paperline-design-system" instead of building primitives.
- Pass icons as components: icon={I.Plus}, never <I.Plus />.
- Variant props are string unions. Use exactly: PLButton kind = primary|secondary|ghost|danger|accentSoft. PLBadge/PLAlert tone = ok|warn|danger|info (Badge also: neutral|accent).
- For colors, spacing, radius, shadow, type — reference var(--pl-*) tokens. Never hardcode hex.
- Use serif (`pl-serif` / `--pl-font-serif`) for display headlines, sans for UI, mono only for numbers and code.
- Plum (`--pl-accent-500`) is the only primary accent. Use it sparingly.
- Status colors are muted; never substitute saturated greens/reds.
```

### Option B — make it permanent in `CLAUDE.md` / `AGENTS.md`

Add a `## Design system` section to your project's `CLAUDE.md` (Claude Code reads this automatically) or `AGENTS.md` (Codex CLI reads this). Paste the rules above. Now every session starts already aware of Paperline.

### Option C — point the agent at the spec

The repo ships a full visual spec at `docs/index.html`. From inside Claude Code:

```
Read docs/index.html and src/components.jsx to learn the Paperline component API,
then build a settings page using PLCard, PLToggle, and PLInput.
```

The agent will read both files, see every variant in context, and stop guessing.

### Example prompts that work well

> "Build a project list page. Header with `pl-h1` title and a primary `PLButton` with `I.Plus`. Below, a `PLTable` with columns Project, Owner (`PLAvatar`), Status (`PLBadge`), and Updated. Wrap everything in `pl-root`."

> "Add a dark mode toggle. Toggle adds/removes `pl-dark` on the root div. Persist in localStorage. Use `PLToggle` with label 'Dark mode'."

> "Convert this Tailwind component to Paperline. Replace `bg-purple-600` with `var(--pl-accent-500)`, `rounded-lg` with `var(--pl-r-lg)`, and use `PLCard` instead of the outer div."

### What to do when the agent invents things

Common drift patterns and fixes:

| Agent did this | Correction |
| --- | --- |
| `<PLButton variant="primary">` | "The prop is `kind`, not `variant`." |
| `tone="success"` | "Status tones are `ok`, `warn`, `danger`, `info` — not `success`/`error`." |
| `<PLButton icon={<I.Plus />}>` | "Pass icons as components: `icon={I.Plus}`." |
| Hardcoded `#6B4A87` | "Use `var(--pl-accent-500)` — never hardcode hex." |
| Imported `PLModal`, `PLSelect` | "Those don't exist yet. Compose with `PLCard` + `PLButton` or build it with tokens." |

If the agent keeps drifting, paste the rules block again — context windows forget.

---

## 5. Verifying your work

After UI changes, run:

```bash
npm test          # confirms src/ and dist/ files still exist + docs references intact
npm run docs      # serves at http://localhost:8000
```

Open `docs/index.html` in **both light and dark mode** before merging. The design system is theme-agnostic only if every token reference is honest — a single hardcoded color will look wrong in one mode.

---

## 6. Extending Paperline

- **New token** → add to `src/styles/paperline.css` under the right banner, define both the light (`:root`) and dark (`.pl-dark`) values, then mirror to `dist/paperline.css`.
- **New component** → add to `src/components.jsx` following the variant-map pattern (see `PLButton`'s `kinds` object), export from `src/index.jsx`, mirror to `dist/paperline-components.global.jsx` (strip `import`, add to the final `Object.assign(window, …)`).
- **New icon** → add to the `I` object in `src/icons.jsx` using a 24×24 viewBox and 1.6 stroke, then mirror to `dist/paperline-icons.global.jsx`.
- **Show it off** → add a visible example to `docs/index.html` covering default, hover, focus, disabled, and error states where applicable.
