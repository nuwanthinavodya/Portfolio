import { motion } from 'framer-motion';
import { HiOutlineGlobeAlt, HiOutlineSparkles, HiOutlineFlag } from 'react-icons/hi';
import profile from '../../data/profile.json';
import SectionHeading from '../common/SectionHeading';
import RevealCard from '../ui/RevealCard';

const infoCards = [
  {
    icon: HiOutlineGlobeAlt,
    title: 'Languages',
    items: profile.languages,
  },
  {
    icon: HiOutlineSparkles,
    title: 'Interests',
    items: profile.interests,
  },
  {
    icon: HiOutlineFlag,
    title: 'Career Objective',
    text: profile.careerObjective,
  },
];

export default function About() {
  return (
    <section id="about" className="section-wrap" aria-label="About me">
      <SectionHeading eyebrow="About Me" title="A little about who I am" subtitle={profile.longBio} />

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="overflow-hidden rounded-3xl border border-ink-700/70 shadow-card">
            <img
              src={profile.photoAbout}
              alt={`${profile.name} smiling for a portrait`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 -z-10 h-28 w-28 rounded-full bg-violet-600/25 blur-3xl" aria-hidden="true" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {infoCards.map((card, i) => (
            <RevealCard key={card.title} index={i} className="card p-6 sm:col-span-1 first:sm:col-span-2">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600/15 text-violet-400">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
              {card.items ? (
                <div className="flex flex-wrap gap-2">
                  {card.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink-700 px-3 py-1 text-xs text-mist-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm leading-relaxed text-mist-300">{card.text}</p>
              )}
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
