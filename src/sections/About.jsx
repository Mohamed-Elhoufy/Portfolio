import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { about } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="About" title="Engineering problem-solving, applied to data and AI" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal className="space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="rounded-2xl border border-accent-500/25 bg-accent-500/5 p-5">
              <p className="font-semibold text-navy-900">{about.foundation.title}</p>
              <p className="mt-2 text-base text-slate-600">{about.foundation.text}</p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {about.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 70}>
                <div className="card card-hover h-full p-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-accent-400">
                    <Icon name={h.icon} />
                  </span>
                  <p className="mt-4 font-semibold text-navy-900">{h.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
