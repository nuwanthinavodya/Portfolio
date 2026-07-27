import { motion, AnimatePresence } from 'framer-motion';

/**
 * Full-screen loader shown for a beat while the app mounts.
 * Purely cosmetic — the site works fine without it — but adds a polished
 * first impression consistent with the purple identity.
 */
export default function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-ink-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="h-14 w-14 rounded-full border-2 border-ink-700 border-t-violet-500"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
          />
          <motion.p
            className="font-mono text-xs uppercase tracking-[0.3em] text-mist-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Loading portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
