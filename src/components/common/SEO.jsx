import Head from 'next/head'

export default function SEO({ 
  title, 
  description, 
  image, 
  url,
  type = 'website',
  children 
}) {
  const siteName = 'RCFI Technology'
  const fullTitle = title ? `${title} | ${siteName}` : siteName

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      {children}
    </Head>
  )
}
