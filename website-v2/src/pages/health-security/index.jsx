import Link from 'next/link'
import SEO from '@/components/layout/SEO'
import Section from '@/components/layout/Section'
import { bg, images } from '@/lib/theme'
import { MEET_URL } from '@/lib/site'

const audiences = [
  {
    title: 'Health-tech vendors',
    subtitle: 'Prove your platform is secure',
    body: 'You have built an EMR, telemedicine app, lab system, or health API. Buyers and regulators want assurance before procurement. We help you demonstrate security and privacy readiness — so you can sell with confidence.',
  },
  {
    title: 'Hospitals & clinics',
    subtitle: 'Protect the systems your staff rely on',
    body: 'You run clinical systems that hold patient records, lab results, and billing data. We help you understand your security posture, close gaps, and align with Kenya\'s Data Protection Act.',
  },
  {
    title: 'Public health programmes',
    subtitle: 'Scale digital health with confidence',
    body: 'National registries, HMIS deployments, and cross-facility data exchange need security built in from day one — not bolted on after a breach.',
  },
  {
    title: 'Developers & integrators',
    subtitle: 'Build secure from the start',
    body: 'If you integrate with FHIR APIs, cloud services, or third-party health platforms, we help you validate configurations, access controls, and data flows before go-live.',
  },
]

const offerings = [
  {
    n: '01',
    title: 'Security & Privacy Assessment',
    body: 'A structured review of your platform\'s security controls, data handling practices, and privacy alignment — tailored to how your system is deployed.',
    best: 'Health-tech vendors preparing for procurement or scale-up.',
  },
  {
    n: '02',
    title: 'Cloud & Infrastructure Security Review',
    body: 'Validation of hosting and configuration — access controls, encryption, network boundaries, backup, and shared-responsibility alignment.',
    best: 'SaaS health platforms and API-first products.',
  },
  {
    n: '03',
    title: 'Application & API Security Testing',
    body: 'Hands-on testing of web apps, mobile apps, and APIs — authentication, authorisation, session management, and data exposure.',
    best: 'Telemedicine apps, patient portals, and health APIs.',
  },
  {
    n: '04',
    title: 'Privacy & Data Protection Alignment',
    body: 'Review of consent flows, data retention, access logging, breach readiness, and alignment with the Kenya Data Protection Act 2019.',
    best: 'Any platform processing identifiable patient or health data.',
  },
  {
    n: '05',
    title: 'Clinical Workflow & Access Review',
    body: 'Assessment of role-based access, clinical user journeys, and data segregation — ensuring the right people see the right data.',
    best: 'EMRs, hospital systems, and multi-facility deployments.',
  },
  {
    n: '06',
    title: 'Ongoing Security Monitoring (advisory)',
    body: 'Post-assessment advisory, re-testing schedules, and security posture tracking as your platform evolves.',
    best: 'Vendors and programmes with active development roadmaps.',
  },
]

const steps = [
  { title: 'Discovery call', body: 'We learn about your platform — what it does, who uses it, how it is deployed, and what assurance you need.' },
  { title: 'Scoping', body: 'Together we define scope — which environments, integrations, and security areas matter most.' },
  { title: 'Assessment & testing', body: 'Our team conducts the agreed review. For laboratory-grade testing, we work with IntelliSOFT and accredited partners.' },
  { title: 'Findings & remediation', body: 'You receive a clear, prioritised report with practical guidance on what matters and what blocks go-live.' },
  { title: 'Re-test & assurance', body: 'After fixes, we can re-test to confirm closure and offer ongoing advisory for long-running programmes.' },
]

const faqs = [
  {
    q: 'Who is this service for?',
    a: 'Health-tech vendors, hospitals, clinics, NGOs running health programmes, government health agencies, and integrators building digital health systems in Kenya and East Africa.',
  },
  {
    q: 'Do you replace our own security team?',
    a: 'No. We complement your team with independent assurance, expert review, and laboratory testing.',
  },
  {
    q: 'What types of systems do you assess?',
    a: 'EMRs, telemedicine platforms, patient portals, health APIs and FHIR integrations, mobile health apps, laboratory systems, health registries, and cloud-hosted health data platforms.',
  },
  {
    q: 'How is this different from a generic IT security audit?',
    a: 'Health systems carry identifiable patient data and clinical workflows. Our assessments are scoped for digital health — not generic corporate IT.',
  },
  {
    q: 'Do you work with startups as well as large programmes?',
    a: 'Yes — from early-stage health-tech startups to national programmes deploying at scale.',
  },
]

