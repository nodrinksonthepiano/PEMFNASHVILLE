import { pricing, siteConfig } from '@/lib/content'

export default function Pricing() {
  return (
    <section id="pricing" className="section-dark">
      <div className="container-inner">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">Pricing</span>
          <h2 className="section-title-dark mb-4">Easy Package Pricing</h2>
          <div className="divider-gold mx-auto" />
          <p className="text-cream/55 text-lg mt-4 max-w-lg mx-auto">
            All sessions are conducted in your home. No hidden fees.
            Packages and memberships offer recurring value and cumulative support.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-10">
          {pricing.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col h-full rounded-3xl p-7 border transition-all duration-200 ${
                plan.highlight
                  ? 'bg-gold border-gold shadow-xl shadow-gold/20 scale-[1.02]'
                  : 'bg-plum-light/50 border-gold/20 hover:border-gold/40'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-plum text-gold text-xs font-bold px-4 py-1 rounded-full border border-gold/40">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className={`text-sm font-semibold mb-1 ${plan.highlight ? 'text-plum/70' : 'text-cream/50'}`}>
                {plan.sessions}
              </div>
              <div className={`font-serif text-4xl font-bold mb-1 ${plan.highlight ? 'text-plum' : 'text-cream'}`}>
                {plan.price}
              </div>
              <div className={`text-sm mb-1 ${plan.highlight ? 'text-plum/60' : 'text-cream/40'}`}>
                {plan.perSession}
              </div>

              {plan.savings && (
                <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${
                  plan.highlight ? 'bg-plum/15 text-plum' : 'bg-gold/15 text-gold'
                }`}>
                  {plan.savings}
                </div>
              )}

              <p
                className={`text-sm leading-relaxed mt-5 flex-1 mb-6 ${
                  plan.highlight ? 'text-plum/70' : 'text-cream/60'
                }`}
              >
                {plan.description}
              </p>

              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-bold py-3 rounded-full transition-all ${
                  plan.highlight
                    ? 'bg-plum text-gold hover:bg-plum-dark'
                    : 'bg-gold/15 border border-gold/30 text-gold hover:bg-gold/25'
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        {/* Payment info */}
        <div className="mt-6 text-center text-cream/40 text-sm">
          Payment accepted via{' '}
          <a href={siteConfig.venmo} target="_blank" rel="noopener noreferrer"
             className="text-cream/60 hover:text-gold underline transition-colors">
            Venmo
          </a>{' '}
          or Zelle · Payment due at time of service
        </div>
      </div>
    </section>
  )
}
