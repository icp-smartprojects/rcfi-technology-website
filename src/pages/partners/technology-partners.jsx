import SEO from '@/components/common/SEO'
import TechnologyPartners from '@/components/partners/TechnologyPartners'

export default function TechnologyPartnersPage() {
  return (
    <>
      <SEO
        title="Technology Partners"
        description="Our trusted technology partners and ecosystem"
        url="/partners/technology-partners"
      />
      <TechnologyPartners />
    </>
  )
}
