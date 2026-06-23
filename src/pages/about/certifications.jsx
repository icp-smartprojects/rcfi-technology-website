import SEO from '@/components/common/SEO'
import Certifications from '@/components/about/Certifications'

export default function CertificationsPage() {
  return (
    <>
      <SEO
        title="Certifications"
        description="RCFI's industry certifications and compliance standards"
        url="/about/certifications"
      />
      <Certifications />
    </>
  )
}
