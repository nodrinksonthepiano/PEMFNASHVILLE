import Image from 'next/image'
import { siteConfig } from '@/lib/content'

const credentials = [
  { label: 'Registered Nurse', icon: '🩺' },
  { label: 'Pulse PEMF Certified', icon: '⚡' },
  { label: 'Lifelong Equestrian', icon: '🐴' },
  { label: 'Nashville, TN', icon: '📍' },
]

export default function AboutLisa() {
  return (
    <section id="about" className="section-light">
      <div className="container-inner">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-xl lg:max-w-none">
              {/* Background glow */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-mauve/20 via-gold/10 to-transparent blur-lg" />

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/theo12.jpg"
                  alt="Lisa Taylor, Registered Nurse, with her dog Theo"
                  width={2677}
                  height={1784}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Credentials strip */}
              <div className="relative z-10 mt-4 bg-plum rounded-2xl px-4 py-3 shadow-xl">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {credentials.map((c) => (
                    <div key={c.label} className="flex items-center gap-2">
                      <span className="text-base">{c.icon}</span>
                      <span className="text-cream/80 text-xs font-medium leading-tight">{c.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="mt-8 lg:mt-0">
            <span className="section-label">Meet Lisa</span>
            <div className="divider-gold mt-2" />

            <div className="space-y-4 text-plum/70 text-lg leading-relaxed mt-6">
              <p>
                I&apos;ve always loved two things &mdash; caring for people and spending time around horses.
                As a Registered Nurse and lifelong equestrian, I never imagined those worlds would collide in
                the way that they did.
              </p>
              <p>
                A few years ago, I suffered a compression fracture in my back after falling off a horse. The
                pain was intense, and I found myself searching for something beyond conventional treatments.
                That&apos;s when I discovered Pulse PEMF.
              </p>
              <p>
                From my very first session, I felt a remarkable shift &mdash; real, immediate relief that
                reached deep into the areas of pain I hadn&apos;t been able to touch before. As I continued with
                PEMF, that relief grew into lasting comfort and renewed strength.
              </p>
              <p>
                Today, I bring what I&apos;ve learned &mdash; both as a nurse and through my own recovery &mdash;
                to every PEMF session. My goal is simple: help you feel better, move easier, and find real relief
                in a peaceful, relaxed setting.
              </p>
              <p>
                If you&apos;re ready to experience the difference PEMF can make, I&apos;d love to share it with
                you and help you start your own path toward wellness.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Book a Free Consult
              </a>
              <a href={siteConfig.emailHref} className="btn-outline">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
