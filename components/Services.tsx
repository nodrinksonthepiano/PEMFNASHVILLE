import Image from 'next/image'
import { services, siteConfig } from '@/lib/content'

export default function Services() {
  return (
    <section id="services" className="section-dark">
      <div className="container-inner">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title-dark mb-4">How Can We Support You?</h2>
          <div className="divider-gold mx-auto" />
          <p className="text-cream/60 text-lg max-w-xl mx-auto mt-4">
            Every session is tailored to you. Lisa comes to your home with everything needed
            for a comfortable, restorative experience.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group bg-plum-light/40 border border-gold/15 rounded-3xl overflow-hidden
                         hover:border-gold/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/80 to-transparent" />

                {/* Number badge */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gold/20 border border-gold/40
                                flex items-center justify-center text-gold text-sm font-bold">
                  {idx + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-cream text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-cream/65 leading-relaxed text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add-on note */}
        <div className="mt-10 rounded-2xl border border-gold/20 bg-gold/5 px-6 py-5 flex flex-col sm:flex-row
                        items-start sm:items-center gap-3 sm:gap-6">
          <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <div className="text-gold font-semibold text-sm">Red Light Therapy Add-On Available</div>
            <div className="text-cream/55 text-sm mt-0.5">
              Targeted red light therapy for specific areas is available as a separate add-on session.
              Ask Lisa about it during your free consult.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Book Your Free Consult
          </a>
        </div>
      </div>
    </section>
  )
}
