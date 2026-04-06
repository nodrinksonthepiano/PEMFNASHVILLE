'use client'

import { useState } from 'react'
import { faqs } from '@/lib/content'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-plum/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-serif text-plum font-semibold text-lg leading-snug group-hover:text-mauve-dark transition-colors">
          {question}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border-2 border-gold/40 flex items-center justify-center
                      text-gold transition-all duration-200 ${open ? 'rotate-45 bg-gold/10' : ''}`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-plum/65 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section-light">
      <div className="container-inner">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — heading + CTA */}
          <div>
            <span className="section-label">Common Questions</span>
            <h2 className="section-title-light mb-4">Everything You Need to Know</h2>
            <div className="divider-gold" />
            <p className="text-plum/60 text-lg leading-relaxed mt-4 mb-8">
              Have a question that&rsquo;s not here? Lisa is happy to answer it during your
              free consult — no pressure, no commitment.
            </p>

            <div className="bg-plum rounded-2xl p-6 text-cream">
              <div className="font-script text-2xl text-gold mb-2">Not sure if it&rsquo;s right for you?</div>
              <p className="text-cream/70 text-sm leading-relaxed mb-4">
                The free consult is a no-pressure conversation. Lisa will answer your
                questions and help you decide if a session makes sense.
              </p>
              <a
                href="https://calendly.com/pemfnashville/consult"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-plum font-bold px-6 py-3 rounded-full
                           hover:bg-gold-light transition-colors text-sm"
              >
                Book Free Consult
              </a>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="bg-cream-dark/50 rounded-3xl p-6 sm:p-8 border border-mauve/10">
            {faqs.map((faq) => (
              <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
