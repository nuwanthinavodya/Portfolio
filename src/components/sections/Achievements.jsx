import { HiOutlineStar } from 'react-icons/hi';
import achievements from '../../data/achievements.json';
import SectionHeading from '../common/SectionHeading';
import RevealCard from '../ui/RevealCard';
import useCountUp from '../../hooks/useCountUp';

function StatCounter({ stat }) {
  const [ref, count] = useCountUp(stat.value);

  return (
    <div ref={ref} className="card p-6 text-center">
      <p className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
        {count}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-mist-500">{stat.label}</p>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrap" aria-label="Achievements">
      <SectionHeading eyebrow="Achievements" title="Milestones along the way" />

      <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {achievements.stats.map((stat) => (
          <StatCounter key={stat.id} stat={stat} />
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {achievements.list.map((item, i) => (
          <RevealCard key={item.id} index={i} className="card flex gap-4 p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600/15 text-violet-400">
              <HiOutlineStar className="h-5 w-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold text-mist-100">{item.title}</h3>
                <span className="rounded-full border border-ink-700 px-2.5 py-0.5 text-[11px] text-mist-500">
                  {item.category}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-mist-500">{item.description}</p>
              <p className="mt-2 font-mono text-xs text-violet-400">{item.date}</p>
            </div>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}
