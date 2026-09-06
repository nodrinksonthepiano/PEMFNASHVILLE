import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhereToFindLisa from '@/components/WhereToFindLisa'
import WhatIsPEMF from '@/components/WhatIsPEMF'
import Services from '@/components/Services'
import AboutLisa from '@/components/AboutLisa'
import Testimonials from '@/components/Testimonials'
import Animals from '@/components/Animals'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.pemfnashville.com/#website',
      url: 'https://www.pemfnashville.com/',
      name: 'PEMF Nashville',
      publisher: {
        '@id': 'https://www.pemfnashville.com/#organization',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.pemfnashville.com/#organization',
      name: 'PEMF Nashville',
      url: 'https://www.pemfnashville.com/',
      logo: 'https://www.pemfnashville.com/images/PEMFNASHVILLELOGO42026.jpg',
      telephone: '+1-615-669-2391',
      email: 'lisa@pemfnashville.com',
      description:
        'Nurse-led PEMF wellness sessions for muscle and joint comfort, workout recovery, and relaxation, available in-home across Nashville and at Kinnection Clinic in Brentwood.',
      sameAs: [
        'https://www.instagram.com/pemfnashville/',
        'https://www.facebook.com/pemfnashville',
      ],
      areaServed: [
        'Nashville, TN',
        'Brentwood, TN',
        'Belle Meade, TN',
        'Green Hills, TN',
        'Franklin, TN',
        'Bellevue, TN',
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <Header />
      <main>
        <Hero />
        <WhereToFindLisa />
        <WhatIsPEMF />
        <Services />
        <AboutLisa />
        <Testimonials />
        <Animals />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
