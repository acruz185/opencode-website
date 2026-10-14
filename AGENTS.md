# AGENTS.md — Project Constraints for opencode-website

## Stack & Constraints
- **Files only**: `index.html`, `style.css`, `script.js` — no other source files.
- **No dependencies**: No npm, no packages, no CDN links, no external libraries.
- **No build step**: Files run directly in browser.
- **Localhost only**: Serve via static file server (e.g., `npx serve`, `python -m http.server`, VS Code Live Server). No deployment.

## HTML Requirements
- Semantic elements: `<header>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h3>`, `<ul>`, `<dl>`, `<button>`.
- Proper heading hierarchy (h1 → h2 → h3).
- ARIA labels on interactive elements (`aria-label`, `aria-pressed`).
- Keyboard-focusable elements with visible `:focus-visible` styles.
- `lang="en"` on `<html>`.

## CSS Requirements
- Mobile-first, responsive at **640px** breakpoint.
- CSS custom properties for theming (light/dark).
- System font stack, no web fonts.
- Clean modern aesthetic: whitespace, neutral palette, subtle shadows.
- Respects `prefers-reduced-motion`.
- No `!important` except for reduced-motion override.

## JavaScript Requirements
- **Single interaction**: Theme toggle (light ↔ dark).
- Persists choice in `localStorage` (`gwc-theme`).
- Defaults to `prefers-color-scheme` on first visit.
- Updates `data-theme` on `<html>`, button `aria-pressed`, and button label.
- Keyboard accessible (Enter/Space).
- Listens for system theme changes (only if no user preference stored).
- IIFE wrapper, no global pollution.
- ES5+ syntax compatible with all modern browsers.

## Accessibility
- WCAG 2.1 AA contrast in both themes.
- Semantic landmarks.
- Focus management.
- Reduced motion support.

## Browser Support
- Last 2 versions of Chrome, Firefox, Safari, Edge.
- No polyfills needed.

## File Size Targets
- HTML: < 3 KB
- CSS: < 5 KB
- JS: < 2 KB