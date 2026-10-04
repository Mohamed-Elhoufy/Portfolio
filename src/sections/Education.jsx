import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { education } from '../data/portfolio'

export default function Education() {
  const { degree, training } = education
  return (
    <section id="education" className="bg-paper py-20 md:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Education" title="Education and training" />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <article className="card h-full p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-accent-400">
                  <Icon name="GraduationCap" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy-900">{degree.title}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-600">{degree.org}</p>
                  <p className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="chip">{degree.period}</span>
                    <span className="chip">{degree.grade}</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-paper p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-navy-900">{degree.project.title}</p>
                  <span className="rounded-full bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-600 ring-1 ring-accent-500/30">
                    {degree.project.grade}
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {degree.project.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Icon name="Check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <Reveal delay={90}>
            <article className="card h-full p-7 sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-accent-400">
                <Icon name="Cpu" className="h-6 w-6" />
              </span>
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-accent-600">Professional training</p>
              <h3 className="mt-2 text-xl font-bold text-navy-900">{training.title}</h3>
              <p className="mt-2 text-sm font-medium text-slate-600">{training.org}</p>
              <p className="mt-4 flex flex-wrap items-center gap-2">
                <span className="chip">{training.period}</span>
                <span className="chip">{training.duration}</span>
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
