import Image from 'next/image'
import { siteConfig } from '@/lib/content'

export default function FinalCTA() {
  return (
    <section className="relative bg-plum py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/bubble-background.png"
          alt=""
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-plum via-plum/95 to-plum" />
      </div>

      {/* Gold sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '20%', left: '10%' }, { top: '70%', left: '5%' },
          { top: '30%', right: '15%' }, { top: '65%', right: '8%' },
          { top: '50%', left: '50%' },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/50 animate-pulse-slow"
            style={{ ...pos, animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <span className="font-script text-gold text-2xl block mb-4">Ready to feel better?</span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream font-bold mb-6 leading-tight">
          Your Home.<br />
          <span className="text-gold italic">Your Comfort.</span><br />
          Your Session.
        </h2>
        <p className="text-cream/60 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          Start with a free consult. Lisa will answer every question, walk you through what
          to expect, and help you find the right fit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base"
          >
            Book Free Consult
          </a>
          <a href={siteConfig.smsHref} className="btn-outline text-base">
            Text Lisa: {siteConfig.phone}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-cream/35 text-sm">
          <span className="flex items-center gap-2">
            <span className="text-gold">✓</span> In-Home Sessions
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">✓</span> RN-Administered
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">✓</span> People &amp; Animals
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">✓</span> Nashville, TN
          </span>
        </div>
      </div>
    </section>
  )
}
