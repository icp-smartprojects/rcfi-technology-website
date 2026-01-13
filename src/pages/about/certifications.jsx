import Head from 'next/head'
import Certifications from '@/components/about/Certifications'

export default function CertificationsPage() {
  return (
    <>
      <Head>
        <title>Certifications - RCFI</title>
        <meta name="description" content="RCFI's industry certifications and compliance standards" />
      </Head>
      <Certifications />
    </>
  )
}
