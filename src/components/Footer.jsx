import { ArrowUpIcon } from './icons/index.jsx';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 py-6">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between flex-wrap gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {year} Malik Adil. Built with React, Vite &amp; Tailwind CSS.
        </p>
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 grid place-items-center hover:-translate-y-1 hover:border-teal-400 transition-all duration-200"
        >
          <ArrowUpIcon />
        </button>
      </div>
    </footer>
  );
}
