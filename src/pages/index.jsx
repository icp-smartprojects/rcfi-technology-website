import Head from 'next/head'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import ProductsOverview from '@/components/home/ProductsOverview'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Industries from '@/components/home/Industries'
import PlatformHighlights from '@/components/home/PlatformHighlights'
import SuccessMetrics from '@/components/home/SuccessMetrics'
import Testimonials from '@/components/home/Testimonials'
import LatestNews from '@/components/home/LatestNews'
import FinalCTA from '@/components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <Head>
        <title>RCFI Technology | Empowering Africa's Digital Transformation</title>
        <meta name="description" content="Trusted digital trust, governance, and business management solutions for Kenya and East Africa. ISO 27001 Certified, CAK Licensed, Kenya DPA Compliant." />
        <meta name="keywords" content="digital signatures Kenya, e-KYC, governance platform, business management, DigiSign, Elano, Prezio, RCFI" />
        <meta property="og:title" content="RCFI Technology | Digital Transformation Solutions" />
        <meta property="og:description" content="Empowering Africa's Digital Transformation with trusted solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rcfi.co.ke" />
        <meta property="og:image" content="https://rcfi.co.ke/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://rcfi.co.ke" />
      </Head>

      <Hero />
      <TrustBar />
      <ProductsOverview />
      <WhyChooseUs />
      <Industries />
      <PlatformHighlights />
      <SuccessMetrics />
      <Testimonials />
      <LatestNews />
      <FinalCTA />
    </>
  )
}