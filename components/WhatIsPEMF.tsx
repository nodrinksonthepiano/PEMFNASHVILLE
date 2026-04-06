import Image from 'next/image'

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Non-Invasive',
    description: 'No needles, no medication. You remain fully clothed throughout.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'In Your Home',
    description: 'Lisa comes to you. No clinic, no commute, no waiting room.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Drug-Free',
    description: 'A natural wellness experience that works with your body.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'People & Animals',
    description: 'Sessions available for people, horses, and dogs.',
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
              Think of it as giving your body the space and support it needs to rest, reset, and
              feel more like itself.
            </p>
          </div>

          {/* Pillars grid */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-cream-dark rounded-2xl p-5 border border-mauve/10 hover:border-gold/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-plum/10 flex items-center justify-center text-plum mb-3">
                  {p.icon}
                </div>
                <h3 className="font-serif text-plum font-bold text-base mb-1">{p.title}</h3>
                <p className="text-plum/60 text-sm leading-relaxed">{p.description}</p>
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
