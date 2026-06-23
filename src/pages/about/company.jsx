import SEO from '@/components/common/SEO'
import CompanyOverview from '@/components/about/CompanyOverview'

export default function CompanyPage() {
  return (
    <>
      <SEO
        title="Our Company"
        description="Learn about RCFI and our mission to transform digital trust"
        url="/about/company"
      />
      <CompanyOverview />
    </>
  )
}
