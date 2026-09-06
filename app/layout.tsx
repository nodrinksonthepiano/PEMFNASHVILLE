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
  metadataBase: new URL('https://www.pemfnashville.com'),
  alternates: {
    canonical: '/',
  },
  title: 'PEMF Nashville | In-Home Sessions + Brentwood Office | Lisa Taylor, RN',
  description:
    'PEMF sessions with Lisa Taylor, RN — for muscle and joint comfort, recovery, and relaxation. In-home visits across Nashville, Brentwood, Belle Meade, and Franklin, plus office sessions at Kinnection Clinic in Brentwood. Book a free consult.',
  keywords: [
    'PEMF Nashville',
    'PEMF Brentwood',
    'PEMF recovery Nashville',
    'Kinnection Clinic',
    'in-home PEMF Nashville',
    'mobile wellness Nashville',
    'muscle comfort Nashville',
    'joint stiffness Nashville',
    'equine PEMF Nashville',
    'animal wellness Nashville',
    'Belle Meade wellness',
    'Franklin PEMF',
    'Lisa Taylor RN',
  ],
  openGraph: {
    title: 'PEMF Nashville | In-Home Sessions + Brentwood Office',
    description:
      'PEMF sessions for muscle and joint comfort, recovery, and relaxation. Lisa Taylor, RN — in-home and Kinnection Clinic, Brentwood.',
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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
