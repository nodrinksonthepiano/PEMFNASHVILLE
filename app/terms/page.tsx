import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Terms of Service | PEMF Nashville',
  description: 'Terms for using the PEMF Nashville website and wellness-session information.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section-dark pt-28 pb-16">
          <div className="container-inner max-w-3xl">
            <span className="section-label">PEMF Nashville</span>
            <h1 className="section-title-dark mb-4 mt-2">Terms of Service</h1>
            <div className="divider-gold" />
            <p className="text-cream/70 text-sm mt-6">Last updated: September 6, 2026</p>
          </div>
        </section>

        <section className="section-light py-16">
          <div className="container-inner max-w-3xl space-y-10 text-plum/70 text-lg leading-relaxed">
            <p>These Terms of Service govern your use of pemfnashville.com.</p>

            <section>
              <h2 className="font-serif text-plum text-2xl font-bold mb-4">Wellness information and services</h2>
              <p>
                The information on this website is provided for general wellness and educational purposes. PEMF
                Nashville offers wellness sessions and does not provide medical diagnosis or medical treatment through
                this website.
              </p>
              <p className="mt-4">
                PEMF sessions are not intended to diagnose, treat, cure, or prevent any disease or medical condition.
                Individual experiences and results vary. For medical questions or concerns, consult a qualified
                healthcare professional.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-plum text-2xl font-bold mb-4">Consult requests</h2>
              <p>
                This website provides options to request a free consult or contact PEMF Nashville. A free consult is
                an opportunity to discuss your goals and whether a session may be an appropriate fit; it is not a
                substitute for medical care.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-plum text-2xl font-bold mb-4">Third-party links</h2>
              <p>
                This website may link to third-party services and websites, including scheduling, payment, social-media,
                and press-feature platforms. PEMF Nashville does not control those services and is not responsible for
                their content, availability, terms, or privacy practices.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-plum text-2xl font-bold mb-4">Contact</h2>
              <p>
                Questions about these Terms may be sent to{' '}
                <a href={siteConfig.emailHref} className="text-plum underline decoration-gold/60 underline-offset-4 hover:text-plum-dark">
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
