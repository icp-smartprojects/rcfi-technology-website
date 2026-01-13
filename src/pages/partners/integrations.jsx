import Head from 'next/head'
import IntegrationEcosystem from '@/components/partners/IntegrationEcosystem'

export default function IntegrationsPage() {
  return (
    <>
      <Head>
        <title>Integrations - RCFI</title>
        <meta name="description" content="Explore RCFI's integration ecosystem and connected services" />
      </Head>
      <IntegrationEcosystem />
    </>
  )
}
