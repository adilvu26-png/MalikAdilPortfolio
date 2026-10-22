import useReveal from '../hooks/useReveal.js';
import SkillIcon from './SkillIcon.jsx';
import TiltCard from './TiltCard.jsx';

export default function SkillCard({ skill, index = 0 }) {
  const [ref, isVisible] = useReveal(0.2);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
      className={`last:col-span-2 md:last:col-span-1 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
      }`}
    >
      <TiltCard max={9} className="rounded-xl h-full">
        <div className="spin-border group h-full bg-white/80 dark:bg-[#121826]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-xl p-6 text-center transition-colors duration-300 hover:border-transparent hover:shadow-lg">
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-slate-100 dark:bg-white/5 grid place-items-center transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
            <SkillIcon icon={skill.icon} />
          </div>
          <h3 className="font-display font-semibold text-base mb-1">{skill.title}</h3>
          <p className="font-mono text-[0.7rem] text-slate-500 dark:text-slate-400">{skill.tag}</p>
          <div className="mt-4 h-1.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-flow transition-[width] duration-1000 ease-out"
              style={{ width: isVisible ? `${skill.level}%` : '0%', transitionDelay: '300ms' }}
            ></div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
