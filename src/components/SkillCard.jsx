import useReveal from '../hooks/useReveal.js';
import SkillIcon from './SkillIcon.jsx';

export default function SkillCard({ skill }) {
  const [ref, isVisible] = useReveal(0.2);

  return (
    <div
      ref={ref}
      className="group bg-white dark:bg-[#121826] border border-slate-200 dark:border-white/10 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-400 hover:shadow-lg"
    >
      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-slate-100 dark:bg-white/5 grid place-items-center transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
        <SkillIcon icon={skill.icon} />
      </div>
      <h3 className="font-display font-semibold text-base mb-1">{skill.title}</h3>
      <p className="font-mono text-[0.7rem] text-slate-500 dark:text-slate-400">{skill.tag}</p>
      <div className="mt-4 h-1.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal-400 to-violet-400 transition-[width] duration-1000 ease-out"
          style={{ width: isVisible ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
}
