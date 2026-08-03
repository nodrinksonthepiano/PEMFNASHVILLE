import { pricing, siteConfig, schedulingLinks } from '@/lib/content'

function schedulingLinkClasses(highlight: boolean) {
  return highlight
    ? 'font-semibold text-plum underline decoration-plum/35 underline-offset-2 hover:text-plum-dark'
    : 'font-semibold text-gold underline decoration-gold/40 underline-offset-2 hover:text-gold-light'
}

function schedulingOrDividerClass(highlight: boolean) {
  return highlight ? 'text-plum/45' : 'text-cream/45'
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-dark">
      <div className="container-inner">
        <div className="text-center mb-14">
          <span className="section-label">Pricing</span>
          <h2 className="section-title-dark mb-4">Session Pricing</h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto mb-10">
          {pricing.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col h-full rounded-3xl p-7 border transition-all duration-200 ${
                plan.highlight
                  ? 'bg-gold border-gold shadow-xl shadow-gold/20'
                  : 'bg-plum-light/50 border-gold/20 hover:border-gold/40'
              }`}
            >
              <h3 className={`font-serif text-xl font-bold mb-4 ${plan.highlight ? 'text-plum' : 'text-cream'}`}>
                {plan.label}
              </h3>
              <div className={`font-serif text-4xl font-bold mb-1 ${plan.highlight ? 'text-plum' : 'text-cream'}`}>
                {plan.price}
                <span className={`text-lg font-sans font-medium ${plan.highlight ? 'text-plum/60' : 'text-cream/50'}`}>
                  {' '}· {plan.sessions}
                </span>
              </div>
              <p
                className={`text-sm leading-relaxed mt-4 flex-1 ${
                  plan.highlight ? 'text-plum/70' : 'text-cream/60'
                }`}
              >
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-cream/75 text-base mb-6">
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className={schedulingLinkClasses(false)}
          >
            {schedulingLinks.bookConsult}
          </a>
          <span className={schedulingOrDividerClass(false)}>{' '}or{' '}</span>
          <a href={siteConfig.smsHref} className={schedulingLinkClasses(false)}>
            {schedulingLinks.textToSchedule}
          </a>
          .
        </p>

        <div className="text-center text-cream/40 text-sm">
          Payment accepted via{' '}
          <a
            href={siteConfig.venmo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/60 hover:text-gold underline transition-colors"
          >
            Venmo
          </a>{' '}
          or Zelle · Payment due at time of service
        </div>
      </div>
    </section>
  )
}
