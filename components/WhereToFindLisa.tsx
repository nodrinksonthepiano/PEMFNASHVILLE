import { sessionLocations } from '@/lib/content'

export default function WhereToFindLisa() {
  return (
    <section id="locations" className="section-light">
      <div className="container-inner">
        <div className="text-center mb-12">
          <span className="section-label">Sessions</span>
          <h2 className="section-title-light mb-4">Where to Find Lisa</h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {sessionLocations.map((location) => (
            <div
              key={location.id}
              className="bg-cream-dark rounded-3xl p-7 sm:p-8 border border-mauve/15 hover:border-gold/30 transition-colors"
            >
              <h3 className="font-serif text-plum text-2xl font-bold mb-2">{location.title}</h3>
              <p className="text-plum/75 text-lg leading-snug mb-4">{location.headline}</p>
              <p className="font-serif text-3xl font-bold text-plum mb-1">
                {location.price}
                <span className="text-plum/50 text-lg font-sans font-medium"> · {location.duration}</span>
              </p>
              <p className="text-plum/60 text-sm mt-3 leading-relaxed">{location.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
