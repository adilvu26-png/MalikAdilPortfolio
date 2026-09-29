import { useEffect, useState } from 'react';

const THEME_KEY = 'malik-portfolio-theme';

/**
 * Manages dark/light mode using Tailwind's `class` strategy: toggles a
 * `dark` class on <html> and persists the choice in localStorage. Falls
 * back to the user's OS preference on first visit.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
