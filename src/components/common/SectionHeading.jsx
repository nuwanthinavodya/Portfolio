import { motion } from 'framer-motion';

/**
 * Consistent heading block used at the top of every section:
 * a small mono eyebrow label, a large display title, and an optional subtitle.
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <motion.div
      className={`mb-14 flex max-w-2xl flex-col gap-4 ${alignment}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="text-base text-mist-300">{subtitle}</p>}
    </motion.div>
  );
}
