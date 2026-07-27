import { useMemo, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import projects from '../../data/projects.json';
import SectionHeading from '../common/SectionHeading';
import RevealCard from '../ui/RevealCard';

const categories = ['All', ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category;
      const matchesQuery =
        query.trim() === '' ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="projects" className="section-wrap" aria-label="Projects">
      <SectionHeading eyebrow="Projects" title="Things I've built" subtitle="A selection of projects across web development and applied AI." />

      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-sm">
          <HiOutlineSearch className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-mist-500" />
          <label htmlFor="project-search" className="sr-only">Search projects</label>
          <input
            id="project-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or tech..."
            className="w-full rounded-full border border-ink-700 bg-ink-900 py-2.5 pl-10 pr-4 text-sm text-mist-100 placeholder:text-mist-700 focus:border-violet-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                category === cat
                  ? 'border-violet-500 bg-violet-600/20 text-violet-300'
                  : 'border-ink-700 text-mist-500 hover:border-violet-500/60 hover:text-mist-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-mist-500">No projects match your search — try a different term.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <RevealCard
              key={project.id}
              index={i}
              className="card group flex flex-col overflow-hidden hover:-translate-y-1.5 hover:border-violet-500/60"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                {project.featured && (
                  <span className="absolute left-3 top-3 rounded-full bg-violet-600 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-mist-100">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-mist-100">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-500">{project.description}</p>

                <ul className="mt-4 space-y-1">
                  {project.features.slice(0, 2).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-mist-500">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-ink-800 px-2.5 py-1 text-[11px] text-mist-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary flex-1 justify-center !py-2 text-xs"
                  >
                    <FaGithub className="h-3.5 w-3.5" /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary flex-1 justify-center !py-2 text-xs"
                    >
                      <FaArrowUpRightFromSquare className="h-3 w-3" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </RevealCard>
          ))}
        </div>
      )}
    </section>
  );
}
