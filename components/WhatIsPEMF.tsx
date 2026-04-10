import Image from 'next/image'

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Mobile, in-home',
    description:
      'Whether it is your living room, work location, or barn aisle—Lisa brings the full setup to you.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Flexible scheduling',
    description:
      'Sessions are booked around your calendar—early mornings, evenings, or weekends when it works for you.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Comfort first',
    description:
      'Bring on the pillows, a cozy blanket, a scented candle, soft light—whatever helps you settle in. Many clients read, rest, or simply breathe while the PEMF session runs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    title: 'Nurse-led',
    description:
      'Lisa is a Registered Nurse—so every session is guided with professional training and a calm, attentive presence.',
  },
]

export default function WhatIsPEMF() {
  return (
    <section id="what-is-pemf" className="section-light">
      <div className="container-inner">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <span className="section-label">The Experience</span>
            <h2 className="section-title-light mb-4">What is PEMF?</h2>
            <div className="divider-gold" />
            <p className="text-plum/70 text-lg leading-relaxed mb-4">
              PEMF stands for <strong className="text-plum">Pulsed Electromagnetic Field</strong> — a non-invasive
              wellness experience that uses gentle, rhythmic electromagnetic fields to support the body during
              a calming and restorative session.
            </p>
            <p className="text-plum/70 text-lg leading-relaxed mb-4">
              The technology has been studied for decades and is used by wellness practitioners,
              professional athletes, and equestrians worldwide. Sessions are designed to promote
              a greater sense of comfort, restored energy, and overall well-being.
            </p>
            <p className="text-plum/70 text-lg leading-relaxed">
              Think of it like jump-starting your cells—helping them recharge and function the way
              they&rsquo;re supposed to.
            </p>
          </div>

          {/* Pillars grid — 2×2 blocks (square tiles < sm); avoid 4 skinny columns beside intro on lg+ */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-cream-dark rounded-2xl p-3 sm:p-5 border border-mauve/10 hover:border-gold/30 transition-colors aspect-square sm:aspect-auto flex flex-col min-h-0"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-plum/10 flex shrink-0 items-center justify-center text-plum mb-2 sm:mb-3">
                  {p.icon}
                </div>
                <h3 className="font-serif text-plum font-bold text-sm sm:text-base mb-0.5 sm:mb-1 shrink-0">
                  {p.title}
                </h3>
                <p className="text-plum/60 text-[11px] sm:text-sm leading-snug sm:leading-relaxed flex-1 min-h-0 overflow-y-auto sm:overflow-visible overscroll-contain">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom image strip */}
        <div className="mt-14 rounded-3xl overflow-hidden h-48 sm:h-64 relative">
          <Image
            src="/images/bubble-background.png"
            alt="PEMF energy visualization"
            fill
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-plum/80 via-plum/40 to-plum/80 flex items-center justify-center">
            <p className="font-script text-3xl sm:text-4xl text-cream text-center px-4">
              &ldquo;My body exhaled and relaxed for the first time in months.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
