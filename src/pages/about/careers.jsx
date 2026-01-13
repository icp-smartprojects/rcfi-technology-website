import CareersPage from '@/components/careers/CareersPage'
import SEO from '@/components/common/SEO'

export default function CareersPageRoute() {
  return (
    <>
      <SEO
        title="Careers at RCFI - Join Our Team"
        description="Explore job opportunities at RCFI Technology. We're hiring talented engineers, product managers, and more."
      />
      <CareersPage />
    </>
  )
}
