import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineStar, HiOutlineX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import achievements from '../../data/achievements.json';
import SectionHeading from '../common/SectionHeading';
import RevealCard from '../ui/RevealCard';

/** Small row of clickable thumbnails shown inside an achievement card. */
function ImageGallery({ images, onOpen }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {images.map((src, i) => (
        <button
          key={src}
          type="button"
          onClick={() => onOpen(images, i)}
          className="h-16 w-16 overflow-hidden rounded-lg border border-ink-700 transition-transform duration-200 hover:-translate-y-0.5 hover:border-violet-500"
        >
          <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
        </button>
      ))}
    </div>
  );
}

/** Full-screen lightbox overlay for viewing a gallery's images at full size. */
function Lightbox({ images, index, onClose, onNavigate }) {
  if (index === null) return null;

  const hasMultiple = images.length > 1;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-6 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-mist-100 hover:border-violet-500"
        >
          <HiOutlineX className="h-5 w-5" />
        </button>

        {hasMultiple && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
            aria-label="Previous image"
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-mist-100 hover:border-violet-500 sm:left-8"
          >
            <HiChevronLeft className="h-5 w-5" />
          </button>
        )}

        <motion.img
          key={images[index]}
          src={images[index]}
          alt=""
          className="max-h-[80vh] max-w-[90vw] rounded-xl border border-ink-700 object-contain shadow-glow"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={(e) => e.stopPropagation()}
        />

        {hasMultiple && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
            aria-label="Next image"
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-mist-100 hover:border-violet-500 sm:right-8"
          >
            <HiChevronRight className="h-5 w-5" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default function Achievements() {
  const [lightbox, setLightbox] = useState({ images: [], index: null });

  const openLightbox = (images, index) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox({ images: [], index: null });
  const navigate = (dir) => {
    setLightbox((prev) => {
      const total = prev.images.length;
      const next = (prev.index + dir + total) % total;
      return { ...prev, index: next };
    });
  };

  return (
    <section id="achievements" className="section-wrap" aria-label="Achievements">
      <SectionHeading eyebrow="Achievements" title="Milestones along the way" />

      <div className="grid gap-6 sm:grid-cols-2">
        {achievements.list.map((item, i) => (
          <RevealCard key={item.id} index={i} className="card flex gap-4 p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600/15 text-violet-400">
              <HiOutlineStar className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold text-mist-100">{item.title}</h3>
                <span className="rounded-full border border-ink-700 px-2.5 py-0.5 text-[11px] text-mist-500">
                  {item.category}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-mist-500">{item.description}</p>
              <p className="mt-2 font-mono text-xs text-violet-400">{item.date}</p>

              <ImageGallery images={item.images} onOpen={openLightbox} />
            </div>
          </RevealCard>
        ))}
      </div>

      <Lightbox
        images={lightbox.images}
        index={lightbox.index}
        onClose={closeLightbox}
        onNavigate={navigate}
      />
    </section>
  );
}