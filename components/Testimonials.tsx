import { testimonials } from '@/lib/content'

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div
      className="bg-cream/[0.06] border border-gold/15 rounded-2xl p-6
                 hover:bg-cream/[0.10] hover:border-gold/30 transition-all duration-300"
    >
      <StarRow />
      <blockquote className="text-cream/80 leading-relaxed text-sm mb-5 italic">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30
                     flex items-center justify-center text-gold font-bold text-sm"
        >
          {t.name[0]}
        </div>
        <div className="text-cream font-semibold text-sm">— {t.name}</div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const firstRow = testimonials.slice(0, 4)
  const lastRow = testimonials.slice(4)

  return (
    <section id="testimonials" className="section-dark">
      <div className="container-inner">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title-dark mb-4">What Clients Are Saying</h2>
          <div className="divider-gold mx-auto" />
        </div>

        {/* Grid: four standard cards, Beth featured script, Joely */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {firstRow.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
          <div
            className="bg-cream/[0.06] border border-gold/15 rounded-2xl p-6
                       hover:bg-cream/[0.10] hover:border-gold/30 transition-all duration-300
                       flex flex-col justify-center text-center"
          >
            <p className="font-script text-2xl sm:text-3xl text-gold leading-snug px-1">
              &ldquo;My body exhaled and relaxed<br />
              for the first time in months.&rdquo;
            </p>
            <p className="text-cream/50 text-sm mt-4">— Beth</p>
          </div>
          {lastRow.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
