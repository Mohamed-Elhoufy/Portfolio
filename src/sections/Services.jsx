import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import Icon from '../components/Icon'
import { services } from '../data/portfolio'

export default function Services() {
  return (
    <section id="services" className="bg-paper py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Services"
          title="How I Can Help"
          description="Practical help for turning data and repetitive work into clear, usable results."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="card card-hover flex h-full flex-col p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-accent-400">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.description}</p>
                <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Icon name="Check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button href="#contact" variant="dark">
            Let&apos;s Work Together <Icon name="ArrowRight" className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
