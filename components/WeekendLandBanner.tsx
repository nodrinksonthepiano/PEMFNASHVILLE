'use client'

import { useCallback, useEffect, useState } from 'react'
import { weekendLandPromo, siteConfig, schedulingLinks } from '@/lib/content'

const TTL_MS = 7 * 24 * 60 * 60 * 1000

function storageKey() {
  return `pemfnashville.weekendLandPromo.v${weekendLandPromo.storageVersion}.dismissedAt`
}

export default function WeekendLandBanner() {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const key = storageKey()
    const raw = localStorage.getItem(key)
    let show = true
    if (raw) {
      const t = Number(raw)
      if (Number.isFinite(t) && Date.now() - t < TTL_MS) {
        show = false
      } else {
        localStorage.removeItem(key)
      }
    }
    setOpen(show)
    setMounted(true)
  }, [])

  const dismiss = useCallback(() => {
    localStorage.setItem(storageKey(), String(Date.now()))
    setOpen(false)
  }, [])

  useEffect(() => {
    if (!mounted || !open) return
    const prev = document.body.style.paddingBottom
    document.body.style.paddingBottom =
      'max(9rem, calc(8.25rem + env(safe-area-inset-bottom)))'
    return () => {
      document.body.style.paddingBottom = prev
    }
  }, [mounted, open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, dismiss])

  if (!mounted || !open) return null

  return (
    <div
      role="region"
      aria-label="Weekend mini-session pop-up at The Land"
      className="fixed inset-x-0 bottom-0 z-[90] flex justify-center px-4 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))]
                 pointer-events-none land-banner-enter"
    >
      <div
        className="pointer-events-auto w-full max-w-3xl rounded-2xl border border-gold/50 bg-plum shadow-[0_-12px_32px_rgba(26,11,17,0.35)]
                   text-cream overflow-hidden"
      >
        <div className="px-5 py-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <p className="font-serif text-lg sm:text-xl font-bold text-gold tracking-tight leading-snug">
              {weekendLandPromo.headline}
            </p>
            <p className="text-cream/90 text-sm mt-1.5 font-medium leading-snug">
              <span className="block sm:inline">{weekendLandPromo.locationLine}</span>
              <span className="hidden sm:inline"> · </span>
              <span className="block sm:inline text-gold/95">{weekendLandPromo.hoursLine}</span>
              <span className="hidden sm:inline"> · </span>
              <span className="block sm:inline">{weekendLandPromo.priceLine}</span>
            </p>
            <p className="text-cream/75 text-xs sm:text-sm mt-2">
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold underline decoration-gold/50 underline-offset-2 hover:text-gold-light"
              >
                {schedulingLinks.bookConsult}
              </a>
              <span className="text-cream/50">{' or '}</span>
              <a
                href={siteConfig.smsHref}
                className="font-semibold text-gold underline decoration-gold/50 underline-offset-2 hover:text-gold-light"
              >
                {schedulingLinks.textToSchedule}
              </a>
              .
            </p>
          </div>

          <div className="flex justify-center sm:justify-end shrink-0">
            <button
              type="button"
              onClick={dismiss}
              className="rounded-full border border-cream/25 text-cream/85 text-sm font-semibold px-5 py-2.5
                         hover:bg-cream/10 hover:border-cream/35 transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
