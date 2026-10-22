import { useEffect, useState } from 'react';
import { LinkedinIcon, GithubIcon, TwitterIcon, MailIcon } from './icons/index.jsx';
import TiltCard from './TiltCard.jsx';
import profileImage from "../assets/updated_picture.jpg";

const ROLES = ['Frontend Developer', 'React.js Developer', 'UI Engineer', 'Creative Problem Solver'];

/** Cycles through ROLES with a type/delete effect, entirely self-contained. */
function useTypewriter(roles, typeSpeed = 90, deleteSpeed = 45, pause = 1400) {
  const [text, setText] = useState('');

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const tick = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        charIndex += 1;
        setText(currentRole.slice(0, charIndex));
        if (charIndex === currentRole.length) {
          isDeleting = true;
          timeoutId = setTimeout(tick, pause);
          return;
        }
      } else {
        charIndex -= 1;
        setText(currentRole.slice(0, charIndex));
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }

      timeoutId = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    };

    tick();
    return () => clearTimeout(timeoutId);
  }, [roles, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typedText = useTypewriter(ROLES);

  return (
    <section id="home" className="pt-32 md:pt-40 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-16 items-center">
        <div className="text-center md:text-left">
          <p className="opacity-0 animate-fade-slide-up [animation-delay:100ms] inline-flex items-center gap-2 font-mono text-sm text-teal-500 dark:text-teal-300 mb-3 before:content-[''] before:w-[18px] before:h-[1.5px] before:bg-teal-400">
            Available for freelance &amp; full-time roles
          </p>

          <h1 className="opacity-0 animate-fade-slide-up [animation-delay:200ms] font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight">
            Hi, I'm{' '}
            <span className="text-flow">
              Malik Adil
            </span>
          </h1>

          <p className="opacity-0 animate-fade-slide-up [animation-delay:300ms] font-mono text-base sm:text-lg text-violet-500 dark:text-violet-300 mt-3 min-h-[1.6em]">
            <span>{typedText}</span>
            <span className="inline-block w-[2px] h-[1em] align-middle bg-violet-400 ml-0.5 animate-blink"></span>
          </p>

          <p className="opacity-0 animate-fade-slide-up [animation-delay:500ms] text-slate-600 dark:text-slate-400 mt-5 max-w-[52ch] mx-auto md:mx-0">
            I design and build clean, fast, and fully responsive web
            interfaces. I care about the small details — the transition that
            feels right, the layout that holds up on any screen, the code
            that's easy for the next developer to read.
          </p>

          <div className="opacity-0 animate-fade-slide-up [animation-delay:700ms] flex flex-wrap justify-center md:justify-start gap-2 mt-6">
            {['Team player', 'Calm under pressure', 'Creative problem solver', 'Detail-oriented'].map((trait) => (
              <span
                key={trait}
                className="font-mono text-xs px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400"
              >
                {trait}
              </span>
            ))}
          </div>

          <div className="opacity-0 animate-fade-slide-up [animation-delay:700ms] flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <a
              href="#projects"
              className="btn-shine inline-flex items-center gap-2 rounded-lg bg-teal-500 text-slate-950 font-semibold px-6 py-3 text-sm transition-transform hover:-translate-y-0.5 hover:bg-teal-400"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-white/15 font-semibold px-6 py-3 text-sm transition-colors hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-300"
            >
              Get In Touch
            </a>
          </div>

          <div className="opacity-0 animate-fade-slide-up [animation-delay:700ms] flex justify-center md:justify-start gap-3 mt-8">
            {/* Replace these hrefs with your real profile URLs */}
            <a
              href="https://www.linkedin.com/in/muhammad-adil-10288240a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Malik Adil on LinkedIn"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 grid place-items-center text-slate-500 dark:text-slate-400 hover:text-teal-500 hover:border-teal-400 hover:-translate-y-1 transition-all duration-200"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/adilvu26-png"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Malik Adil on GitHub"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 grid place-items-center text-slate-500 dark:text-slate-400 hover:text-teal-500 hover:border-teal-400 hover:-translate-y-1 transition-all duration-200"
            >
              <GithubIcon />
            </a>
            <a
              href="https://twitter.com/malikadildev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Malik Adil on Twitter / X"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 grid place-items-center text-slate-500 dark:text-slate-400 hover:text-teal-500 hover:border-teal-400 hover:-translate-y-1 transition-all duration-200"
            >
              <TwitterIcon />
            </a>
            <a
              href="mailto:adilvu26@gmail.com"
              aria-label="Email Malik Adil"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 grid place-items-center text-slate-500 dark:text-slate-400 hover:text-teal-500 hover:border-teal-400 hover:-translate-y-1 transition-all duration-200"
            >
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="opacity-0 animate-fade-in [animation-delay:200ms] relative justify-self-center">
          <div className="animate-float relative">
            {/* Orbiting particles */}
            <div className="animate-orbit absolute -inset-8 rounded-full pointer-events-none" aria-hidden="true">
              <span className="absolute left-1/2 top-0 -ml-1.5 w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_18px_#2dd4bf]"></span>
            </div>
            <div className="animate-orbit-rev absolute -inset-14 rounded-full pointer-events-none" aria-hidden="true">
              <span className="absolute left-1/2 bottom-0 -ml-1 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_14px_#a78bfa]"></span>
            </div>

            <TiltCard max={10} className="rounded-[32px]">
              <div className="ring-glow absolute -inset-3 rounded-[40px] blur-2xl opacity-60" aria-hidden="true"></div>
              <div className="ring-spin absolute -inset-[5px] rounded-[37px]" aria-hidden="true"></div>
              <div className="w-[220px] sm:w-[280px] md:w-[320px] aspect-square rounded-[32px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl relative bg-slate-100 dark:bg-[#121826]">
                {/* Replace with an actual photo of Malik Adil, e.g. src/assets/profile.jpg */}
                <img
                  src={profileImage}
                  alt="Portrait of Malik Adil, Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </TiltCard>

            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-[#121826] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-lg font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse-ring"></span>
              Open to new projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
