import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Experience" title="Where I have worked" />

        <ol className="relative space-y-8 border-l border-slate-200 pl-6 sm:pl-10">
          {experience.map((job, i) => (
            <li key={job.role} className="relative">
              <span
                className={`absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-white sm:-left-[47px] ${
                  job.current ? 'bg-accent-500 ring-4 ring-accent-500/20' : 'bg-slate-400'
                }`}
                aria-hidden="true"
              />
              <Reveal delay={i * 90}>
                <article className="card p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-navy-900">{job.role}</h3>
                      <p className="mt-1 flex items-center gap-2 text-sm font-medium text-slate-600">
                        <Icon name="Briefcase" className="h-4 w-4" />
                        {job.org}
                      </p>
                    </div>
                    <span className="rounded-full bg-paper px-3 py-1 font-mono text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                      {job.period}
                    </span>
                  </div>

                  {job.note && <p className="mt-4 text-sm leading-relaxed text-slate-600">{job.note}</p>}

                  <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Icon name="Check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
