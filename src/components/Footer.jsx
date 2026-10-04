import { profile } from '../data/portfolio'
import { LinkedInIcon } from './Icon'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <p className="text-lg font-semibold text-white">{profile.name}</p>
          <p className="mt-2 text-sm leading-relaxed">{profile.title}</p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a
            href={profile.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <LinkedInIcon className="h-4 w-4" /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
            <Icon name="Mail" className="h-4 w-4" /> {profile.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
