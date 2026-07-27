import { motion } from 'framer-motion';
import { HiOutlineArrowDown, HiOutlineDownload, HiOutlineMail } from 'react-icons/hi';
import profile from '../../data/profile.json';
import useTypingEffect from '../../hooks/useTypingEffect';
import ParticleBackground from '../common/ParticleBackground';
import SocialIcons from '../common/SocialIcons';
import { scrollToSection } from '../../utils/scrollTo';

export default function Hero() {
  const typed = useTypingEffect(profile.titles, { pause: 1600 });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
      aria-label="Introduction"
    >
      <ParticleBackground />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" aria-hidden="true" />

      <div className="section-wrap relative z-10 grid items-center gap-14 !py-0 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">Welcome to my portfolio</span>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-4 h-8 font-mono text-lg text-violet-400 sm:text-xl">
            {typed}
            <span className="animate-pulse-slow">|</span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-300 sm:text-lg">
            {profile.shortBio}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={profile.resumeUrl} download className="btn-primary">
              <HiOutlineDownload className="h-4 w-4" /> Download CV
            </a>
            <button type="button" onClick={() => scrollToSection('contact')} className="btn-secondary">
              <HiOutlineMail className="h-4 w-4" /> Contact Me
            </button>
          </div>

          <SocialIcons className="mt-10" />
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="animate-float">
            <div className="">
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                loading="eager"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
            </div>
            <div
              className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-violet-600/30 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -right-8 -top-8 -z-10 h-40 w-40 rounded-full bg-glow/20 blur-3xl"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-mist-500 transition-colors hover:text-violet-400"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <HiOutlineArrowDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
}
