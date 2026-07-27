import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Small purple ring that follows the pointer on fine-pointer (desktop) devices.
 * Skipped entirely on touch devices and when reduced motion is preferred.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(canHover && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(!!target.closest('a, button, [role="button"]'));
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] rounded-full border border-violet-400 mix-blend-screen"
      animate={{
        x: pos.x - (isPointer ? 20 : 10),
        y: pos.y - (isPointer ? 20 : 10),
        width: isPointer ? 40 : 20,
        height: isPointer ? 40 : 20,
        backgroundColor: isPointer ? 'rgba(124,58,237,0.25)' : 'rgba(124,58,237,0.08)',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 0.4 }}
      aria-hidden="true"
    />
  );
}
