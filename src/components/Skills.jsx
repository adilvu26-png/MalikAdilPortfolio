import useReveal from '../hooks/useReveal.js';
import SkillCard from './SkillCard.jsx';
import skills from '../data/skills.js';

export default function Skills() {
  const [headRef, headVisible] = useReveal();

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={headRef}
          className={`transition-opacity duration-700 max-w-xl mb-10 md:mb-12 ${
            headVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="inline-flex items-center gap-2 font-mono text-sm text-teal-500 dark:text-teal-300 mb-3 before:content-[''] before:w-[18px] before:h-[1.5px] before:bg-teal-400">
            Skills
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight">
            The <span className="text-flow">tools I build with</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
