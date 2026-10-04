import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="Tools and technologies I work with"
          description="Grouped by area — from engineering data to AI agents and embedded systems."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 80}>
              <div className="card card-hover h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-paper text-navy-900 ring-1 ring-slate-200">
                    <Icon name={g.icon} />
                  </span>
                  <h3 className="font-semibold text-navy-900">{g.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
