# Malik Adil — Frontend Developer Portfolio (React + Vite + Tailwind)

A fully responsive personal portfolio built with **React, Vite, JavaScript, and Tailwind CSS**, structured as a proper build-based project so it can be deployed to **Netlify** (or any static host) via its build pipeline.

## 🔗 Project structure

```
malik-adil-portfolio-vite/
├── index.html                 # Vite HTML entry point (just mounts #root)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml                # Netlify build settings (auto-detected)
├── .gitignore
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # Composes all sections
│   ├── index.css               # Tailwind directives
│   ├── assets/
│   │   └── profile-placeholder.svg   # Swap for a real photo
│   ├── data/
│   │   ├── projects.js         # Project cards data (title, tags, links, description)
│   │   └── skills.js           # Skills grid data (title, tag, proficiency level)
│   ├── hooks/
│   │   ├── useTheme.js         # Dark/light mode (Tailwind `class` strategy)
│   │   └── useReveal.js        # IntersectionObserver-based scroll reveal
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx            # Includes the typewriter role effect
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── SkillCard.jsx
│       ├── SkillIcon.jsx       # Maps a skill's icon key to its SVG
│       ├── Projects.jsx
│       ├── ProjectCard.jsx
│       ├── Contact.jsx         # Controlled, validated contact form
│       ├── Footer.jsx
│       └── icons/
│           └── index.jsx       # Shared inline SVG icon components
└── README.md
```

## 🧱 Tech stack

- **React 18** — every section is its own component, using hooks (`useState`, `useEffect`, custom hooks) instead of external state libraries
- **Vite** — dev server + production build tooling
- **Tailwind CSS** — installed as a proper PostCSS build step (not the CDN script), configured in `tailwind.config.js` with `darkMode: 'class'`, custom fonts, and the keyframe animations used for the hero entrance
- **JavaScript (ES modules)** throughout — data files, hooks, and utility logic

## 🚀 Running locally

```bash
npm install
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`) — open it in your browser. Changes hot-reload automatically.

## 📦 Building for production

```bash
npm run build
```

This outputs a static, optimized site to the `dist/` folder. Preview it locally with:

```bash
npm run preview
```

## ☁️ Deploying to Netlify

**Option A — connect your Git repo (recommended):**
1. Push this project to GitHub/GitLab/Bitbucket.
2. In Netlify, click **Add new site → Import an existing project**, and pick the repo.
3. Netlify will detect `netlify.toml` and use:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site** — every future push rebuilds automatically.

**Option B — drag-and-drop:**
1. Run `npm run build` locally.
2. Go to Netlify → **Sites** → drag the generated `dist/` folder onto the dashboard.

No environment variables are required for this project as-is.

## 🎨 Customizing

| What to change | Where |
|---|---|
| Name, intro text, role titles | `src/components/Hero.jsx` (see the `ROLES` array for the typewriter) |
| Profile photo | Replace `src/assets/profile-placeholder.svg` with a real photo (e.g. `profile.jpg`) and update the `import` + `src` in `Hero.jsx` |
| Projects (titles, descriptions, tags, GitHub/live links) | `src/data/projects.js` |
| Skills shown | `src/data/skills.js` (add/remove entries; icons are mapped in `src/components/SkillIcon.jsx`) |
| Social & contact links (LinkedIn, GitHub, Twitter/X, email) | `src/components/Hero.jsx` and `src/components/Contact.jsx` (`CONTACT_LINKS` array) |
| Colors, fonts, animations | `tailwind.config.js`, plus the `teal-*` / `violet-*` / `slate-*` utility classes used throughout components |
| Contact form behavior | `src/components/Contact.jsx` — currently front-end only (validates and shows a confirmation message). Wire it to [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com/), or your own API endpoint to actually receive submissions |

## ✅ Features

- Fully responsive layout, mobile-first with Tailwind's `sm:` / `md:` / `lg:` breakpoints
- Dark mode by default, toggled via Tailwind's `dark` class strategy and remembered with `localStorage`
- Animated hero entrance, typewriter role text, and subtle scroll-reveal on section content (via a reusable `useReveal` hook)
- Skill cards (HTML, CSS, JavaScript, React JS, Git, Responsive Design, Tailwind CSS, UI/UX) with animated proficiency bars
- Project cards with GitHub source link, live demo link, and a short description
- Accessible: visible keyboard focus rings, semantic landmarks, `aria-label`s on icon-only buttons, `prefers-reduced-motion` support
- Controlled, validated contact form

## 📌 Notes

- All GitHub/live-demo URLs in `src/data/projects.js` and all social links in `Hero.jsx` / `Contact.jsx` are **placeholders** — replace them with your real links before publishing.
- The profile image is an SVG placeholder; drop in a real photo and update the reference in `Hero.jsx`.
