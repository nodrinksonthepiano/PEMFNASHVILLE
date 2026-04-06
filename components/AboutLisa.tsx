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
            <div className="relative">
              {/* Background glow */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-mauve/20 via-gold/10 to-transparent blur-lg" />

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl w-72 h-96 sm:w-80 sm:h-[440px]">
                <Image
                  src="/images/RNHORSE.JPG"
                  alt="Lisa Taylor, RN with her horse"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 288px, 320px"
                />
              </div>

              {/* Credentials strip */}
              <div className="absolute -bottom-6 left-4 right-4 bg-plum rounded-2xl px-4 py-3 shadow-xl">
                <div className="grid grid-cols-2 gap-2">
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
                Lisa Taylor is a <strong className="text-plum">Registered Nurse</strong>, lifelong equestrian,
                and certified Pulse PEMF practitioner — and her journey to PEMF is deeply personal.
              </p>
              <p>
                After being thrown from a horse and breaking a vertebra in her back, Lisa found herself
                searching for support beyond what traditional medicine was offering. She discovered PEMF as
                part of her own wellness journey — and the experience was profound.
              </p>
              <p>
                &ldquo;I felt the difference in my own body. I knew I had to share this with others.&rdquo;
              </p>
              <p>
                Today, Lisa brings her clinical background and genuine compassion to every session.
                She comes to your home with professional equipment, a calming presence, and kind attentive care.
              </p>
              <p>
                Her mobile sessions are designed to create a calm, supportive experience that helps
                clients feel more comfortable, restored, and cared for.
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
