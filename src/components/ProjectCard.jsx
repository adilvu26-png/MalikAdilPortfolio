import useReveal from '../hooks/useReveal.js';
import TiltCard from './TiltCard.jsx';
import { GithubIcon, ExternalLinkIcon } from './icons/index.jsx';

export default function ProjectCard({ project, index = 0 }) {
  const [ref, isVisible] = useReveal(0.12);
  const featured = Boolean(project.featured);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
      className={`transition-all duration-700 ease-out ${
        featured ? 'md:col-span-2 lg:col-span-3' : ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <TiltCard max={featured ? 3 : 6} className="rounded-2xl h-full">
        <article
          className={`spin-border group flex flex-col h-full bg-white/85 dark:bg-[#121826]/85 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-transparent hover:shadow-xl hover:shadow-teal-500/10 ${
            featured ? 'lg:flex-row lg:items-center' : ''
          }`}
        >
          {/* Thumbnail — real screenshot, or an animated generated cover if none yet */}
          <div
            className={`relative overflow-hidden bg-slate-100 dark:bg-white/5 ${
              featured ? 'aspect-[16/10] lg:w-[48%] lg:shrink-0' : 'aspect-[16/10]'
            }`}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="cover-gen absolute inset-0 grid place-items-center">
                <div className="animate-float text-center text-white">
                  <div className="font-display font-bold text-5xl sm:text-6xl tracking-tight drop-shadow-lg">SS</div>
                  <div className="font-mono text-xs sm:text-sm opacity-90 mt-1">Stock Scribe Studio</div>
                </div>
              </div>
            )}
            {featured && (
              <span className="absolute top-3 left-3 font-mono text-[0.7rem] px-2.5 py-1 rounded-full bg-slate-950/70 text-teal-300 backdrop-blur-sm border border-teal-400/40">
                ★ Latest project
              </span>
            )}
          </div>

          <div className="flex flex-col flex-grow p-6 lg:p-8">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.7rem] px-2 py-1 rounded-md bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-teal-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3
              className={`font-display font-semibold text-slate-900 dark:text-white mb-2 ${
                featured ? 'text-2xl md:text-3xl' : 'text-lg'
              }`}
            >
              {project.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 flex-grow">{project.description}</p>

            <div className={`flex gap-3 mt-5 ${featured ? 'lg:max-w-sm' : ''}`}>
              <a
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-white/15 px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-300"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${project.title} on GitHub`}
              >
                <GithubIcon className="w-4 h-4" />
                Code
              </a>
              <a
                className="btn-shine flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-3 py-2 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-teal-400"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demo of ${project.title}`}
              >
                <ExternalLinkIcon />
                Live View
              </a>
            </div>
          </div>
        </article>
      </TiltCard>
    </div>
  );
}
