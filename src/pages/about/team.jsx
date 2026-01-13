import Head from 'next/head'
import Team from '@/components/about/Team'

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Our Team - RCFI</title>
        <meta name="description" content="Meet the talented team behind RCFI's innovation" />
      </Head>
      <Team />
    </>
  )
}
