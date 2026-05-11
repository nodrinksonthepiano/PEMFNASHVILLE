'use client'

import { useCallback, useEffect, useState } from 'react'
import { weekendLandPromo, siteConfig, schedulingLinks } from '@/lib/content'

export default function WeekendLandBanner() {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  const dismiss = useCallback(() => {
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
        className="pointer-events-auto relative w-full max-w-3xl rounded-2xl border border-gold/50 shadow-[0_-12px_32px_rgba(26,11,17,0.35)]
                   overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <div
            className="absolute inset-0 origin-center bg-[url('/images/treebackgroundpopup.png')] bg-cover bg-center bg-no-repeat
                       scale-[1.28] max-md:bg-[center_62%] md:scale-100 md:bg-center"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-plum/[0.03] via-transparent to-cream/[0.14]
                     md:from-plum/[0.11] md:via-cream/[0.025] md:to-cream/[0.30]
                     pointer-events-none"
        />
        <div className="relative z-10 p-3 sm:p-3.5">
          <div
            className="rounded-xl border border-plum/20 bg-cream/[0.64] px-5 py-4 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5
                       shadow-[0_8px_32px_rgba(61,26,40,0.12)] backdrop-blur-sm backdrop-saturate-110 md:backdrop-blur-md md:bg-cream/[0.60]"
          >
            <div className="flex-1 min-w-0 text-center sm:text-left">
              <p className="font-serif text-lg sm:text-xl font-bold text-plum tracking-tight leading-snug">
                {weekendLandPromo.headline}
              </p>
              <p className="text-plum/85 text-sm mt-1.5 font-medium leading-snug">
                <span className="block sm:inline">{weekendLandPromo.locationLine}</span>
                <span className="hidden sm:inline text-plum/40"> · </span>
                <span className="block sm:inline font-semibold text-gold-dark">{weekendLandPromo.hoursLine}</span>
                <span className="hidden sm:inline text-plum/40"> · </span>
                <span className="block sm:inline text-plum/90">{weekendLandPromo.priceLine}</span>
              </p>
              <p className="text-plum/70 text-xs sm:text-sm mt-2">
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-plum underline decoration-plum/40 underline-offset-[3px] hover:text-plum-dark"
                >
                  {schedulingLinks.bookConsult}
                </a>
                <span className="text-plum/45">{' or '}</span>
                <a
                  href={siteConfig.smsHref}
                  className="font-semibold text-plum underline decoration-plum/40 underline-offset-[3px] hover:text-plum-dark"
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
                className="rounded-full border border-plum/35 text-plum text-sm font-semibold px-5 py-2.5
                           bg-cream/80 hover:bg-plum/[0.06] hover:border-plum/50 transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
