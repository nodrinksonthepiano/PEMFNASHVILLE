import type { Metadata } from 'next'
import { Playfair_Display, Inter, Dancing_Script } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PEMF Nashville | In-Home Wellness Sessions | Lisa Taylor, RN',
  description:
    'Mobile PEMF wellness sessions for muscle comfort, recovery support, and relaxation in Nashville, TN. Lisa Taylor, Registered Nurse, comes to your home. Book a free consult today.',
  keywords: [
    'PEMF Nashville',
    'mobile wellness Nashville',
    'muscle comfort Nashville',
    'recovery support Nashville',
    'in-home wellness Nashville',
    'stress relief Nashville',
    'equine PEMF Nashville',
    'animal wellness Nashville',
    'Lisa Taylor RN',
  ],
  openGraph: {
    title: 'PEMF Nashville | In-Home Wellness Sessions',
    description:
      'Mobile PEMF wellness sessions for people & animals in Nashville, TN. Lisa Taylor, RN comes to your home.',
    siteName: 'PEMF Nashville',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${dancing.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
