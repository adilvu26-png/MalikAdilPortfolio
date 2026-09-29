/* ==========================================================================
   Maps a skill's `icon` key (see src/data/skills.js) to its SVG markup.
   Kept separate from the data file so skills.js stays plain, readable data.
   ========================================================================== */

export default function SkillIcon({ icon }) {
  switch (icon) {
    case 'html':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#e34f26" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M4 3l1.6 17L12 22l6.4-2L20 3H4z" fill="#e34f26" opacity="0.12"></path>
          <path d="M4 3l1.6 17L12 22l6.4-2L20 3H4z"></path>
          <path d="M16.8 7H8l.3 3h8.2l-.5 5.5-3.9 1.2v0l-4-1.2-.25-2.8"></path>
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#2965f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M4 3l1.6 17L12 22l6.4-2L20 3H4z" fill="#2965f1" opacity="0.12"></path>
          <path d="M4 3l1.6 17L12 22l6.4-2L20 3H4z"></path>
          <path d="M16.8 7H7.5l.3 3h8.7l-.4 4.2-4 1.3-4-1.3-.2-2.2"></path>
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <rect x="2.5" y="2.5" width="19" height="19" rx="3" fill="#f7df1e" opacity="0.15"></rect>
          <rect x="2.5" y="2.5" width="19" height="19" rx="3" stroke="#f7df1e" strokeWidth="1.8"></rect>
          <text x="7" y="16.5" fontFamily="monospace" fontSize="8" fill="#f7df1e" fontWeight="700">
            JS
          </text>
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth="1.4" className="w-6 h-6">
          <circle cx="12" cy="12" r="2.1" fill="#61dafb"></circle>
          <ellipse cx="12" cy="12" rx="9" ry="3.6"></ellipse>
          <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"></ellipse>
          <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"></ellipse>
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="6" cy="6" r="2"></circle>
          <circle cx="6" cy="18" r="2"></circle>
          <circle cx="18" cy="12" r="2"></circle>
          <path d="M6 8v8M8 6h4a4 4 0 0 1 4 4v0"></path>
        </svg>
      );
    case 'responsive':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="2" y="4" width="14" height="10" rx="1.5"></rect>
          <rect x="14.5" y="9" width="7.5" height="12" rx="1.5"></rect>
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" fill="#38bdf8" className="w-6 h-6">
          <path d="M12 5c-2.7 0-4.4 1.3-5 4 1-1.3 2.2-1.8 3.6-1.5.8.2 1.3.8 1.9 1.4.9 1 2 2.1 4.5 2.1 2.7 0 4.4-1.3 5-4-1 1.3-2.2 1.8-3.6 1.5-.8-.2-1.3-.8-1.9-1.4-.9-1-2-2.1-4.5-2.1zM7 11.5c-2.7 0-4.4 1.3-5 4 1-1.3 2.2-1.8 3.6-1.5.8.2 1.3.8 1.9 1.4.9 1 2 2.1 4.5 2.1 2.7 0 4.4-1.3 5-4-1 1.3-2.2 1.8-3.6 1.5-.8-.2-1.3-.8-1.9-1.4-.9-1-2-2.1-4.5-2.1z"></path>
        </svg>
      );
    case 'uiux':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M4 3l7 17 2-7 7-2z"></path>
        </svg>
      );
    default:
      return null;
  }
}
