# Changelog

All notable changes to Paperline are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project follows
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Build script `scripts/build.mjs` that deterministically generates the browser-global
  files in `dist/` from `src/`. Removes the previous manual sync step.
- Parity check in `scripts/check-package.mjs`: re-runs the build with `--check`,
  verifies symbol parity between `src/` and `dist/`, and confirms `src/index.jsx`
  re-exports every primitive.
- New components: `PLSelect`, `PLField`, `PLDivider`, `PLSpinner`, `PLSkeleton`,
  `PLEmptyState`, `PLStack`, `PLCluster`, `PLGrid`, `PLBreadcrumbs`, `PLPagination`,
  `PLTooltip`, `PLMenu`, `PLModal`.
- Semantic form tokens (`--pl-field-*`), a numeric type scale (`--pl-text-*`), and
  a `--pl-z-tooltip` z-index token.
- `:focus-visible` ring wired to `--pl-focus` via component classNames
  (`pl-btn`, `pl-field`, `pl-tab`, etc.).
- `prefers-reduced-motion` media query that neutralises animations and transitions.
- `.pl-sr-only` utility for visually-hidden but accessible content.

### Changed

- `PLCheckbox`, `PLRadio`, and `PLToggle` now render real `<input>` elements behind
  a `.pl-sr-only` mask. They are now keyboard-operable and announced by screen
  readers; `PLToggle` reports `role="switch"`.
- `PLAlert` and `PLToast` set `role="alert"`/`role="status"` and `aria-live` based
  on tone. `PLToast` supports an optional `duration` for auto-dismiss.
- `PLTabs` is now a real ARIA tab list with arrow-key, Home, and End navigation.
- `PLProgress` clamps `value` to `[0, 100]` and exposes `role="progressbar"` with
  `aria-valuenow`/`min`/`max`.
- `PLAvatar` no longer renders a hard-coded `"JD"` fallback; it derives initials
  from the supplied `name` and exposes `alt` for image avatars.
- `PLCard` no longer accepts the unused `hover` prop.
- `Icon` defaults to `aria-hidden="true"`; pass `label` to make an icon
  user-facing.

### Removed

- Manual editing of files under `dist/`. They are regenerated on every `npm run build`
  and validated on every `npm test`.

## [1.0.0] — 2026-05-03

- Initial public release.
