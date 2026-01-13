import Head from 'next/head'
import CompanyOverview from '@/components/about/CompanyOverview'

export default function CompanyPage() {
  return (
    <>
      <Head>
        <title>Our Company - RCFI</title>
        <meta name="description" content="Learn about RCFI and our mission to transform digital trust" />
      </Head>
      <CompanyOverview />
    </>
  )
}
