import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import profile from '../../data/profile.json';
import SectionHeading from '../common/SectionHeading';

// ── EmailJS setup ────────────────────────────────────────────────────────
// 1. Create a free account at https://www.emailjs.com/
// 2. Create an Email Service and a Template, then replace the placeholders
//    below with your own IDs (also fine to move these into a .env file).
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const infoItems = [
    { icon: HiOutlineMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: HiOutlinePhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: HiOutlineLocationMarker, label: 'Location', value: profile.location, href: undefined },
  ];

  return (
    <section id="contact" className="section-wrap" aria-label="Contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        subtitle="Have a role, a project, or just want to say hi? My inbox is open."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-6">
          {infoItems.map((item) => (
            <div key={item.label} className="card flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600/15 text-violet-400">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-mist-500">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm font-medium text-mist-100 hover:text-violet-400">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-mist-100">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="card flex items-center gap-4 p-5">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-mist-300 hover:text-violet-400">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-mist-300 hover:text-violet-400">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <p className="ml-auto text-xs text-mist-500">Usually replies within 24h</p>
          </div>

          <div className="card overflow-hidden">
            <iframe
              title="My location on Google Maps"
              src={profile.mapEmbedUrl}
              className="h-56 w-full grayscale invert-[0.9] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="card space-y-5 p-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-mist-300">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-700 focus:border-violet-500"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-mist-300">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-700 focus:border-violet-500"
                placeholder="jane@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-mist-300">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-xl border border-ink-700 bg-ink-900 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-700 focus:border-violet-500"
              placeholder="Let's work together"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-mist-300">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-ink-700 bg-ink-900 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-700 focus:border-violet-500"
              placeholder="Tell me a bit about your project or opportunity..."
            />
          </div>

          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center disabled:opacity-60">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p role="status" className="text-sm text-violet-400">Thanks! Your message has been sent — I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p role="alert" className="text-sm text-red-400">
              Something went wrong. Please add your EmailJS keys in Contact.jsx, or email me directly at {profile.email}.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
