import useReveal from '../hooks/useReveal.js';
import ProjectCard from './ProjectCard.jsx';
import projects from '../data/projects.js';

export default function Projects() {
  const [headRef, headVisible] = useReveal();

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={headRef}
          className={`transition-opacity duration-700 max-w-xl mb-10 md:mb-12 ${
            headVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="inline-flex items-center gap-2 font-mono text-sm text-teal-500 dark:text-teal-300 mb-3 before:content-[''] before:w-[18px] before:h-[1.5px] before:bg-teal-400">
            Projects
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-3">
            A few things I've built
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Each project below includes the source code and a live, working version — click through to explore either.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
