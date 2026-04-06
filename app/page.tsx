import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhatIsPEMF from '@/components/WhatIsPEMF'
import Services from '@/components/Services'
import AboutLisa from '@/components/AboutLisa'
import Testimonials from '@/components/Testimonials'
import Animals from '@/components/Animals'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
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
