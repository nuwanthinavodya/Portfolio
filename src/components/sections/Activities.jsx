import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  HiOutlineUserGroup,
  HiOutlineHeart,
  HiOutlineChip,
  HiOutlineFire,
  HiOutlineLightBulb,
  HiOutlineAcademicCap,
  HiOutlineX,
  HiChevronLeft,
  HiChevronRight,
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

export default function Activities() {
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

              <ImageGallery images={activity.images} onOpen={openLightbox} />
            </RevealCard>
          );
        })}
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