import Button from '../components/Button'
import Icon from '../components/Icon'
import ProfilePhoto from '../components/ProfilePhoto'
import TechBackground from '../components/TechBackground'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-900 pb-20 pt-28 text-white md:pb-28 md:pt-36">
      <TechBackground />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        {/* Photo — first on mobile, right side on desktop */}
        <div className="order-first flex justify-center lg:order-last lg:justify-end">
          <div className="relative">
            <ProfilePhoto className="w-48 sm:w-60 lg:w-72" />
            <span className="absolute -left-3 bottom-8 hidden items-center gap-2 rounded-full border border-white/10 bg-navy-800/90 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-lg sm:inline-flex lg:-left-10">
              <Icon name="MapPin" className="h-3.5 w-3.5 text-accent-400" />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Engineering + Data + AI + Automation
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-5 text-xl font-semibold text-accent-400 sm:text-2xl">{profile.role}</p>
          <p className="mt-1 text-base text-slate-300 sm:text-lg">{profile.focus.join(' | ')}</p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
            {profile.heroIntro}
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
            <Button href="#contact" variant="primary">
              Let&apos;s Work Together <Icon name="ArrowRight" className="h-4 w-4" />
            </Button>
            <Button href="#projects" variant="outlineLight">
              View My Projects
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {profile.heroBadges.map((b) => (
              <li key={b} className="chip-dark">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
