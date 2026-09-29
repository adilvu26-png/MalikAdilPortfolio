import { useEffect, useRef, useState } from 'react';
import { SunIcon, MoonIcon } from './icons/index.jsx';

const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');
  const sectionsRef = useRef([]);

  // Track which section is in view so the matching nav link can be highlighted.
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(Boolean);
    sectionsRef.current = sections;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0a0e17]/80 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[72px]">
        <a href="#home" className="font-mono font-semibold text-lg tracking-tight">
          malik<span className="text-teal-500 dark:text-teal-300">.</span>dev
        </a>

        <nav
          className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-8 overflow-hidden md:overflow-visible transition-all duration-300 absolute md:static top-full inset-x-0 md:inset-auto bg-white dark:bg-[#0a0e17] md:bg-transparent border-b md:border-0 border-slate-200 dark:border-white/10 px-5 md:px-0 ${
            isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 md:max-h-none py-0'
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`text-sm font-medium transition-colors py-2 md:py-0 relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-teal-400 after:transition-all hover:after:w-full ${
                activeHref === item.href
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121826] grid place-items-center hover:border-teal-400 hover:rotate-12 transition-all duration-300"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="md:hidden w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121826] flex flex-col items-center justify-center gap-[4px]"
          >
            <span
              className={`w-[18px] h-[2px] bg-slate-900 dark:bg-white transition-transform duration-200 ${
                isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            ></span>
            <span
              className={`w-[18px] h-[2px] bg-slate-900 dark:bg-white transition-opacity duration-200 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-[18px] h-[2px] bg-slate-900 dark:bg-white transition-transform duration-200 ${
                isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
}
