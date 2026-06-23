import CareersPage from '@/components/careers/CareersPage'
import SEO from '@/components/common/SEO'

export default function CareersPageRoute() {
  return (
    <>
      <SEO
        title="Careers at RCFI"
        description="Explore job opportunities at RCFI Technology. We're hiring talented engineers, product managers, and more."
        url="/about/careers"
      />
      <CareersPage />
    </>
  )
}
