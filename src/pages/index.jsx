import SEO from '@/components/common/SEO'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import ProductsOverview from '@/components/home/ProductsOverview'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Industries from '@/components/home/Industries'
import PlatformHighlights from '@/components/home/PlatformHighlights'
import SuccessMetrics from '@/components/home/SuccessMetrics'
import LatestNews from '@/components/home/LatestNews'
import FinalCTA from '@/components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <SEO
        title="Empowering Africa's Digital Transformation"
        description="Trusted digital trust, governance, and business management solutions for Kenya and East Africa. ISO 27001 Certified, CAK Licensed, Kenya DPA Compliant."
        keywords="digital signatures Kenya, e-KYC, governance platform, business management, CertySign, Elano, Prezio, RCFI"
        url="/"
        image="/images/og-image.jpg"
      />

      <Hero />
      <TrustBar />
      <ProductsOverview />
      <WhyChooseUs />
      <Industries />
      <PlatformHighlights />
      <SuccessMetrics />
      <LatestNews />
      <FinalCTA />
    </>
  )
}