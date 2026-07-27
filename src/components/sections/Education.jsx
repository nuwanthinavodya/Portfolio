import { HiOutlineAcademicCap } from 'react-icons/hi';
import education from '../../data/education.json';
import SectionHeading from '../common/SectionHeading';
import RevealCard from '../ui/RevealCard';

export default function Education() {
  return (
    <section id="education" className="section-wrap" aria-label="Education">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <ol className="relative border-l border-ink-700/70 pl-8">
        {education.map((item, i) => (
          <RevealCard key={item.id} index={i} as="li" className="relative mb-10 last:mb-0">
            <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-violet-500 bg-ink-900 text-violet-400">
              <HiOutlineAcademicCap className="h-4 w-4" />
            </span>
            <div className="card p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-mist-100">{item.degree}</h3>
                <span className="font-mono text-xs text-violet-400">{item.year}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-mist-300">{item.institution}</p>
              <p className="mt-3 text-sm leading-relaxed text-mist-500">{item.description}</p>
              {item.grade && (
                <span className="mt-3 inline-block rounded-full border border-ink-700 px-3 py-1 text-xs text-mist-300">
                  {item.grade}
                </span>
              )}
            </div>
          </RevealCard>
        ))}
      </ol>
    </section>
  );
}
