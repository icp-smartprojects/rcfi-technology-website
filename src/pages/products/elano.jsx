
import { useEffect, useRef, useState } from "react";
import Head from 'next/head'
import Link from 'next/link'
import {
  FiCheckCircle,
  FiShield,
  FiLock,
  FiUser,
  FiDatabase
} from 'react-icons/fi'

import CTAButton from '@/components/common/CTAButton'
import { productsData } from '@/data/productsData'

const testimonials = [
  {
    quote: "Onboarding used to take days. Now it takes minutes — and our compliance team hasn't had a single flag in three months.",
    name: "Head of Operations",
    company: "Financial Institution",
  },
  {
    quote: "Fraudulent applications dropped sharply the moment we switched. Audits went from stressful to routine.",
    name: "Compliance Manager",
    company: "Banking Sector",
  },
  {
    quote: "Verification accuracy gave us the confidence to scale onboarding across every market we operate in.",
    name: "Chief Risk Officer",
    company: "Pan-African Bank",
  },
];


function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) io.observe(ref.current);

    return () => io.disconnect();
  }, []);

  return [ref, visible];
}


function Card({ t, index }) {
  const [ref, visible] = useReveal();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#f9f9f9" : "#ffffff",
        padding: "1.75rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${index * 0.12}s, transform 0.5s ease ${index * 0.12}s`,
      }}
    >
      <div style={{ display: "flex", gap: "2px", marginBottom: "1.1rem" }}>
        {[...Array(5)].map((_, s) => (
          <svg key={s} width="11" height="11" viewBox="0 0 20 20" fill="#f5a623">
            <path d="M10 15l-4.59 2.61L6.06 11.98 1.5 8.95l5.29-.79L10 3l3.21 5.16 5.29.79-4.56 3.03 1.59 5.63z" />
          </svg>
        ))}
      </div>

      <p
        style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: "1rem",
          fontStyle: "italic",
          color: "#111111",
          lineHeight: 1.65,
          marginBottom: "1.5rem",
          flex: 1,
        }}
      >
        "{t.quote}"
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#cccccc",
          }}
        />

        <div>
          <div style={{ fontSize: "12px", fontWeight: 600 }}>
            {t.name}
          </div>
          <div style={{ fontSize: "11px", color: "#aaaaaa" }}>
            {t.company}
          </div>
        </div>
      </div>
    </div>
  );
}


const stats = [
  { value: "500+", label: "organizations onboarded" },
  { value: "99.9%", label: "verification accuracy" },
  { value: "24/7", label: "always available" },
];



const steps = [
  {
    number: "01",
    title: "Upload ID",
    desc: "Government-issued documents uploaded securely.",
    stat: "500+ Types",
  },
  {
    number: "02",
    title: "Face Match",
    desc: "Biometric verification confirms identity.",
    stat: "99.9% Accuracy",
  },
  {
    number: "03",
    title: "AML Screening",
    desc: "Fraud and compliance checks happen instantly.",
    stat: "< 2 Seconds",
  },
  {
    number: "04",
    title: "Approved",
    desc: "Customer onboarding completed automatically.",
    stat: "24/7 Available",
  },
];

