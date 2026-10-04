import { useState } from 'react'
import Icon from './Icon'
import { profile } from '../data/portfolio'

/**
 * Profile photo frame.
 * Replace public/assets/profile.jpg with your own photo — that's all.
 * If the file is missing, a neutral placeholder is shown instead.
 */
export default function ProfilePhoto({ className = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {/* offset outline frame */}
      <div
        className="absolute -inset-3 translate-x-3 translate-y-3 rounded-[2rem] border border-accent-400/40"
        aria-hidden="true"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-navy-800 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
        {!failed ? (
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
            width="640"
            height="800"
            fetchpriority="high"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-navy-800 to-navy-900 p-6 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/5 text-accent-400">
              <Icon name="User" className="h-10 w-10" />
            </div>
            <p className="text-sm font-medium text-slate-200">Your photo goes here</p>
            <p className="font-mono text-xs text-slate-400">assets/profile.jpg</p>
          </div>
        )}
      </div>
    </div>
  )
}
