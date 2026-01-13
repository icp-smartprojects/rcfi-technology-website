import Head from 'next/head'
import MissionVisionValues from '@/components/about/MissionVisionValues'

export default function MissionVisionPage() {
  return (
    <>
      <Head>
        <title>Mission, Vision & Values - RCFI</title>
        <meta name="description" content="Discover RCFI's mission, vision, and core values" />
      </Head>
      <MissionVisionValues />
    </>
  )
}
