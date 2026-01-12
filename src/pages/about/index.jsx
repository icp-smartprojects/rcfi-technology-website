import Head from 'next/head'
import Hero from '@/components/about/Hero'
import CompanyOverview from '@/components/about/CompanyOverview'
import MissionVisionValues from '@/components/about/MissionVisionValues'
import Timeline from '@/components/about/Timeline'
import Team from '@/components/about/Team'
import Certifications from '@/components/about/Certifications'
import PartnersEcosystem from '@/components/about/PartnersEcosystem'
import FinalCTA from '@/components/about/FinalCTA'

export default function About() {
  return (
    <>
      <Head>
        <title>About RCFI Technology | Our Mission & Vision</title>
        <meta name="description" content="Learn about RCFI Technology - empowering Africa's digital transformation with trusted, secure, and compliant solutions." />
        <meta name="keywords" content="about RCFI, digital transformation Kenya, trusted solutions, company mission, vision" />
        <meta property="og:title" content="About RCFI Technology" />
        <meta property="og:description" content="Empowering Africa's Digital Transformation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rcfi.co.ke/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://rcfi.co.ke/about" />
      </Head>

      <Hero />
      <CompanyOverview />
      <MissionVisionValues />
      <Timeline />
      <Team />
      <Certifications />
      <PartnersEcosystem />
      <FinalCTA />
    </>
  )
}
