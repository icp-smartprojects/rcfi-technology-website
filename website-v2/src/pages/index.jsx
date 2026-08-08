import SEO from '@/components/layout/SEO'
import Hero from '@/components/home/Hero'
import Partners from '@/components/home/Partners'
import Products from '@/components/home/Products'
import WhyRCFI from '@/components/home/WhyRCFI'
import Cinematic from '@/components/home/Cinematic'
import Services from '@/components/home/Services'
import Industries from '@/components/home/Industries'
import Impact from '@/components/home/Impact'
import FinalCTA from '@/components/home/FinalCTA'

export default function HomePage() {
  return (
    <>
      <SEO title="RCFI Technology — Digital Trust, PKI as a Service & Governance Solutions | Nairobi, Kenya, East Africa" />
      <Hero />
      <Partners />
      <Products />
      <WhyRCFI />
      <Cinematic />
      <Services />
      <Industries />
      <Impact />
      <FinalCTA />
    </>
  )
}
