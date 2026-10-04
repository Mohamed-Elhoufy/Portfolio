import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, light = false, align = 'left' }) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className={light ? 'eyebrow !text-accent-400' : 'eyebrow'}>{eyebrow}</p>
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-navy-900'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
