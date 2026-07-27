import navLinks from '../data/navLinks';
import profile from '../data/profile.json';
import SocialIcons from '../components/common/SocialIcons';
import { scrollToSection } from '../utils/scrollTo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-700/60 bg-ink-900/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-3 lg:px-10">
        <div>
          <p className="font-display text-xl font-semibold text-mist-100">
            {profile.name.split(' ')[0]}<span className="text-violet-400">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-mist-500">{profile.tagline}</p>
          <SocialIcons className="mt-5" />
        </div>

        <div>
          <p className="eyebrow mb-4">Quick Links</p>
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-mist-500 transition-colors hover:text-violet-400"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Get in touch</p>
          <ul className="space-y-2 text-sm text-mist-500">
            <li>{profile.email}</li>
            <li>{profile.phone}</li>
            <li>{profile.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-700/60 px-6 py-6 text-center text-xs text-mist-700 sm:px-8 lg:px-10">
        © {year} {profile.name}. All rights reserved. Built with React &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
