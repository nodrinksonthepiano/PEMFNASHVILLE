import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig, schedulingLinks } from '@/lib/content'
import type { SeoTopic } from '@/lib/seo-topics'

export default function TopicPage({ topic }: { topic: SeoTopic }) {
  return (
    <>
      <Header />
      <main>
        <section className="section-dark pt-28 pb-16">
          <div className="container-inner max-w-3xl">
            <Link
              href="/"
              className="text-gold/70 hover:text-gold text-sm font-medium mb-8 inline-block transition-colors"
            >
              ← Back to PEMF Nashville
            </Link>
            <span className="section-label">{topic.subtitle}</span>
            <h1 className="section-title-dark mb-4 mt-2">{topic.h1}</h1>
            <div className="divider-gold" />
            <p className="text-cream/70 text-lg leading-relaxed mt-6">{topic.intro}</p>
          </div>
        </section>

        <section className="section-light py-16">
          <div className="container-inner max-w-3xl space-y-12">
            {topic.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-serif text-plum text-2xl font-bold mb-4">{section.heading}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-plum/70 text-lg leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl bg-plum p-8 text-center">
              <p className="font-script text-gold text-2xl mb-3">Ready to learn more?</p>
              <p className="text-cream/70 text-sm leading-relaxed mb-6 max-w-md mx-auto">
                Start with a free consult. Lisa will answer your questions and help you find the right
                fit — in-home or at Kinnection Clinic in Brentwood.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="btn-gold">
                  Book Free Consult
                </a>
                <a href={siteConfig.smsHref} className="btn-outline">
                  Text Lisa
                </a>
              </div>
              <p className="text-cream/45 text-xs mt-6">
                <a href={siteConfig.calendly} className="underline hover:text-gold">
                  {schedulingLinks.bookConsult}
                </a>
                {' · '}
                Office $125 · In-home $150 · Nashville &amp; Brentwood
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
