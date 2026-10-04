import { useEffect, useState } from 'react'
import Icon from './Icon'
import Button from './Button'
import { navLinks, profile } from '../data/portfolio'

const sectionIds = ['home', 'about', 'services', 'skills', 'projects', 'experience', 'education', 'achievements', 'contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Close menu with Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const solid = scrolled || open
  const linkBase = 'rounded-lg px-3 py-2 text-sm font-medium transition-colors'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'border-b border-slate-200/70 bg-paper/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
        <a
          href="#home"
          className={`flex items-center gap-2.5 font-semibold tracking-tight ${solid ? 'text-navy-900' : 'text-white'}`}
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 font-mono text-xs font-bold text-accent-400 ring-1 ring-white/10">
            ME
          </span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const isActive = active === l.href.slice(1)
            const color = solid
              ? isActive
                ? 'text-navy-900 bg-slate-200/60'
                : 'text-slate-600 hover:text-navy-900'
              : isActive
                ? 'text-white bg-white/10'
                : 'text-slate-300 hover:text-white'
            return (
              <li key={l.href}>
                <a href={l.href} className={`${linkBase} ${color}`}>
                  {l.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contact" variant={solid ? 'dark' : 'primary'} className="!px-4 !py-2.5">
            Let&apos;s Work Together
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden ${
            solid ? 'text-navy-900' : 'text-white'
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'X' : 'Menu'} className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`lg:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="container-x pb-5 pt-1">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" variant="dark" className="mt-3 w-full" onClick={() => setOpen(false)}>
            Let&apos;s Work Together
          </Button>
        </div>
      </div>
    </header>
  )
}
