import Image from 'next/image'

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Living room, barn, wherever',
    description:
      'Whether it is your living room, bedroom, barn aisle, or paddock—Lisa brings the full setup to you so the session happens where you already are.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Say who you are booking for',
    description:
      'When you reach out, just say who the session is for—you, a family member, or an animal—so Lisa can plan accordingly.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Comfort-first session',
    description:
      'You stay fully clothed and relaxed—many clients read, rest, or simply breathe while the PEMF session runs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Flexible scheduling',
    description: 'Sessions are booked around your calendar—early mornings.',
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
