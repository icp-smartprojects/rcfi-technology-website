import Head from 'next/head'
import TechnologyPartners from '@/components/partners/TechnologyPartners'

export default function TechnologyPartnersPage() {
  return (
    <>
      <Head>
        <title>Technology Partners - RCFI</title>
        <meta name="description" content="Our trusted technology partners and ecosystem" />
      </Head>
      <TechnologyPartners />
    </>
  )
}
