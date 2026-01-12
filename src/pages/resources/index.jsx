import Head from 'next/head'
import Hero from '@/components/resources/Hero'
import ResourceCategories from '@/components/resources/ResourceCategories'
import FeaturedResources from '@/components/resources/FeaturedResources'
import BlogFeed from '@/components/resources/BlogFeed'
import NewsletterSignup from '@/components/resources/NewsletterSignup'

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources | RCFI Technology</title>
        <meta name="description" content="Access valuable resources, whitepapers, case studies, and blog articles about digital transformation." />
        <meta name="keywords" content="resources, blog, whitepapers, case studies, digital transformation guides" />
        <meta property="og:title" content="Resources | RCFI Technology" />
        <meta property="og:description" content="Discover valuable insights and resources for digital transformation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rcfi.co.ke/resources" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://rcfi.co.ke/resources" />
      </Head>

      <Hero />
      <ResourceCategories />
      <FeaturedResources />
      <BlogFeed />
      <NewsletterSignup />
    </>
  )
}
