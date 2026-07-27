import { motion } from 'framer-motion';

/**
 * Generic fade/slide-up reveal wrapper for grid items (cards) so every
 * section gets consistent, staggered scroll animations without duplication.
 */
export default function RevealCard({ children, index = 0, className = '', as = 'div' }) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4), ease: 'easeOut' }}
    >
      {children}
    </Component>
  );
}
