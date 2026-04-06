import Image from 'next/image'
import { siteConfig } from '@/lib/content'

const animalPhotos = [
  {
    src: '/images/DOGSONPEMFCHAIR.jpg',
    alt: 'Two dogs relaxing on the PEMF mat',
    caption: 'Dogs love it too',
  },
  {
    src: '/images/HORSEPEMFRELEASE.JPG',
    alt: 'Horse showing the classic PEMF release response',
    caption: 'A classic release response — equestrians know exactly what this means',
  },
  {
    src: '/images/HORSEHEADPEMF.jpg',
    alt: 'Horse receiving a PEMF session',
    caption: 'Supporting your horse',
  },
]

export default function Animals() {
  return (
    <section id="animals" className="section-light overflow-hidden">
      <div className="container-inner">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">For Your Animals</span>
          <h2 className="section-title-light mb-4">
            Your Horse Already Knows.<br />
            <span className="text-mauve">Now It&rsquo;s Your Turn.</span>
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="text-plum/60 text-lg max-w-2xl mx-auto mt-4">
            Equestrians have used PEMF to support their horses for years.
            The same restorative experience is now available for you — and for all the animals you love.
          </p>
        </div>

        {/* Feature — RN with dog */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
          {/* Image */}
          <div className="relative">
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

          {/* Text */}
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-plum font-bold mb-4 leading-tight">
              The same care you&rsquo;d give your horse —<br />
              <span className="text-mauve">brought to your pet.</span>
            </h3>
            <div className="space-y-4 text-plum/70 text-lg leading-relaxed">
              <p>
                As an equestrian and RN, Lisa understands the animal body with the same depth she
                brings to human sessions. PEMF has long been trusted in barns and stables across
                the country to support horses after competition, injury, and daily exertion.
              </p>
              <p>
                That same experience is available for your dog, your horse — and yes, for you.
              </p>
              <p className="text-plum font-medium">
                &ldquo;If it works for your horse, imagine what it might do for you.&rdquo;
              </p>
            </div>

            <div className="mt-8">
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Book a Consult for Your Animal
              </a>
            </div>
          </div>
        </div>

        {/* Photo row */}
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
