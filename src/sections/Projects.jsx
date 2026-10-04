import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="bg-paper py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work and focus areas"
          description="Projects across engineering, data analysis and AI. Case studies are added as they are documented."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 90}>
              <article className="card card-hover group flex h-full flex-col overflow-hidden">
                <div className="dot-pattern relative flex h-28 items-center justify-between bg-gradient-to-br from-navy-900 to-navy-800 px-7">
                  <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent-400">
                    <Icon name={p.icon} className="h-7 w-7" />
                  </span>
                  <span className="relative rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-200">
                    {p.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-bold text-navy-900">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-accent-600"
                      >
                        View project <Icon name="ArrowUpRight" className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                        {p.status}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
