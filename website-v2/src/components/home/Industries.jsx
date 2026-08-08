import Link from 'next/link'
import Section from '@/components/layout/Section'
import { bg, images } from '@/lib/theme'

const industries = [
  {
    title: 'Government & Public Sector',
    body: 'Modernize service delivery, ensure compliance, and build citizen trust.',
    meta: '47 counties served',
  },
  {
    title: 'Financial Services',
    body: 'Secure onboarding, digital signatures, and compliance automation.',
    meta: 'Banks, SACCOs, insurance',
  },
  {
    title: 'NGOs & Civil Society',
    body: 'Grant management, beneficiary tracking, and impact measurement.',
    meta: '150+ organizations',
  },
  {
    title: 'SMEs & Enterprises',
    body: 'Business management, invoicing, and digital transformation.',
    meta: 'Freelancers to corporates',
  },
  {
    title: 'Legal & Compliance',
    body: 'Legally binding signatures, contract management, court filings.',
    meta: 'Law firms & advocates',
  },
  {
    title: 'Health Security & Digital Health',
    body: 'EMRs, hospital systems, telemedicine, patient registries, and health apps — secured, compliant, and ready for clinical environments.',
    meta: 'Vendors · hospitals · national programmes',
  },
]

export default function Industries() {
  return (
    <Section background={bg.duskSoft(images.cityWork)} className="py-[88px]">
      <div className="flex flex-col gap-10">
        <div className="band-heading flex flex-col gap-2.5">
          <span className="eyebrow">Industries We Serve</span>
          <h2 className="heading-display m-0 text-[38px]">Tailored solutions for every sector</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <div
              key={item.title}
              className="surface-card flex flex-col gap-2 p-[26px]"
            >
              <h3 className="m-0 font-display text-[17px] font-bold text-navy">{item.title}</h3>
              <p className="m-0 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              <span className="mt-1 text-xs font-bold text-green">{item.meta}</span>
            </div>
          ))}
          <div className="flex flex-col justify-center gap-2.5 rounded-xl bg-[#2f7652] p-[26px]">
            <h3 className="m-0 font-display text-[17px] font-bold text-white">
              Don&apos;t see your industry?
            </h3>
            <Link href="/contact" className="text-sm font-bold text-green-mint no-underline hover:text-white">
              Talk to us about custom solutions →
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
