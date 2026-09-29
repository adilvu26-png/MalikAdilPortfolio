import { useState } from 'react';
import { GithubIcon, ExternalLinkIcon } from './icons/index.jsx';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="group flex flex-col bg-white dark:bg-[#121826] border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-teal-400 dark:hover:border-teal-400/70 hover:shadow-xl hover:shadow-teal-500/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
            {/* Thumbnail — real project screenshot */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-white/5">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-grow p-6">
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

        <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 flex-grow">{project.description}</p>

        <div className="flex gap-3 mt-5">
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
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-3 py-2 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-teal-400"
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
  );
}
