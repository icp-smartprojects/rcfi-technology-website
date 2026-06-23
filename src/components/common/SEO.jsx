import Head from 'next/head'

export default function SEO({
  title,
  description,
  image,
  url,
  type = 'website',
  keywords,
  noIndex = false,
  schema,
  children 
}) {
  const siteName = 'RCFI Technology'
  const siteUrl = 'https://rcfi.co.ke'
  const fallbackImage = `${siteUrl}/images/og-image.jpg`
  const absoluteImage = image?.startsWith('http') ? image : (image ? `${siteUrl}${image}` : fallbackImage)
  const absoluteUrl = url?.startsWith('http') ? url : (url ? `${siteUrl}${url}` : siteUrl)
  const fullTitle = title ? `${title} | ${siteName}` : siteName

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_KE" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <link rel="canonical" href={absoluteUrl} />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      {children}
    </Head>
  )
}
