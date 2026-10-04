const variants = {
  primary:
    'bg-accent-400 text-navy-950 hover:bg-accent-500 shadow-[0_8px_24px_-8px_rgba(34,184,207,0.6)]',
  dark: 'bg-navy-900 text-white hover:bg-navy-800',
  outline: 'border border-slate-300 bg-white text-ink hover:border-navy-900 hover:bg-slate-50',
  outlineLight: 'border border-white/25 bg-white/5 text-white hover:bg-white/10',
}

export default function Button({ href, variant = 'primary', children, className = '', ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
