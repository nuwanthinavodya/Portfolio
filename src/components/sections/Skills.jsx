import { useState } from 'react';
import { motion } from 'framer-motion';
import skills from '../../data/skills.json';
import SectionHeading from '../common/SectionHeading';

const categories = Object.keys(skills);

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
    >
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-mist-100">{name}</span>
        <span className="font-mono text-xs text-mist-500">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-ink-800">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-glow"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: Math.min(index * 0.05, 0.3), ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('All');
  const visibleCategories = active === 'All' ? categories : [active];

  return (
    <section id="skills" className="section-wrap" aria-label="Technical skills">
      <SectionHeading eyebrow="Technical Skills" title="What I work with" />

      {/* Category filter */}
      <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter skills by category">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              active === cat
                ? 'border-violet-500 bg-violet-600/20 text-violet-300'
                : 'border-ink-700 text-mist-500 hover:border-violet-500/60 hover:text-mist-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {visibleCategories.map((category) => (
          <div key={category} className="card p-6">
            <h3 className="mb-5 font-display text-lg font-semibold text-mist-100">{category}</h3>
            <div className="space-y-5">
              {skills[category].map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
