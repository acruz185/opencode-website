/**
 * Theme Toggle Interaction
 * - Toggles light/dark mode via data-theme attribute on <html>
 * - Persists preference in localStorage
 * - Respects system prefers-color-scheme on first visit
 * - Updates button ARIA state and label
 * - Keyboard accessible (Enter/Space)
 */

(function () {
  const html = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const themeText = toggleBtn.querySelector('.theme-text');
  const STORAGE_KEY = 'gwc-theme';

  // Determine initial theme
  function getInitialTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply theme to document and update button
  function applyTheme(theme) {
    html.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);

    const isDark = theme === 'dark';
    toggleBtn.setAttribute('aria-pressed', isDark);
    toggleBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    themeText.textContent = isDark ? 'Light mode' : 'Dark mode';
  }

  // Initialize
  applyTheme(getInitialTheme());

  // Toggle handler
  function handleToggle() {
    const current = html.dataset.theme;
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  }

  // Event listeners
  toggleBtn.addEventListener('click', handleToggle);

  // Keyboard support (button handles Enter/Space natively, but ensure)
  toggleBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  });

  // Listen for system theme changes (only if user hasn't set preference)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
})();