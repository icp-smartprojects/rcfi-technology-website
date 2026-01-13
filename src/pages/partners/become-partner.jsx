import Head from 'next/head'
import BecomePartner from '@/components/partners/BecomePartner'

export default function BecomePartnerPage() {
  return (
    <>
      <Head>
        <title>Become a Partner - RCFI</title>
        <meta name="description" content="Join our partner ecosystem and grow together" />
      </Head>
      <BecomePartner />
    </>
  )
}
