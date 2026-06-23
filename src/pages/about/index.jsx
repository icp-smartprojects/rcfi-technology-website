import SEO from '@/components/common/SEO'
import Hero from '@/components/about/Hero'
import CompanyOverview from '@/components/about/CompanyOverview'
import MissionVisionValues from '@/components/about/MissionVisionValues'
import Timeline from '@/components/about/Timeline'
import Team from '@/components/about/Team'
import Certifications from '@/components/about/Certifications'
import PartnersEcosystem from '@/components/about/PartnersEcosystem'
import FinalCTA from '@/components/about/FinalCTA'

export default function About() {
  return (
    <>
      <SEO
        title="Our Mission & Vision"
        description="Learn about RCFI Technology - empowering Africa's digital transformation with trusted, secure, and compliant solutions."
        keywords="about RCFI, digital transformation Kenya, trusted solutions, company mission, vision"
        url="/about"
      />

      <Hero />
      <CompanyOverview />
      <MissionVisionValues />
      <Timeline />
      <Team />
      <Certifications />
      <PartnersEcosystem />
      <FinalCTA />
    </>
  )
}
