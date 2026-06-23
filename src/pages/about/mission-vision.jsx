import SEO from '@/components/common/SEO'
import MissionVisionValues from '@/components/about/MissionVisionValues'

export default function MissionVisionPage() {
  return (
    <>
      <SEO
        title="Mission, Vision & Values"
        description="Discover RCFI's mission, vision, and core values"
        url="/about/mission-vision"
      />
      <MissionVisionValues />
    </>
  )
}
