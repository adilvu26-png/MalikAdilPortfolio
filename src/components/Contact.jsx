import { useState } from 'react';
import useReveal from '../hooks/useReveal.js';
import { LinkedinIcon, GithubIcon, TwitterIcon, MailIcon } from './icons/index.jsx';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Replace every href below with your real profile / contact links.
const CONTACT_LINKS = [
  {
    href: 'https://www.linkedin.com/in/muhammad-adil-10288240a',
    label: 'LinkedIn',
    meta: 'linkedin.com/in/malikadil',
    icon: <LinkedinIcon className="w-[18px] h-[18px]" />,
    iconColorClass: 'text-[#0a66c2]',
  },
  {
    href: 'https://github.com/adilvu26-png',
    label: 'GitHub',
    meta: 'github.com/malikadil',
    icon: <GithubIcon className="w-[18px] h-[18px]" />,
  },
  {
    href: 'https://twitter.com/malikadildev',
    label: 'Twitter / X',
    meta: '@malikadildev',
    icon: <TwitterIcon className="w-[18px] h-[18px]" />,
  },
  {
    href: 'mailto:adilvu26@gmail.com',
    label: 'Email',
    meta: 'malik.adil.dev@gmail.com',
    icon: <MailIcon className="w-[18px] h-[18px] text-teal-500" />,
  },
];

export default function Contact() {
  const [infoRef, infoVisible] = useReveal();
  const [formRef, formVisible] = useReveal();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [note, setNote] = useState({ text: '', success: false });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setNote({ text: 'Please fill in every field before sending.', success: false });
      return;
    }

    if (!EMAIL_PATTERN.test(email.trim())) {
      setNote({ text: "That email address doesn't look right — please double-check it.", success: false });
      return;
    }

    // NOTE: This form has no backend attached yet. Wire it up to a service
    // like Formspree, EmailJS, or your own API endpoint to actually receive
    // messages. For now it simulates a successful send.
    setNote({
      text: `Thanks, ${name}! Your message has been queued — I'll reply at ${email} soon.`,
      success: true,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
        <div
          ref={infoRef}
          className={`transition-opacity duration-700 ${infoVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <p className="inline-flex items-center gap-2 font-mono text-sm text-teal-500 dark:text-teal-300 mb-3 before:content-[''] before:w-[18px] before:h-[1.5px] before:bg-teal-400">
            Contact
          </p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-5">
            Let's work together
          </h2>

          <div className="bg-gradient-to-br from-white to-slate-50 dark:from-[#121826] dark:to-[#1a2233] border border-slate-200 dark:border-white/10 rounded-2xl p-6 md:p-8">
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Have a project in mind, a role to fill, or just want to say hi?
              My inbox and LinkedIn are the fastest ways to reach me.
            </p>

            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 p-3.5 rounded-lg border border-slate-200 dark:border-white/10 hover:border-teal-400 hover:translate-x-1 hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-200"
                >
                  <span className={`w-9 h-9 rounded-lg bg-slate-100 dark:bg-white/5 grid place-items-center flex-shrink-0 ${link.iconColorClass || ''}`}>
                    {link.icon}
                  </span>
                  <span>
                    <strong className="block text-sm font-semibold">{link.label}</strong>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">{link.meta}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          ref={formRef}
          className={`transition-opacity duration-700 flex flex-col gap-4 ${formVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs text-slate-500 dark:text-slate-400">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white dark:bg-[#121826] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs text-slate-500 dark:text-slate-400">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jane@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white dark:bg-[#121826] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs text-slate-500 dark:text-slate-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me a bit about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-white dark:bg-[#121826] border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm min-h-[130px] resize-y focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all"
            ></textarea>
          </div>
          <button
            type="submit"
            className="self-start inline-flex items-center gap-2 rounded-lg bg-teal-500 text-slate-950 font-semibold px-6 py-3 text-sm transition-transform hover:-translate-y-0.5 hover:bg-teal-400"
          >
            Send Message
          </button>
          <p
            role="status"
            aria-live="polite"
            className={`text-xs min-h-[1.2em] ${note.success ? 'text-teal-500 dark:text-teal-400' : 'text-slate-500 dark:text-slate-400'}`}
          >
            {note.text}
          </p>
        </form>
      </div>
    </section>
  );
}
