import { HiOutlineBadgeCheck, HiOutlineExternalLink } from 'react-icons/hi';
import certifications from '../../data/certifications.json';
import SectionHeading from '../common/SectionHeading';
import RevealCard from '../ui/RevealCard';

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrap" aria-label="Certifications">
      <SectionHeading eyebrow="Certifications" title="Courses & credentials" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <RevealCard
            key={cert.id}
            index={i}
            className="card flex flex-col gap-4 p-6 hover:-translate-y-1.5 hover:border-violet-500/60"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600/15 text-violet-400">
              <HiOutlineBadgeCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-mist-100">{cert.title}</h3>
              <p className="mt-1 text-sm text-mist-500">{cert.issuer}</p>
              <p className="mt-1 font-mono text-xs text-violet-400">{cert.date}</p>
            </div>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 hover:text-violet-300"
              >
                View credential <HiOutlineExternalLink className="h-4 w-4" />
              </a>
            )}
          </RevealCard>
        ))}
      </div>
    </section>
  );
}
