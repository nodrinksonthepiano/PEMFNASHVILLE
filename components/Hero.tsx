import Image from 'next/image'
import { siteConfig } from '@/lib/content'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-plum">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Text content — centered on mobile, left-aligned md+ */}
        <div className="order-2 md:order-1 flex min-w-0 w-full flex-col items-center md:items-start text-center md:text-left">
          <h1 className="font-serif text-cream font-bold leading-tight mb-4 text-[clamp(2.25rem,1.2rem+4vw,4rem)]">
            PEMF Nashville
          </h1>

          <h2 className="font-serif text-cream/90 text-xl sm:text-2xl font-normal leading-snug mb-4 max-w-lg">
            In-Home Sessions + Brentwood Office · Lisa Taylor, RN
          </h2>

          <p className="text-gold/90 text-sm sm:text-base font-medium tracking-wide mb-3 max-w-lg">
            Nashville · Brentwood · Belle Meade · Green Hills · Franklin · Bellevue
          </p>

          <p className="font-script text-gold text-xl sm:text-2xl mb-8 max-w-lg">
            {siteConfig.tagline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full max-w-md mx-auto md:max-w-none md:mx-0 justify-center md:justify-start">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base w-full sm:w-auto text-center"
            >
              Book Free Consult
            </a>
            <a href={siteConfig.smsHref} className="btn-outline text-base w-full sm:w-auto text-center">
              Text: {siteConfig.phone}
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-cream/50 text-sm justify-center md:justify-start">
            <span className="flex items-center gap-1.5 justify-center">
              <span className="text-gold">✓</span> Registered Nurse
            </span>
            <span className="flex items-center gap-1.5 justify-center">
              <span className="text-gold">✓</span> Pulse PEMF Certified
            </span>
            <span className="flex items-center gap-1.5 justify-center">
              <span className="text-gold">✓</span> People &amp; Animals
            </span>
          </div>
        </div>

        {/* Photo */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/30 via-mauve/20 to-transparent blur-xl" />

            {/* Photo frame */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl w-72 h-96 sm:w-80 sm:h-[440px] lg:w-[400px] lg:h-[540px]">
              <Image
                src="/images/RNHORSE.JPG"
                alt="Lisa Taylor, Registered Nurse and PEMF practitioner, with her horse"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 320px, 400px"
              />
            </div>

            {/* Floating credential card — centered under photo on mobile */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 bg-cream rounded-2xl px-4 py-3 shadow-xl border border-cream-dark max-w-[200px] text-center md:text-left">
              <div className="text-plum font-bold text-sm leading-tight">Lisa Taylor</div>
              <div className="text-mauve text-xs mt-0.5 leading-snug">Registered Nurse &amp; Pulse PEMF Practitioner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
