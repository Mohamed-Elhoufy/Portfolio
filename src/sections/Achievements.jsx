import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { achievements } from '../data/portfolio'

export default function Achievements() {
  return (
    <section id="achievements" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Achievements" title="Milestones along the way" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 70}>
              <div className="card card-hover h-full p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 ring-1 ring-accent-500/25">
                  <Icon name={a.icon} />
                </span>
                <p className="mt-4 font-semibold text-navy-900">{a.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
