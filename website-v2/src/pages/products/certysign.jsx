import {
  Pen,
  ShieldCheck,
  LockKeyhole,
} from "lucide-react";
import Link from 'next/link'
import Image from "next/image";

import SEO from '@/components/layout/SEO'
import Section from '@/components/layout/Section'
import Cinematic from '@/components/home/Cinematic'
import { bg, images, scenes } from '@/lib/theme'
import { MEET_URL } from '@/lib/site'


const capabilities = [
  { title: 'Digital signatures', body: 'Create legally binding signatures in seconds — draw, type, or upload.' },
  { title: 'Signature certificates', body: 'X.509 digital certificates for individuals and organizations.' },
  { title: 'PKI security', body: 'Cryptographically secure signatures with full non-repudiation.' },
  { title: 'Tamper-proof verification', body: 'Detect any change made to a document after signing.' },
  { title: 'Trusted timestamps', body: 'RFC 3161 timestamp authority — proof of exact signing time.' },
  { title: 'Workflow automation', body: 'Multi-level approval flows tracked in real time.' },
]

const useCases = [
  'Government contracts',
  'Legal & court filings',
  'Loan agreements & KYC',
  'HR & employment contracts',
  'Healthcare consent forms',
  'Real estate & leases',
  'Procurement & supply chain',
  'Academic certificates',
  'SME service contracts',
  'Cross-border agreements',
  'Public document verification',
]

