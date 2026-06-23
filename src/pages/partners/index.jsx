import SEO from '@/components/common/SEO'
import Hero from '@/components/partners/Hero'
import TechnologyPartners from '@/components/partners/TechnologyPartners'
import IntegrationEcosystem from '@/components/partners/IntegrationEcosystem'
import BecomePartner from '@/components/partners/BecomePartner'

export default function Partners() {
  return (
    <>
      <SEO
        title="Partners"
        description="Explore RCFI's partner ecosystem and technology integrations. Join our growing network of trusted partners."
        keywords="partners, integrations, ecosystem, partnerships, RCFI"
        url="/partners"
      />

      <Hero />
      <TechnologyPartners />
      <IntegrationEcosystem />
      <BecomePartner />
    </>
  )
}
