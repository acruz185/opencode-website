# opencode-website

In-class assignment for DS219 — a one-page Girls Who Code site.

## Files

- `index.html` — semantic HTML structure
- `style.css` — mobile-first responsive CSS with light/dark themes
- `script.js` — theme toggle interaction (persists to localStorage)
- `AGENTS.md` — project constraints for AI agents

## Run Locally

No installation or build step required. Serve the folder with any static file server:

### Option 1: Python (built-in)
```bash
python -m http.server 8000
```
Then open http://localhost:8000

### Option 2: Node.js (npx)
```bash
npx serve .
```
Then open the printed URL (default http://localhost:3000)

### Option 3: VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

### Option 4: PHP (built-in)
```bash
php -S localhost:8000
```
Then open http://localhost:8000

## Features

- **Responsive**: Stacks on mobile (<640px), two-column grid on desktop
- **Theme toggle**: Light/dark mode persisted in localStorage, respects system preference
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation, focus styles, reduced motion support
- **Zero dependencies**: Runs in any modern browser

## Interaction

Click the theme toggle button (top-right) or press **Enter/Space** while focused to switch between light and dark mode. Your preference is saved and restored on return visits.