export default function CertySignPage() {
  return (
    <>
      <SEO
        title="CertySign — Digital Signatures & PKI"
        description="Create legally binding digital signatures, verify identities, and manage documents on Kenya's CAK-licensed ECSP platform."
      />

      <Section background={bg.heroGreen(images.docs)} className="py-[88px] text-white">
        {/* <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]"> */}
<div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"> 
           <div className="flex flex-col gap-[22px]">
            <h1 className="m-0 font-display text-[44px] font-extrabold leading-[1.08] sm:text-[50px]">
              Sign with certainty
            </h1>
            <p className="m-0 max-w-[50ch] text-lg leading-relaxed text-ink-pale">
              Create legally binding digital signatures, verify identities, and manage documents — on one platform.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a href="https://certysign.io/" target="_blank" rel="noreferrer" className="btn-primary">
                Start Free at certysign.io
              </a>
              <a href={MEET_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Book a Sales Call
              </a>
            </div>
            <div className="mt-1.5 flex flex-wrap gap-8">
              {[
                { value: '99.9%', label: 'Verification accuracy' },
                { value: '30 sec', label: 'Average sign time' },
                { value: '50K+', label: 'Verified signatures' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span className="font-display text-[26px] font-extrabold">{stat.value}</span>
                  <span className="text-[13px] text-ink-mist">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>



<div className="relative z-10 flex justify-end">
  <Image
    src="/images/certysign-mockups.png"
    alt="CertySign Mockup"
    width={2200}
    height={1500}
    priority
    className="w-[105%] max-w-none h-auto object-contain"
  />
</div>





        </div>
      </Section>




      <Section className="bg-white py-28 border-b border-slate-200">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="max-w-3xl mx-auto text-center">
      <span
        className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
        style={{
          backgroundColor: "rgba(35,94,67,.08)",
          color: "#235e43",
        }}
      >
        What is CertySign?
      </span>

      <h2 className="mt-6 text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
        Digital signatures,
        <span style={{ color: "#235e43" }}> simplified.</span>
      </h2>

      <p className="mt-6 text-xl leading-8 text-slate-600 max-w-2xl mx-auto">
        Sign documents online with legally recognised digital signatures
        backed by trusted PKI technology.
      </p>
    </div>

    {/* Features */}
    <div className="mt-20 grid gap-8 md:grid-cols-3">

      {/* Card */}
      <div className="group text-center">

        <div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-translate-y-2"
          style={{
            background:
              "linear-gradient(135deg,#235e43,#2f7652)",
          }}
        >
          <Pen className="h-8 w-8 text-white" />
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-slate-900">
          Sign
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Upload and digitally sign documents in seconds from anywhere.
        </p>

      </div>

      {/* Card */}
      <div className="group text-center">

        <div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-translate-y-2"
          style={{
            background:
              "linear-gradient(135deg,#235e43,#2f7652)",
          }}
        >
          <ShieldCheck className="h-8 w-8 text-white" />
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-slate-900">
          Verify
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Every signer is authenticated using secure digital certificates.
        </p>

      </div>

      {/* Card */}
      <div className="group text-center">

        <div
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-translate-y-2"
          style={{
            background:
              "linear-gradient(135deg,#235e43,#2f7652)",
          }}
        >
          <LockKeyhole className="h-8 w-8 text-white" />
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-slate-900">
          Protect
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Every document is tamper-proof and can be verified at any time.
        </p>

      </div>

    </div>

   

  </div>
</Section>




    


<Section
  className="py-28 border-b border-slate-200"
  style={{
    background: "rgba(35, 94, 67, 0.06)",
  }}
>
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="max-w-3xl mx-auto text-center">

      <span
        className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
        style={{
          background: "rgba(35,94,67,.08)",
          color: "#235e43",
        }}
      >
        Core Platform Capabilities
      </span>

      <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
        Everything you need to
        <span style={{ color: "#235e43" }}> sign</span>,
        <span style={{ color: "#235e43" }}> verify</span>,
        {" "}and
        <span style={{ color: "#235e43" }}> trust.</span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Built for businesses, government and regulated industries that
        need secure, legally recognised digital transactions.
      </p>

    </div>

    {/* Features */}
    <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {capabilities.map((item, index) => (

        <div
          key={item.title}
          className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl"
        >

          {/* Number */}
          <span
            className="text-sm font-bold"
            style={{ color: "#235e43" }}
          >
            {(index + 1).toString().padStart(2, "0")}
          </span>

          <h3 className="mt-4 text-xl font-semibold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            {item.body}
          </p>

          <div
            className="mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-24"
            style={{
              background:
                "linear-gradient(90deg,#235e43,#2f7652)",
            }}
          />

        </div>

      ))}

    </div>

  </div>
</Section>




<Section
  background={scenes.contentMuted()}
  className="relative overflow-hidden border-y border-line py-24"
>
  {/* Background accents */}
  <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary-500/5 blur-3xl" />
  <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary-300/5 blur-3xl" />

  <div className="relative flex flex-col gap-14">

 {/* ================= HEADER ================= */}

<div className="grid gap-10 border-b border-gray-200 pb-12 lg:grid-cols-2 lg:items-center">

  <div>

    <div className="mb-5 inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
        Built for Every Business
      </span>
    </div>

   <h2
  className="heading-display text-4xl font-bold leading-tight md:text-5xl"
  style={{ color: "#000000" }}
>
  Use cases across
  <span className="block" style={{ color: "#000000" }}>
    every industry
  </span>
</h2>

  </div>

  <div className="lg:border-l lg:border-gray-200 lg:pl-10">

    <p className="text-lg leading-8 text-black">
      From banking and healthcare to government and legal services,
      <span className="font-semibold text-green-700"> CertySign </span>
      delivers secure, legally trusted digital signing workflows for
      every organization.
    </p>

  </div>

</div>

    {/* ================= INDUSTRIES ================= */}

    <div className="flex flex-wrap justify-center gap-4">

      {useCases.map((item) => (
        <span
          key={item}
          className="
            rounded-full
            border
            border-primary-200
            bg-white
            px-6
            py-3
            text-sm
            font-semibold
            text-ink-soft
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-primary-500
            hover:bg-primary-50
            hover:shadow-md
          "
        >
          {item}
        </span>
      ))}

    </div>

    {/* ================= TRUST SECTION ================= */}

    <div className="grid gap-6 md:grid-cols-3">

      {[
        {
          t: "Kenya Data Protection Act",
          b: "Fully compliant with Kenya's data protection regulations to ensure sensitive information remains secure and sovereign.",
        },
        {
          t: "ISO 27001 Certified",
          b: "Built on internationally recognized information security standards to protect your documents and digital workflows.",
        },
        {
          t: "CAK-authorized ECSP",
          b: "Licensed by the Communications Authority of Kenya as an Electronic Certification Service Provider.",
        },
      ].map((item) => (
        <div
          key={item.t}
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-primary-100
            bg-white
            p-7
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-primary-300
            hover:shadow-xl
          "
        >
          {/* Top Accent */}
          <div className="absolute left-0 top-0 h-1 w-full bg-primary-500" />

          {/* Icon */}
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50">
            <div className="h-3 w-3 rounded-full bg-primary-600"></div>
          </div>

          <h3 className="mb-3 text-lg font-bold text-navy">
            {item.t}
          </h3>

          <p className="text-sm leading-7 text-ink-muted">
            {item.b}
          </p>
        </div>
      ))}

    </div>

  </div>
</Section>

      


      <Section background={scenes.cta()} className="py-[88px] text-center">
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-[18px]">
          <div className="band-heading flex flex-col items-center gap-3">
            <h2 className="heading-display m-0 text-[36px]">Start signing today</h2>
            <p className="band-lead m-0 text-base leading-relaxed">
              Join organizations securing documents with enterprise-grade PKI.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3.5">
            <a href="https://certysign.io/" target="_blank" rel="noreferrer" className="btn-primary">
              Get Started Free
            </a>
            <a href={MEET_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Book a Sales Call
            </a>
          </div>
        </div>
      </Section>



 <style jsx>{`
        @keyframes floatSlow {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-12px);
          }

          100% {
            transform: translateY(0px);
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(0.9);
            opacity: 0.35;
          }

          70% {
            transform: scale(1.15);
            opacity: 0;
          }

          100% {
            transform: scale(1.15);
            opacity: 0;
          }
        }

        @keyframes rotateSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes moveGlow {
          0% {
            transform: translate(-20px, -10px);
          }

          50% {
            transform: translate(30px, 20px);
          }

          100% {
            transform: translate(-20px, -10px);
          }
        }
      `}</style>


    </>
  )
}




