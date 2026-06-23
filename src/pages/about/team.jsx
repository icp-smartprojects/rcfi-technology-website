import SEO from '@/components/common/SEO'
import Team from '@/components/about/Team'

export default function TeamPage() {
  return (
    <>
      <SEO
        title="Our Team"
        description="Meet the talented team behind RCFI's innovation"
        url="/about/team"
      />
      <Team />
    </>
  )
}
