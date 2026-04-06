import Image from 'next/image'
import { siteConfig } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="bg-plum-dark border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/PEMFNASHVILLELOGO42026.jpg"
                alt="PEMF Nashville"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <div className="text-cream font-serif font-bold text-lg leading-none">PEMF</div>
                <div className="text-gold font-script text-xl">Nashville</div>
              </div>
            </div>
            <p className="text-cream/45 text-sm leading-relaxed max-w-xs">
              Mobile wellness sessions for people &amp; animals in Nashville, TN.
              Delivered to your home by Lisa Taylor, RN.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-cream/50 text-sm">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-gold transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.emailHref} className="hover:text-gold transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>Nashville, TN &amp; surrounding areas</li>
            </ul>
          </div>

          {/* Book */}
          <div>
            <h4 className="text-cream font-semibold text-sm mb-4 uppercase tracking-wider">Book</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  Free Consult →
                </a>
              </li>
              <li>
                <a href={siteConfig.smsHref} className="text-cream/50 hover:text-gold transition-colors">
                  Text to Book
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.venmo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/50 hover:text-gold transition-colors"
                >
                  Pay via Venmo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/10 pt-8 space-y-4">
          {/* Legal disclaimer */}
          <p className="text-cream/25 text-xs leading-relaxed max-w-3xl">
            <strong className="text-cream/35">Disclaimer:</strong> PEMF sessions offered by PEMF Nashville are
            wellness services, not medical treatments. These sessions are not intended to diagnose, treat,
            cure, or prevent any disease or medical condition. Results may vary. Individual experiences differ.
            Please consult your physician regarding any medical concerns before booking.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-cream/25 text-xs">
              © {new Date().getFullYear()} PEMF Nashville · Lisa Taylor, RN · Nashville, TN
            </p>
            <div className="flex gap-4 text-cream/25 text-xs">
              <a href="/privacy" className="hover:text-cream/50 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-cream/50 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
