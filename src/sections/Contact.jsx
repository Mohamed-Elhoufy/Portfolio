import { useState } from 'react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Icon, { LinkedInIcon } from '../components/Icon'
import { profile, contactProjectTypes } from '../data/portfolio'

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: contactProjectTypes[0], message: '' })
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  // Frontend-only: opens the visitor's email app with the message pre-filled.
  // No backend is involved. To use a form service later, replace this handler.
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = `Project inquiry — ${form.type}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\n\n${form.message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const contactItems = [
    { icon: 'Mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    ...profile.phones.map((p) => ({ icon: 'Phone', label: 'Phone', value: p.label, href: p.href })),
    { icon: 'MapPin', label: 'Location', value: profile.location },
  ]

  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-20 text-white md:py-28">
      <div className="grid-pattern pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading
          light
          eyebrow="Contact"
          title="Let's work together"
          description="Tell me about your data, engineering or automation task — I'll get back to you by email."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ul className="space-y-4">
              {contactItems.map((c) => {
                const inner = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent-400 ring-1 ring-white/10">
                      <Icon name={c.icon} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-slate-400">{c.label}</span>
                      <span className="block break-all text-base font-medium text-white">{c.value}</span>
                    </span>
                  </>
                )
                return (
                  <li key={c.label + c.value}>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-accent-400/40 hover:bg-white/10"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">{inner}</div>
                    )}
                  </li>
                )
              })}
              <li>
                <a
                  href={profile.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-accent-400/40 hover:bg-white/10"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent-400 ring-1 ring-white/10">
                    <LinkedInIcon />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-slate-400">LinkedIn</span>
                    <span className="block break-all text-base font-medium text-white">{profile.linkedin.label}</span>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 text-ink shadow-lift sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Name
                  <input type="text" required autoComplete="name" value={form.name} onChange={update('name')} placeholder="Your name" className={fieldClass} />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Email
                  <input type="email" required autoComplete="email" value={form.email} onChange={update('email')} placeholder="you@example.com" className={fieldClass} />
                </label>
              </div>
              <label className="mt-5 block text-sm font-medium text-slate-700">
                Project Type
                <select value={form.type} onChange={update('type')} className={fieldClass}>
                  {contactProjectTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className="mt-5 block text-sm font-medium text-slate-700">
                Message
                <textarea required rows={5} value={form.message} onChange={update('message')} placeholder="Briefly describe what you need..." className={`${fieldClass} resize-y`} />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy-800"
              >
                Send Message <Icon name="Send" className="h-4 w-4" />
              </button>
              <p className="mt-3 text-xs text-slate-500" role="status">
                {sent
                  ? 'Your email app should open with the message ready to send.'
                  : 'Sending opens your email app with this message pre-filled.'}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