export default function ElanoPage() {
  const product = productsData.elano

  return (
    <>
      <Head>
        <title>
          {product?.name || 'Elano'} -{' '}
          {product?.tagline || 'E-KYC Solutions'} | RCFI Technology
        </title>

        <meta
          name="description"
          content={
            product?.longDescription ||
            'Advanced e-KYC and identity verification platform'
          }
        />

        <meta
          property="og:title"
          content={`${product?.name || 'Elano'} - ${
            product?.tagline || 'E-KYC Solutions'
          }`}
        />

        <meta
          property="og:description"
          content={
            product?.longDescription ||
            'Advanced e-KYC and identity verification platform'
          }
        />

        <meta property="og:type" content="product" />

        <link
          rel="canonical"
          href="https://rcfi.co.ke/products/elano"
        />
      </Head>

      {/* HERO */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
         <div className="text-center lg:text-left px-4 sm:px-0">

  <div className="space-y-4">
    
    <div className="mb-10">
      <h1>Elano</h1>
    </div>

    <div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] text-neutral-900">
        Verify Customers
        <span className="block text-primary-600">
          In Seconds,
        </span>
        Not Days
      </h1>
    </div>

    <div>
      <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
        Streamline customer onboarding with real-time identity
        verification, AML compliance, fraud prevention, and
        enterprise-grade security.
      </p>
    </div>

  </div>

  <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
    <CTAButton
      href="/contact/demo"
      variant="primary"
      size="lg"
    >
      Request Demo
    </CTAButton>

    <Link
      href="/contact"
      className="inline-flex items-center justify-center px-8 py-4 border border-primary-200 rounded-lg font-semibold hover:bg-primary-50 transition"
    >
      Talk To Sales
    </Link>
  </div>

</div>

            {/* RIGHT */}
<div className="relative hidden lg:block">
 
  {/* floating top-left — risk score badge */}
  <div className="absolute -top-4 -left-8 bg-white shadow-xl rounded-2xl p-4 z-20 flex items-center gap-3">
    <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center">
      <FiShield className="text-green-600 text-lg" />
    </div>
    <div>
      <p className="text-xs text-neutral-400">Risk score</p>
      <p className="text-sm font-semibold text-neutral-900">Low · 12/100</p>
    </div>
  </div>
 
  {/* floating bottom-right — encryption badge */}
  <div className="absolute -bottom-4 -right-8 bg-white shadow-xl rounded-2xl p-4 z-20 flex items-center gap-3">
    <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center">
      <FiLock className="text-primary-600 text-lg" />
    </div>
    <div>
      <p className="text-xs text-neutral-400">Security</p>
      <p className="text-sm font-semibold text-neutral-900">End-to-end encrypted</p>
    </div>
  </div>
 
  {/* floating right — verified toast */}
  <div className="absolute top-24 -right-10 bg-white shadow-xl rounded-2xl px-4 py-3 z-20 flex items-center gap-2">
    <FiCheckCircle className="text-green-500 text-lg shrink-0" />
    <div>
      <p className="text-xs font-semibold text-neutral-900">Verified in 1.8s</p>
      <p className="text-xs text-neutral-400">Identity confirmed</p>
    </div>
  </div>
 
  {/* phone frame */}
  <div className="relative mx-auto w-[280px]">
 
    {/* outer shell */}
    <div className="relative bg-neutral-900 rounded-[48px] p-[10px] shadow-[0_40px_80px_-10px_rgba(0,0,0,0.35)]">
 
      {/* side buttons */}
      <div className="absolute -left-[3px] top-20 w-[3px] h-8 bg-neutral-700 rounded-l-full" />
      <div className="absolute -left-[3px] top-32 w-[3px] h-12 bg-neutral-700 rounded-l-full" />
      <div className="absolute -left-[3px] top-48 w-[3px] h-12 bg-neutral-700 rounded-l-full" />
      <div className="absolute -right-[3px] top-28 w-[3px] h-16 bg-neutral-700 rounded-r-full" />
 
      {/* screen */}
      <div className="bg-white rounded-[40px] overflow-hidden" style={{ minHeight: 560 }}>
 
        {/* notch only — no status bar time */}
        <div className="relative flex justify-center pt-3 pb-1">
          <div className="w-24 h-6 bg-neutral-900 rounded-b-2xl" />
        </div>
 
        {/* app header */}
        <div className="px-5 pt-3 pb-4 bg-white border-b border-neutral-100">
          <p className="text-xs text-neutral-400 mb-0.5">VerifyID</p>
          <p className="text-base font-semibold text-neutral-900">Identity Verification</p>
        </div>
 
        {/* face scan area */}
        <div className="relative bg-neutral-900 mx-5 mt-4 rounded-2xl overflow-hidden flex items-center justify-center" style={{ height: 180 }}>
          {/* scan grid lines */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}
          />

          {/* face outline */}
          <div className="relative flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Customer face scan"
              className="w-20 h-20 rounded-full object-cover border-2 border-green-400 shadow-lg shadow-green-500/30"
            />
            {/* corner brackets */}
            <div className="absolute -top-3 -left-3 w-5 h-5 border-t-2 border-l-2 border-green-400 rounded-tl-md" />
            <div className="absolute -top-3 -right-3 w-5 h-5 border-t-2 border-r-2 border-green-400 rounded-tr-md" />
            <div className="absolute -bottom-3 -left-3 w-5 h-5 border-b-2 border-l-2 border-green-400 rounded-bl-md" />
            <div className="absolute -bottom-3 -right-3 w-5 h-5 border-b-2 border-r-2 border-green-400 rounded-br-md" />
          </div>
          <p className="absolute bottom-3 text-green-400 text-xs font-medium tracking-wide">Face match · 99.2%</p>
        </div>
 
        {/* check list */}
        <div className="px-5 mt-4 space-y-2.5">
 
          <div className="flex items-center justify-between bg-neutral-50 rounded-xl px-4 py-3">
            <div className="flex items-center gap-2.5">
              <FiUser className="text-neutral-400 text-sm" />
              <span className="text-sm text-neutral-700">Customer Identity</span>
            </div>
            <FiCheckCircle className="text-green-500" />
          </div>
 
          <div className="flex items-center justify-between bg-neutral-50 rounded-xl px-4 py-3">
            <div className="flex items-center gap-2.5">
              <FiShield className="text-neutral-400 text-sm" />
              <span className="text-sm text-neutral-700">AML Screening</span>
            </div>
            <FiCheckCircle className="text-green-500" />
          </div>
 
          <div className="flex items-center justify-between bg-neutral-50 rounded-xl px-4 py-3">
            <div className="flex items-center gap-2.5">
              <FiDatabase className="text-neutral-400 text-sm" />
              <span className="text-sm text-neutral-700">Risk Assessment</span>
            </div>
            <FiCheckCircle className="text-green-500" />
          </div>
 
        </div>
 
        {/* bottom CTA inside phone */}
        <div className="px-5 mt-4">
          <div className="w-full bg-primary-600 text-white text-sm font-semibold text-center py-3.5 rounded-2xl">
            Verification Complete ✓
          </div>
        </div>
 
        {/* home indicator */}
                      <div className="flex justify-center mt-4 pb-3">
                          <div className="w-24 h-1 bg-neutral-200 rounded-full" />
                       </div>
 
                        </div>
                   </div>
              </div>
          </div>

          </div>
        </div>
      </section>


{/* TRUSTED BY */}
<section className="py-20 bg-gradient-to-br from-slate-50 via-primary-50 to-blue-50 overflow-hidden relative">

  {/* Background Glow */}
  <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />

  <div className="container-custom relative z-10">

    <div className="text-center mb-10">
      <span className="inline-flex px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm text-primary-700 text-sm font-medium mb-4">
        Trusted Worldwide
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
        Trusted By Leading Organizations
      </h2>

      <p className="text-neutral-600 max-w-2xl mx-auto">
        Financial institutions, fintechs and enterprises rely on Elano
        to streamline customer onboarding and identity verification.
      </p>
    </div>

    <div className="relative overflow-hidden">

      {/* Fade Left */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-primary-50 to-transparent z-20" />

      {/* Fade Right */}
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-blue-50 to-transparent z-20" />

      <div
        className="flex gap-8 items-center"
        style={{
          width: "max-content",
          animation: "marquee 25s linear infinite",
        }}
      >
        {[
          "Safaricom",
          "KCB Bank",
          "NCBA",
          "ABSA",
          "Equity Bank",
          "Co-op Bank",
          "I&M Bank",
          "Safaricom",
          "KCB Bank",
          "NCBA",
          "ABSA",
          "Equity Bank",
          "Co-op Bank",
          "I&M Bank",
        ].map((company, index) => (
          <div
            key={index}
            className="
              bg-white/80
              backdrop-blur-xl
              border
              border-white/60
              rounded-full
              px-8
              py-4
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-1
              transition-all
              duration-300
              whitespace-nowrap
            "
          >
            <span className="font-semibold text-primary-700">
              {company}
            </span>
          </div>
        ))}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </div>

  </div>

</section>



      {/* HOW IT WORKS */}
<section className="py-28 bg-gradient-to-b from-white to-primary-50 overflow-hidden">
  <div className="container-custom">
    <div className="text-center mb-20">
      <span className="inline-flex px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-medium">
        How It Works
      </span>

      <h2 className="text-5xl md:text-6xl font-bold mt-6 text-neutral-900">
        From Identity Check
        <span className="block text-primary-600">
          To Customer Approval
        </span>
      </h2>

      <p className="text-xl text-neutral-600 mt-6 max-w-3xl mx-auto">
        Elano automates the entire verification journey,
        reducing onboarding time while improving compliance.
      </p>
    </div>

    <div className="relative">
      {/* Connection Line */}
      <div className="hidden lg:block absolute top-16 left-0 w-full h-1">
        <div className="h-full bg-gradient-to-r from-primary-500 via-blue-500 to-green-500 rounded-full" />
      </div>

      <div className="grid lg:grid-cols-4 gap-8 relative z-10">
        {[
          {
            number: "01",
            title: "Upload ID",
            desc: "Government-issued documents uploaded securely.",
            stat: "500+ Types"
          },
          {
            number: "02",
            title: "Face Match",
            desc: "Biometric verification confirms identity.",
            stat: "99.9% Accuracy"
          },
          {
            number: "03",
            title: "AML Screening",
            desc: "Fraud and compliance checks happen instantly.",
            stat: "< 2 Seconds"
          },
          {
            number: "04",
            title: "Approved",
            desc: "Customer onboarding completed automatically.",
            stat: "24/7 Available"
          }
        ].map((step, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
          >
            <div className="absolute top-2 right-4 text-4xl font-bold text-primary-100">
              {step.number}
            </div>

            <h3 className="text-2xl font-bold mb-3">
              {step.title}
            </h3>

            <p className="text-neutral-600 mb-6">
              {step.desc}
            </p>

            <div className="inline-flex px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold">
              {step.stat}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      
      {/* FEATURES */}

<section className="py-24 bg-white">
  <div className="container-custom">

    <div className="max-w-5xl mx-auto">

      <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-[32px] p-10 md:p-14">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <span className="inline-flex px-4 py-2 rounded-full bg-white shadow-sm text-primary-700 font-medium">
              Why Elano
            </span>

            <h2 className="text-6xl md:text-7xl font-bold text-neutral-900 mt-6 leading-none">
              99.9%
            </h2>

            <p className="text-lg text-neutral-600 mt-3">
              Verification Accuracy
            </p>

            <div className="w-20 h-1 bg-primary-500 rounded-full mt-8" />

            <p className="text-neutral-500 mt-6 max-w-sm">
              Fast, secure and compliant identity verification
              designed for modern organizations.
            </p>

          </div>


          {/* RIGHT */}
          <div className="relative">

            {/* Accent Line */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-primary-200" />

            <div className="space-y-6">

              {[
                "AML Compliance",
                "Biometric Verification",
                "Global Coverage",
                "Real-Time Verification"
              ].map((feature) => (
                <div
                  key={feature}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    pl-8
                    transition-all
                    duration-300
                    hover:translate-x-2
                  "
                >
                  <div className="relative z-10 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center shadow-md">
                    <FiCheckCircle className="text-white text-sm" />
                  </div>

                  <span
                    className="
                      text-lg
                      font-medium
                      text-neutral-800
                      group-hover:text-primary-700
                      transition-colors
                    "
                  >
                    {feature}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>



      {/* COMPLIANCE */}

<section className="py-24 bg-primary-900 text-white">
  <div className="container-custom max-w-6xl mx-auto">

    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-primary-200 font-medium">
        Compliance First
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
        Built For Regulatory Compliance
      </h2>

      <p className="text-primary-100 text-lg">
        Everything you need to verify users, reduce fraud,
        and meet regulatory requirements.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        {
          title: "KYC Verification",
          description: "Verify identities quickly and accurately."
        },
        {
          title: "AML Screening",
          description: "Automatically screen against watchlists."
        },
        {
          title: "Fraud Prevention",
          description: "Detect suspicious activity before it becomes a risk."
        },
        {
          title: "Audit Reports",
          description: "Maintain records for compliance reviews."
        }
      ].map((item, idx) => (
        <div
          key={idx}
          className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-6
            transition-all
            duration-300
            hover:bg-white/10
            hover:border-white/20
            hover:shadow-lg
          "
        >
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-5">
            <FiCheckCircle className="text-green-400 text-lg" />
          </div>

          <h3 className="font-semibold text-lg mb-2">
            {item.title}
          </h3>

          <p className="text-primary-100 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>


<section
  style={{
    padding: "5rem 0",
    background: "#fafafa",
    overflow: "hidden",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "0 2rem",
    }}
  >
    <div style={{ marginBottom: "2.75rem" }}>
      <h2
        style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: "clamp(1.8rem,3vw,2.4rem)",
          fontStyle: "italic",
        }}
      >
        Trusted by the people
        <br />
        who can't afford mistakes
      </h2>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "1px",
        background: "#e8e8e8",
        borderRadius: "14px",
        overflow: "hidden",
      }}
    >
      {testimonials.map((t, i) => (
        <Card key={i} t={t} index={i} />
      ))}
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        marginTop: "2rem",
      }}
    >
      {stats.map((s, i) => (
        <div key={i}>
          <span
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "1.5rem",
              fontStyle: "italic",
              marginRight: "6px",
            }}
          >
            {s.value}
          </span>
          {s.label}
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  )
}




   



