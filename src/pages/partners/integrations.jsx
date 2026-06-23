import SEO from '@/components/common/SEO'
import IntegrationEcosystem from '@/components/partners/IntegrationEcosystem'

export default function IntegrationsPage() {
  return (
    <>
      <SEO
        title="Integrations"
        description="Explore RCFI's integration ecosystem and connected services"
        url="/partners/integrations"
      />
      <IntegrationEcosystem />
    </>
  )
}
