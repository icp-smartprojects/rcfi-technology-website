import Head from 'next/head'

export default function SEO({
  title = 'RCFI Technology — Digital Trust, PKI as a Service & Governance Solutions',
  description = 'RCFI Technology delivers digital signatures, PKI as a Service, e-KYC, governance and business management software in Nairobi, Kenya, East Africa and across Africa. ISO 27001 certified, CAK licensed, Kenya DPA compliant.',
}) {
  const fullTitle = title.includes('RCFI')
    ? title
    : `${title} | RCFI Technology`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="geo.region" content="KE" />
      <meta name="geo.placename" content="Nairobi, Kenya" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=no" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_KE" />
      <meta name="theme-color" content="#0A3D62" />
      <link rel="icon" href="/images/logo-green.png" />
    </Head>
  )
}
