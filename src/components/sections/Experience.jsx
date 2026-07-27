import { HiOutlineBriefcase } from 'react-icons/hi';
import experience from '../../data/experience.json';
import SectionHeading from '../common/SectionHeading';
import RevealCard from '../ui/RevealCard';

export default function Experience() {
  return (
    <section id="experience" className="section-wrap" aria-label="Work experience">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />

      <ol className="relative border-l border-ink-700/70 pl-8">
        {experience.map((job, i) => (
          <RevealCard key={job.id} index={i} as="li" className="relative mb-10 last:mb-0">
            <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-violet-500 bg-ink-900 text-violet-400">
              <HiOutlineBriefcase className="h-4 w-4" />
            </span>
            <div className="card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-mist-100">{job.position}</h3>
                <span className="font-mono text-xs text-violet-400">{job.duration}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-mist-300">
                {job.company} · {job.location}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-mist-500">{job.description}</p>
              <ul className="mt-4 space-y-1.5">
                {job.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-mist-300">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </RevealCard>
        ))}
      </ol>
    </section>
  );
}