export default function HealthSecurityPage() {
  return (
    <>
      <SEO
        title="Health Security & Digital Health Assurance | RCFI Technology"
        description="RCFI helps health-tech vendors and health organisations secure EMRs, telemedicine platforms, health APIs, and patient data — with independent assurance and East Africa's leading digital health expertise."
      />

      <Section background={bg.hero(images.team)} className="relative overflow-hidden py-[100px] text-white md:py-[120px]">
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="eyebrow text-green-mint">Health Security</span>
          <h1 className="mt-4 font-display text-[42px] font-extrabold leading-tight sm:text-[56px]">
            Secure the systems that deliver care
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Independent security and privacy assurance for digital health platforms across East Africa —
            from EMRs and telemedicine to national health registries and mobile health apps.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Talk to our team</Link>
            <a href={MEET_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Book a Meeting
            </a>
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-navy">Health data is sensitive. Trust must be earned.</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Patients, clinicians, regulators, and procurement teams need evidence that an EMR, telemedicine platform,
            health API, or mobile app is built securely and can operate reliably in a clinical environment.
            A breach in health systems erodes patient confidence and disrupts care — security assurance is no longer optional.
          </p>
        </div>
      </Section>

      <Section className="py-20 bg-canvas border-y border-line">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow">Who we serve</span>
          <h2 className="mt-3 font-display text-[34px] font-bold text-navy">Built for every stage of digital health</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {audiences.map((item) => (
              <div key={item.title} className="surface-card p-8">
                <p className="text-xs font-bold uppercase tracking-wide text-green">{item.title}</p>
                <h3 className="mt-2 text-xl font-bold text-navy">{item.subtitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow">What we offer</span>
          <h2 className="mt-3 font-display text-[34px] font-bold text-navy">End-to-end health security assurance</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {offerings.map((item) => (
              <div key={item.title} className="flex gap-5 rounded-2xl border border-line bg-white p-6">
                <span className="font-display text-2xl font-bold text-green/30">{item.n}</span>
                <div>
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                  <p className="mt-3 text-xs font-semibold text-green">Best for: {item.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-canvas">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-3 font-display text-[34px] font-bold text-navy">From discovery to ongoing assurance</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {steps.map((step, i) => (
              <div key={step.title} className="rounded-xl border border-line bg-white p-5">
                <span className="text-xs font-bold text-green">Step {i + 1}</span>
                <h3 className="mt-2 text-sm font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-[#06111a] text-white">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow text-green-mint">Our digital health partner</span>
          <h2 className="mt-4 font-display text-3xl font-bold">
            Built with IntelliSOFT — 15+ years in East African digital health
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75">
            RCFI&apos;s health security practice is strengthened by a strategic partnership with{' '}
            <a href="https://www.intellisoftkenya.com/" target="_blank" rel="noopener noreferrer" className="text-green-mint underline">
              IntelliSOFT Consulting Ltd
            </a>
            . Together we combine cybersecurity assurance with deep clinical systems expertise — from platform build to secure, clinical-grade operation.
          </p>
        </div>
      </Section>

      <Section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3 font-display text-[34px] font-bold text-navy">Common questions</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-xl border border-line bg-canvas p-5">
                <summary className="cursor-pointer font-semibold text-navy list-none flex justify-between gap-4">
                  {item.q}
                  <span className="text-green group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-canvas border-t border-line">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-navy">Ready to secure your health platform?</h2>
          <p className="mt-4 text-ink-muted">
            Whether you are preparing for procurement, responding to a regulator, or want to know your platform is safe — talk to the RCFI team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={MEET_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Meeting</a>
            <Link href="/contact" className="btn-navy">Send a message</Link>
          </div>
        </div>
      </Section>
    </>
  )
}
