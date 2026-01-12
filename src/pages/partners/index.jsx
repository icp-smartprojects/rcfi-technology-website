import Head from 'next/head'
import Hero from '@/components/partners/Hero'
import TechnologyPartners from '@/components/partners/TechnologyPartners'
import IntegrationEcosystem from '@/components/partners/IntegrationEcosystem'
import BecomePartner from '@/components/partners/BecomePartner'

export default function Partners() {
  return (
    <>
      <Head>
        <title>Partners | RCFI Technology</title>
        <meta name="description" content="Explore RCFI's partner ecosystem and technology integrations. Join our growing network of trusted partners." />
        <meta name="keywords" content="partners, integrations, ecosystem, partnerships, RCFI" />
        <meta property="og:title" content="Partners | RCFI Technology" />
        <meta property="og:description" content="Explore our partner ecosystem and technology integrations" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rcfi.co.ke/partners" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://rcfi.co.ke/partners" />
      </Head>

      <Hero />
      <TechnologyPartners />
      <IntegrationEcosystem />
      <BecomePartner />
    </>
  )
}
