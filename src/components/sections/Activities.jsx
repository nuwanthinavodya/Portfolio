import {
  HiOutlineUserGroup,
  HiOutlineHeart,
  HiOutlineChip,
  HiOutlineFire,
  HiOutlineLightBulb,
  HiOutlineAcademicCap,
} from 'react-icons/hi';
import activities from '../../data/activities.json';
import SectionHeading from '../common/SectionHeading';
import RevealCard from '../ui/RevealCard';

const ICONS = {
  Leadership: HiOutlineUserGroup,
  'Volunteer work': HiOutlineHeart,
  IEEE: HiOutlineChip,
  Competitions: HiOutlineFire,
  Hackathons: HiOutlineLightBulb,
  Workshops: HiOutlineAcademicCap,
};

export default function Activities() {
  return (
    <section id="activities" className="section-wrap" aria-label="Extra activities">
      <SectionHeading eyebrow="Extra Activities" title="Beyond the code" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity, i) => {
          const Icon = ICONS[activity.category] || HiOutlineUserGroup;
          return (
            <RevealCard
              key={activity.id}
              index={i}
              className="card flex flex-col gap-3 p-6 hover:-translate-y-1.5 hover:border-violet-500/60"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600/15 text-violet-400">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-ink-700 px-3 py-1 text-[11px] text-mist-500">
                  {activity.category}
                </span>
              </div>
              <h3 className="text-base font-semibold text-mist-100">{activity.title}</h3>
              <p className="text-sm text-mist-500">{activity.organization} · {activity.date}</p>
              <p className="text-sm leading-relaxed text-mist-300">{activity.description}</p>
            </RevealCard>
          );
        })}
      </div>
    </section>
  );
}
