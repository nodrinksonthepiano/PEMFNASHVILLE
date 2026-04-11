import Image from 'next/image'
import { siteConfig } from '@/lib/content'

const animalPhotos = [
  {
    src: '/images/HORSEPEMFRELEASE.JPG',
    alt: 'Horse showing the classic PEMF release response',
    caption: 'Horses & performance animals',
  },
  {
    src: '/images/pipring.jpeg',
    alt: 'Small dog during an in-home PEMF wellness session',
    caption: 'Small companions',
  },
  {
    src: '/images/HORSEHEADPEMF.jpg',
    alt: 'Horse receiving a PEMF session',
    caption: 'Farm & stable visits',
  },
]

export default function Animals() {
  return (
    <section id="animals" className="section-light overflow-hidden">
      <div className="container-inner">
        <div className="text-center mb-10">
          <span className="section-label">For Your Animals</span>
          <div className="divider-gold mx-auto mt-2" />
          <p className="text-plum/60 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            PEMF is widely used with animals—from sport horses and working dogs to family pets.
            Lisa offers the same RN-informed, gentle approach she brings to human sessions, tailored to
            the species, temperament, and setting that fit your animals best.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-14">
          <div className="relative order-1">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold/20 to-mauve/10 blur-xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] max-w-sm mx-auto">
              <Image
                src="/images/RNDOGPEMF.jpg"
                alt="Lisa Taylor administering a PEMF session to a golden retriever"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="order-2 space-y-4 text-plum/70 text-lg leading-relaxed">
            <p>
              Whether you&rsquo;re supporting recovery after competition, easing the day-to-day
              stiffness of an older pet, or simply want the same restorative experience for your
              animals that you choose for yourself, PEMF can be part of the plan.
            </p>
            <p>
              Sessions are available for dogs, horses, and other animals where PEMF is appropriate—
              at your home, barn, or stable. Mention who you&rsquo;d like support for—two-legged,
              four-legged, or both—when you book your consult.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-block"
              >
                Book a Consult
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {animalPhotos.map((photo) => (
            <div key={photo.src} className="group relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/70 via-transparent to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              flex items-end p-3">
                <p className="text-cream text-xs leading-snug">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
