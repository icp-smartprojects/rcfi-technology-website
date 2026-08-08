import Link from 'next/link'
import SEO from '@/components/layout/SEO'
import Section from '@/components/layout/Section'
import Cinematic from '@/components/home/Cinematic'
import { bg, images, scenes } from '@/lib/theme'
import { MEET_URL } from '@/lib/site'

export default function PrezioPage() {
  return (
    <>
      <SEO
        title="Prezio — Intelligent Business Automation"
        description="Automate approvals, workflows, documents, and operational processes with Prezio."
      />

      <Section background={bg.hero(images.analytics)} className="relative overflow-hidden py-[120px] text-white">

  <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

    {/* LEFT CONTENT */}
    <div className="relative z-10 max-w-[620px]">

      <h1 className="m-0 font-display text-[62px] font-black leading-[0.95] lg:text-[74px]">

        Less
        <br />
        process.
        <br />
        <span className="text-[#235e43]">
          More progress.
        </span>

      </h1>

      <p className="mt-8 max-w-[560px] text-lg leading-8 text-white/80">
        Prezio helps organizations automate approvals, workflows,
        documents and operations from one intelligent platform.
      </p>

    <div className="mt-10 flex flex-wrap gap-4">

  <a
    href={MEET_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-[#235e43] px-8 py-4 font-semibold text-white shadow-lg shadow-[#235e43]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2f7652] no-underline"
  >
    Book a Demo
  </a>

  <Link
    href="/products"
    className="rounded-full border border-[#235e43] bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-[#235e43] hover:border-[#235e43]"
  >
    Explore Platform
  </Link>

</div>

 

    </div>

    {/* RIGHT VISUAL */}

    <div className="relative hidden lg:flex items-center justify-center">

      <div className="relative w-[420px] rounded-[36px] border border-white/15 bg-white/10 p-8 backdrop-blur-xl">

        <div className="mb-8">

          <span className="text-sm uppercase tracking-[0.18em] text-white/60">
            LIVE WORKFLOW
          </span>

          <h3 className="mt-2 font-display text-2xl font-bold">
            Procurement Approval
          </h3>

        </div>

        {[
          {
            title: "Request Submitted",
            status: "Completed",
          },
          {
            title: "Finance Review",
            status: "Approved",
          },
          {
            title: "Director Approval",
            status: "In Progress",
          },
          {
            title: "Completed",
            status: "Pending",
          },
        ].map((step, index) => (

          <div
            key={step.title}
            className="relative flex gap-5 pb-8 last:pb-0"
          >

            <div className="relative flex flex-col items-center">

              <div className="h-4 w-4 rounded-full bg-[#4ADE80]" />

              {index !== 3 && (
                <div className="mt-2 h-14 w-[2px] bg-white/20" />
              )}

            </div>

            <div className="flex-1 rounded-2xl bg-white/5 p-4">

              <div className="flex items-center justify-between">

                <span className="font-semibold">
                  {step.title}
                </span>

                <span className="rounded-full bg-[#235e43] px-3 py-1 text-xs">
                  {step.status}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="absolute -right-8 top-12 rounded-full bg-[#235e43] px-4 py-2 text-sm shadow-xl">
        Approved ✓
      </div>

      <div className="absolute -left-6 bottom-16 rounded-full bg-white px-4 py-2 text-sm text-[#235e43] shadow-xl">
        80% Faster
      </div>

    </div>

  </div>

</Section>


      <Section className="py-[110px]"style={{ background: "#F5FAF7" }}>
  <div className="flex flex-col gap-16">

    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-[#EAF5EF] px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#235e43]">
        How It Works
      </span>

      <h2 className="mt-6 font-display text-[52px] font-black leading-[1.08] text-[#163728]">
        From request
        <span className="text-[#235e43]"> to completion.</span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5E6D64]">
        Prezio intelligently routes every request through the right people,
        helping your teams move faster while maintaining complete visibility
        across every workflow.
      </p>

    </div>

    {/* Steps */}
   <div className="grid gap-8 lg:grid-cols-3">
  {[
    {
      n: "01",
      t: "Submit Request",
      b: "Create requests, approvals or documents in just a few clicks.",
    },
    {
      n: "02",
      t: "Automatic Routing",
      b: "Prezio intelligently routes every request to the right people automatically.",
    },
    {
      n: "03",
      t: "Complete Faster",
      b: "Track every workflow in real time until every task is completed.",
    },
  ].map((step) => (
    <div
      key={step.n}
      className="group relative overflow-hidden rounded-[30px] border border-[#DCE8E1] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#235e43] hover:shadow-[0_25px_60px_rgba(35,94,67,.10)]"
    >
      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#235e43] via-[#2F7652] to-[#235e43]" />

      {/* Soft Corner Glow */}
      <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#235e43]/5 blur-3xl transition-all duration-500 group-hover:bg-[#235e43]/10" />

      {/* Step Label */}
      <div className="relative mb-8 flex items-center gap-3">
        <div className="h-2.5 w-2.5 rounded-full bg-[#235e43]" />

        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#235e43]">
          STEP {step.n}
        </span>
      </div>

      {/* Title */}
      <h3 className="relative font-display text-[28px] font-bold leading-tight text-black">
        {step.t}
      </h3>

      {/* Description */}
      <p className="relative mt-5 text-[15px] leading-8 text-[#66756C]">
        {step.b}
      </p>
    </div>
  ))}
</div>

  </div>
</Section>


<Section background={bg.darkPanel(images.cityWork)} className="py-[88px] text-white">
  <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

    <div className="flex flex-col gap-4">
      <span className="eyebrow-light">Operations Hub</span>

      <h2 className="m-0 font-display text-[36px] font-extrabold text-pretty">
        Everything in one place
      </h2>

      <p className="m-0 text-base leading-relaxed text-ink-pale">
        Replace spreadsheets, endless emails, and disconnected systems with one centralized workspace built to manage workflows, approvals, documents, and business operations.
      </p>

      <div className="mt-2 flex flex-col gap-4">
        {[
          {
            t: "Workflow automation",
            b: "Eliminate repetitive manual tasks and speed up execution.",
          },
          {
            t: "Real-time insights",
            b: "Monitor operational performance with complete visibility.",
          },
          {
            t: "Approval management",
            b: "Keep requests moving and avoid approval bottlenecks.",
          },
        ].map((item) => (
          <div
            key={item.t}
            className="rounded-2xl border border-white/15 bg-white/10 px-6 py-5 backdrop-blur-sm transition duration-300 hover:bg-white/15"
          >
            <h3 className="font-display text-lg font-bold">
              {item.t}
            </h3>

            <p className="mt-2 text-sm leading-7 text-ink-pale">
              {item.b}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_30px_70px_rgba(0,0,0,.28)]">

      <div className="border-b border-[#EEF2F4] px-7 py-6">

        <div className="mb-2 flex items-center gap-2">

          <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E] animate-pulse" />

          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#235e43]">
            LIVE
          </span>

        </div>

        <h3 className="font-display text-2xl font-bold text-black">
          Operations Dashboard
        </h3>

      </div>

      <div className="space-y-7 p-7">

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-[#F7FAF8] p-5">

            <span className="text-[11px] font-bold uppercase tracking-wide text-[#7C8783]">
              ACTIVE PROCESSES
            </span>

            <div className="mt-2 font-display text-[34px] font-black text-black">
              324
            </div>

          </div>

          <div className="rounded-2xl bg-[#F7FAF8] p-5">

            <span className="text-[11px] font-bold uppercase tracking-wide text-[#7C8783]">
              COMPLETED
            </span>

            <div className="mt-2 font-display text-[34px] font-black text-[#235e43]">
              98%
            </div>

          </div>

        </div>

        <div className="space-y-6">

          {[
            {
              label: "Procurement approval",
              status: "Finance Review",
              w: "72%",
            },
            {
              label: "Leave request",
              status: "Approved",
              w: "100%",
            },
            {
              label: "Policy sign-off",
              status: "CEO Review",
              w: "40%",
            },
          ].map((row) => (
            <div key={row.label}>

              <div className="mb-3 flex items-center justify-between">

                <span className="font-semibold text-black">
                  {row.label}
                </span>

                <span className="rounded-full bg-[#EAF5EF] px-3 py-1 text-xs font-semibold text-[#235e43]">
                  {row.status}
                </span>

              </div>

              <div className="h-2 rounded-full bg-[#E6ECE8]">

                <div
                  className="h-full rounded-full bg-[#235e43]"
                  style={{ width: row.w }}
                />

              </div>

            </div>
          ))}

        </div>

        <div className="rounded-2xl border border-[#EDF2EF] bg-[#F8FBF9] p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-[#68756F]">
                Average approval time
              </p>

              <h4 className="mt-1 font-display text-2xl font-bold text-black">
                2.4 Hours
              </h4>

            </div>

            <div className="rounded-full bg-[#235e43] px-4 py-2 text-sm font-semibold text-white">
              80% Faster
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</Section>



<Section className="border-y border-[#E7ECE9] bg-white py-[100px]">
  <div className="flex flex-col gap-16">

    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-[#EAF5EF] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#235e43]">
        Capabilities
      </span>

      <h2 className="mt-5 font-display text-[48px] font-extrabold leading-tight text-black">
        One platform.
        <br />
        Endless possibilities.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#66756C]">
        Simplify operations with one intelligent platform designed to automate work,
        improve collaboration and connect every business process.
      </p>

    </div>

    {/* Layout */}
    <div className="grid gap-6 lg:grid-cols-2">

      {/* Documents */}
      <div className="group relative overflow-hidden rounded-[32px] bg-[#235e43] p-10 text-white transition duration-500 hover:-translate-y-2">

        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
          Documents
        </span>

        <h3 className="mt-6 font-display text-4xl font-bold">
          Secure document management.
        </h3>

        <p className="mt-6 max-w-lg leading-8 text-white/85">
          Keep policies, contracts, SOPs, compliance records and business documents
          securely organized in one place.
        </p>

      </div>

      {/* Automation */}
      <div className="group rounded-[32px] border border-[#E7ECE9] bg-[#F8FAF9] p-10 transition duration-500 hover:-translate-y-2 hover:border-[#235e43] hover:shadow-xl">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#235e43]">
          Automation
        </span>

        <h3 className="mt-6 font-display text-4xl font-bold text-black">
          Eliminate repetitive work.
        </h3>

        <p className="mt-6 leading-8 text-[#66756C]">
          Automate approvals, reminders and recurring business processes to save
          valuable time.
        </p>

      </div>

      {/* Teams */}
      <div className="group rounded-[28px] border border-[#E7ECE9] bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-lg">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#235e43]">
          Teams
        </span>

        <h3 className="mt-4 font-display text-2xl font-bold text-black">
          Work together.
        </h3>

        <p className="mt-4 leading-7 text-[#66756C]">
          Bring departments together with transparent workflows and shared
          accountability.
        </p>

      </div>

      {/* Integrations */}
      <div className="group rounded-[28px] border border-[#E7ECE9] bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-lg">

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#235e43]">
          Integrations
        </span>

        <h3 className="mt-4 font-display text-2xl font-bold text-black">
          Connect your systems.
        </h3>

        <p className="mt-4 leading-7 text-[#66756C]">
          Integrate seamlessly with your existing tools to create one connected
          digital workspace.
        </p>

      </div>

    </div>

  </div>
</Section>


      <Section background={scenes.cta()} className="py-[88px] text-center">
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-[18px]">
          <div className="band-heading flex flex-col items-center gap-3">
            <h2 className="heading-display m-0 text-[36px]">Transform your business processes</h2>
            <p className="band-lead m-0 text-base leading-relaxed">
              Discover how Prezio can automate workflows, accelerate approvals, and provide complete operational visibility.
            </p>
          </div>
          <a href={MEET_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Demo</a>
        </div>
      </Section>
    </>
  )
}
