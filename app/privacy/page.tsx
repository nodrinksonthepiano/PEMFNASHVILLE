import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Privacy Policy | PEMF Nashville',
  description:
    "Learn how PEMF Nashville's website handles information and links to third-party booking, payment, communication, and social services.",
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section-dark pt-28 pb-16">
          <div className="container-inner max-w-3xl">
            <span className="section-label">PEMF Nashville</span>
            <h1 className="section-title-dark mb-4 mt-2">Privacy Policy</h1>
            <div className="divider-gold" />
            <p className="text-cream/70 text-sm mt-6">Last updated: September 6, 2026</p>
          </div>
        </section>

        <section className="section-light py-16">
          <div className="container-inner max-w-3xl space-y-10 text-plum/70 text-lg leading-relaxed">
            <p>
              PEMF Nashville respects your privacy. This Privacy Policy describes the information practices of
              pemfnashville.com.
            </p>

            <section>
              <h2 className="font-serif text-plum text-2xl font-bold mb-4">Information collected through this website</h2>
              <p>
                The current website does not include a contact form, user accounts, a newsletter signup, on-site
                checkout, or website analytics or tracking code.
              </p>
              <p className="mt-4">
                The website provides ways to contact PEMF Nashville by phone, text message, and email, and includes
                links to third-party services for scheduling, payment, and social media. If you choose to use one of
                those options, you may provide information directly to PEMF Nashville or to the relevant third-party
                service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-plum text-2xl font-bold mb-4">Third-party services</h2>
              <p>
                PEMF Nashville links to services including Calendly for free-consult scheduling, Venmo for payment,
                Instagram and Facebook for social media, and other external websites. These services operate
                independently and have their own privacy policies and practices. PEMF Nashville does not control their
                handling of information.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-plum text-2xl font-bold mb-4">Communication and scheduling</h2>
              <p>
                If you contact PEMF Nashville by phone, text, email, or through a scheduling service, PEMF Nashville
                may receive the information you choose to provide in order to respond to your inquiry or coordinate a
                session. Please do not send sensitive medical information through channels that are not appropriate
                for it.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-plum text-2xl font-bold mb-4">Questions</h2>
              <p>
                For privacy questions about PEMF Nashville or this website, contact{' '}
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
