import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import socials from '../../data/socials.json';

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  email: HiOutlineMail,
};

const LABELS = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  twitter: 'Twitter / X',
  instagram: 'Instagram',
  email: 'Email',
};

export default function SocialIcons({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Object.entries(socials).map(([key, url]) => {
        const Icon = ICONS[key];
        if (!Icon || !url) return null;
        return (
          <a
            key={key}
            href={url}
            target={key === 'email' ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={LABELS[key] || key}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-mist-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500 hover:text-violet-400"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
