
"use client";
import { useEffect, useRef } from "react";
const t = {
  primary:        "#235e43",
  primaryLight:   "#b3f0cd",
  primaryDim:     "#97d4b1",
  onPrimary:      "#ffffff",
  onPrimaryFixed: "#002113",
  onPrimaryFixedVariant: "#135137",

  surface:        "#f9f9ff",
  surfaceLowest:  "#ffffff",
  surfaceLow:     "#f1f3ff",
  surfaceContainer: "#e9edff",
  surfaceHigh:    "#e1e8fd",

  inverseText:    "#edf0ff",
  inverseSurface: "#293040",

  onSurface:      "#141b2b",
  onSurfaceVariant: "#404943",
  secondary:      "#505f76",
  outline:        "#707972",
  outlineVariant: "#c0c9c1",
};


function useReveal(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = "1";
            e.target.style.transform = "translateY(0)";
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
}

const revealStyle = (delay = 0) => ({
  opacity: 0,
  transform: "translateY(28px)",
  transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
});


function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: 700,
        display: "flex",
        alignItems: "center",
        padding: "80px 64px",
        overflow: "hidden",
        background: t.surfaceLowest,
      }}
    >

      <div   
         className="hero-grid"
         style={{
         maxWidth: 1280,
         margin: "0 auto",
         display: "grid",
         gridTemplateColumns: "7fr 5fr",
         gap: 24,
         alignItems: "center",
         width: "100%",
       }} 
      >

        {/* Left copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          
         <h1
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: t.onSurface,
              margin: 0,
            }}
          >
            CertySign
          </h1>

          <span
            style={{
              color: t.primary,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Transition to Digital Trust
          </span>

          <h1
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: t.onSurface,
              margin: 0,
            }}
          >
            Secure Digital Workflows.{" "}
            <span style={{ color: t.primary }}>Verified Identities.</span>
          </h1>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 18,
              lineHeight: 1.6,
              color: t.secondary,
              maxWidth: 520,
              margin: 0,
            }}
          >
            Replace paper with secure digital trust. The leading platform in
            Kenya for legally binding signatures and identity verification,
            compliant with the Data Protection Act.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
         <a href="https://certysign.io" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <button
                 style={{
                         background: t.primary,
                         color: t.onPrimary,
                         padding: "14px 32px",
                         borderRadius: 12,
                         border: "none",
                         fontFamily: "'Hanken Grotesk', sans-serif",
                        fontSize: 16,
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "filter 0.2s, transform 0.1s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
                    >
                   Start Your Digital Journey
                  </button>
                 </a>


            <button
                   style={{
                           background: t.surfaceLowest,
                           color: t.onSurface,
                           padding: "14px 32px",
                           borderRadius: 12,
                           border: `1px solid ${t.outlineVariant}`,
                           fontFamily: "'Hanken Grotesk', sans-serif",
                           fontSize: 16, 
                           fontWeight: 600,
                           cursor: "pointer",
                           transition: "background 0.2s",
                 }}
                onMouseEnter={(e) => (e.currentTarget.style.background = t.surfaceLow)}
                onMouseLeave={(e) => (e.currentTarget.style.background = t.surfaceLowest)}
                onClick={() => window.location.assign("/contact/demo")}
                >
                Request Demo
              </button>

            
          </div>
        </div>

        {/* Right card */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: t.surfaceContainer,
              borderRadius: "50%",
              top: -48,
              right: -48,
              zIndex: 0,
              opacity: 0.5,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              background: t.surfaceLowest,
              border: `1px solid ${t.outlineVariant}`,
              borderRadius: 16,
              padding: 32,
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              transition: "transform 0.5s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >

            {/* Card header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: `1px solid ${t.outlineVariant}`,
                paddingBottom: 16,
                marginBottom: 24,
              }}
            >

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className="material-symbols-outlined" style={{ color: t.primary }}>verified</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em" }}>
                  Digital_Identity_Certificate
                </span>
              </div>

              <span
                style={{
                  background: t.primaryDim,
                  color: t.onPrimaryFixedVariant,
                  fontSize: 11,
                  padding: "4px 10px",
                  borderRadius: 999,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                }}
              >
                DPA Compliant
              </span>
              
            </div>



            {/* Signature area */}
 
<div
  style={{
    position: "relative",
    height: 192,
    background: t.surfaceLow,
    borderRadius: 8,
    marginBottom: 24,
    display: "flex",
    alignItems: "flex-end",
    padding: 16,
    overflow: "hidden",
  }}
>
  <style>
    {`
      @keyframes fadeVerify {
        0%, 35% {
          opacity: 0;
          transform: translateY(4px);
        }

        45%, 80% {
          opacity: 1;
          transform: translateY(0);
        }

        100% {
          opacity: 0;
          transform: translateY(4px);
        }
      }
    `}
  </style>

  {/* Signature Animation */}
  <svg
    viewBox="0 0 300 100"
    style={{
      position: "absolute",
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      marginTop:"90px",
      width: "250px",
      height: "50px",
      pointerEvents: "none",
    }}
  >
    <defs>
    <path
    id="signaturePath"
    d="
      M 25 65
      C 35 30, 50 30, 55 58
      C 58 75, 68 75, 78 45
      C 88 15, 105 20, 108 52
      C 110 75, 125 72, 138 35
      C 145 18, 155 18, 160 45
      C 165 70, 180 68, 190 40
      C 198 20, 208 20, 215 42
      C 222 62, 236 60, 246 36
      C 255 16, 270 20, 285 38
     "
      />
    </defs>

    <use
      href="#signaturePath"
      fill="none"
      stroke={t.secondary || "#334155"}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="1000"
      strokeDashoffset="1000"
      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.12))"
    >
      <animate
        attributeName="stroke-dashoffset"
        values="1000;0;0;1000"
        keyTimes="0;0.4;0.8;1"
        dur="8s"
        repeatCount="indefinite"
      />

      <animate
        attributeName="opacity"
        values="1;1;1;0"
        keyTimes="0;0.4;0.8;1"
        dur="8s"
        repeatCount="indefinite"
      />
    </use>
  </svg>

  {/* Verification Badge */}
  <div
    style={{
      position: "absolute",
      top: 18,
      right: 18,
      padding: "6px 12px",
      borderRadius: 999,
      background: "rgba(34,197,94,0.1)",
      color: "#16A34A",
      fontSize: 12,
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      gap: 6,
      border: "1px solid rgba(34,197,94,0.2)",
      animation: "fadeVerify 8s infinite",
      zIndex: 3,
    }}
  >
    <span>✓</span>
    <span>Verified</span>
  </div>


  {/* Original Signature Line Section */}
  <div
    style={{
      width: "100%",
      height: 48,
      backgroundImage:
        "linear-gradient(to right, #CBD5E1 50%, transparent 0%)",
      backgroundPosition: "bottom",
      backgroundSize: "8px 1px",
      backgroundRepeat: "repeat-x",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      zIndex: 2,
    }}
     >
      
     <span
        style={{
         fontFamily: "Inter, sans-serif",
         fontSize: 14,
          color: t.secondary,
           opacity: 0.4,
            fontStyle: "italic",
            letterSpacing: "0.5px",
             }}
           >
           Authenticated Digital Signature
        </span>
         </div> 
     </div>


   
            {/* Action stubs */}
            {/* Certificate Trust Indicators */}
          <div
              style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 20,
               borderTop: `1px solid ${t.outlineVariant}`,
            }}
            >

          <div
              style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
           }}
          >

        <span
             className="material-symbols-outlined"
             style={{
             color: "#22c55e",
            fontSize: 18,
          }}
         >
           verified_user
          </span>

        <div>
      <div
        style={{
          fontSize: 12,
          fontWeight: 600,
          color: t.onSurface,
          fontFamily: "Inter, sans-serif",
        }}
      >
        Verified Identity
      </div>

      <div
        style={{
          fontSize: 11,
          color: t.secondary,
          fontFamily: "Inter, sans-serif",
        }}
      >
        KYC Approved
      </div>

    </div>

  </div>

  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 6,
      background: `${t.primary}12`,
      color: t.primary,
      padding: "8px 12px",
      borderRadius: 999,
      fontSize: 11,
      fontWeight: 600,
      fontFamily: "Inter, sans-serif",
    }}
  >
    <span
      className="material-symbols-outlined"
      style={{
        fontSize: 16,
      }}
    >
      lock
    </span>

    Encrypted
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}


const features = [
  { icon: "badge",                  title: "Digital Signature Certificates", desc: "Legally recognized certificates with secure authentication and full regulatory compliance." },
  { icon: "receipt_long",           title: "Invoice Authentication",          desc: "Protect your revenue with advanced fraud prevention and automated financial validation." },
  { icon: "person_search",          title: "e-KYC Identity Verification",     desc: "Faster onboarding through electronic KYC processes that verify identities instantly." },
  { icon: "account_balance_wallet", title: "Blockchain-Secured Documents",    desc: "Immutable records providing long-term auditability and cryptographic document integrity." },
];

function FeaturesSection() {
  return (
    <section id="features" style={{ padding: "80px 64px", background: t.surfaceLow }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div data-reveal style={{ ...revealStyle(0), textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 32, fontWeight: 600, color: t.onSurface, marginBottom: 12 }}>
            Engineered for Digital Precision
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: t.secondary }}>
            Comprehensive tools for modern, secure enterprise workflows.
          </p>
        </div>

        <div  className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              data-reveal
              style={{
                ...revealStyle(i * 80),
                background: t.surfaceLowest,
                border: `1px solid ${t.outlineVariant}`,
                borderRadius: 16,
                padding: 32,
                transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, box-shadow 0.3s, translate 0.3s`,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 24px 48px rgba(0,0,0,0.12)"; e.currentTarget.style.translate = "0 -6px"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.translate = "0 0"; }}
            >
              <div style={{ width: 48, height: 48, background: `${t.primary}1a`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <span className="material-symbols-outlined" style={{ color: t.primary }}>{f.icon}</span>
              </div>
              <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 20, fontWeight: 600, color: t.onSurface, marginBottom: 12 }}>
                {f.title}
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: t.onSurfaceVariant, lineHeight: 1.6 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


const benefits = [
  {
    icon: "speed",
    title: "Improved Efficiency",
    desc: "Eliminate paper-based friction. Accelerate approval cycles from days to minutes.",
    accent: "#4ade80",
  },
  {
    icon: "security",
    title: "Enhanced Security",
    desc: "Multi-factor authentication with encrypted, tamper-proof audit trails on every document.",
    accent: "#60a5fa",
  },
  {
    icon: "gavel",
    title: "Regulatory Compliance",
    desc: "Fully aligned with Kenya's Data Protection Act and global ISO 27001 standards.",
    accent: "#f59e0b",
  },
  {
    icon: "savings",
    title: "Cost Reduction",
    desc: "Cut operational costs by eliminating printing, physical storage, and courier overheads.",
    accent: "#a78bfa",
  },
];



function BenefitsSection() {
  return (
    <section
      id="benefits"
      style={{
        padding: "80px 64px",
        background: t.surfaceLowest,
        position: "relative",
        overflow: "hidden",
      }}

   
    >
      {/* Decorative blurred orbs */}
      <div style={{ position: "absolute", top: -80, left: -80, width: 320, height: 320, borderRadius: "50%", background: `${t.primary}`, opacity: 0.06, filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, right: -60, width: 260, height: 260, borderRadius: "50%", background: "#60a5fa", opacity: 0.07, filter: "blur(70px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Header: label left, heading centre-ish, subtext right ── */}
        <div
          className="benefits-header-grid"
          data-reveal
          style={{
            ...revealStyle(0),
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "end",
            gap: 24,
            marginBottom: 56,
          }}
        >
          {/* Left label */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 2, background: t.primary, borderRadius: 2 }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: t.primary }}>
              Why Certisign
            </span>
          </div>

          {/* Centre heading */}
          <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 32, fontWeight: 700, color: t.onSurface, margin: 0, textAlign: "center", whiteSpace: "normal" }}>
            Transforming <span style={{ color: t.primary }}>Outcomes</span>
          </h2>

          {/* Right subtext */}
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: t.secondary, margin: 0, textAlign: "right", lineHeight: 1.5 }}>
            Built for the speed and trust<br />modern enterprises demand.
          </p>
        </div>

        {/* ── Cards ── */}
        <div  className="benefits-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {benefits.map((b, i) => (
            <div
              key={b.title}
              data-reveal
              style={{
                ...revealStyle(i * 90),
                position: "relative",
                background: t.surfaceLowest,
                border: `1px solid ${t.outlineVariant}`,
                borderRadius: 20,
                padding: "32px 26px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 0,
                overflow: "hidden",
                cursor: "default",
                transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 90}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 90}ms, box-shadow 0.35s, border-color 0.35s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 48px rgba(0,0,0,0.10)`;
                e.currentTarget.style.borderColor = b.accent + "66";
                e.currentTarget.querySelector(".benefit-icon-ring").style.background = b.accent + "22";
                e.currentTarget.querySelector(".benefit-icon-ring").style.borderColor = b.accent + "55";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = t.outlineVariant;
                e.currentTarget.querySelector(".benefit-icon-ring").style.background = `${t.primary}10`;
                e.currentTarget.querySelector(".benefit-icon-ring").style.borderColor = `${t.primary}20`;
              }}
            >
              {/* Icon ring */}
              <div
                className="benefit-icon-ring"
                style={{
                  width: 44, height: 44,
                  borderRadius: 12,
                  border: `1px solid ${t.primary}20`,
                  background: `${t.primary}10`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20,
                  transition: "background 0.3s, border-color 0.3s",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: t.primary }}>{b.icon}</span>
              </div>

              {/* Title */}
              <h4 style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 16,
                fontWeight: 700,
                color: t.onSurface,
                margin: "0 0 10px",
                lineHeight: 1.3,
              }}>
                {b.title}
              </h4>

              {/* Desc */}
              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                color: t.secondary,
                lineHeight: 1.65,
                margin: 0,
                flexGrow: 1,
              }}>
                {b.desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


const sectors = [
  { icon: "account_balance",    label: "Government" },
  { icon: "payments",           label: "Financial Institutions" },
  { icon: "volunteer_activism", label: "NGOs" },
  { icon: "business",           label: "Private Enterprises" },
  { icon: "school",             label: "Educational Institutions" },
];

function SectorsSection() {
  return (
    <section id="sectors" style={{ padding: "80px 64px", background: t.surfaceContainer }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <h2
          data-reveal
          style={{ ...revealStyle(0), fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 32, fontWeight: 600, color: t.onSurface, textAlign: "center", marginBottom: 48 }}
        >
          Built for Every Sector
        </h2>

        <div data-reveal style={{ ...revealStyle(100), display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
          {sectors.map((s) => (
            <div
              key={s.label}
              style={{
                background: t.surfaceLowest,
                border: `1px solid ${t.outlineVariant}`,
                borderRadius: 999,
                padding: "10px 20px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: t.primary,
                cursor: "default",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = t.primary)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = t.outlineVariant)}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{s.icon}</span>
              {s.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


const complianceItems = [
  { icon: "verified_user", title: "Data Protection Act", desc: "Every workflow is fully compliant with Kenya's DPA — your data stays sovereign." },
  { icon: "workspace_premium", title: "ISO 27001 Certified", desc: "Our infrastructure meets the gold standard for information security management." },
  { icon: "account_balance", title: "CAK Authorized", desc: "Licensed and regulated by the Communications Authority of Kenya." },
];

const certBadges = [
  { label: "DPA",       sub: "Data Privacy",  note: "Kenya 2019" },
  { label: "ISO 27001", sub: "Info Security", note: "Certified" },
  { label: "CAK",       sub: "Regulated",     note: "Kenya" },
];

function SecuritySection() {
  return (
    <section
      id="security"
      style={{ padding: "88px 64px", background: t.primary, color: t.onPrimary, position: "relative", overflow: "hidden" }}
    >
      {/* Subtle radial glow top-right */}
      <div style={{ position: "absolute", top: -120, right: -120, width: 500, height: 500, borderRadius: "50%", background: "rgba(255,255,255,0.06)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ── Full-width header ── */}
        <div data-reveal style={{ ...revealStyle(0), display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 24, height: 2, background: t.primaryDim, borderRadius: 2 }} />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: t.primaryDim }}>
            Trust & Compliance
          </span>
        </div>

        <div
            className="security-header-grid"
            data-reveal
            style={{
              ...revealStyle(60),
               display: "grid",
               gridTemplateColumns: "1fr 1fr",
               gap: 48,
               alignItems: "end",
               marginBottom: 48,
             }}
             >

          <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 40, fontWeight: 700, lineHeight: 1.15, margin: 0 }}>
            Uncompromising<br />
            <span style={{ color: t.primaryDim }}>Compliance.</span>
          </h2>

          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.7, opacity: 0.75, margin: 0 }}>
            Every transaction on Certisign is secure, verifiable, and legally binding — under Kenyan and International law.
          </p>
        </div>

        {/* ── Two-column body ── */}
        <div   className="security-body-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>

          {/* Left — compliance items */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {complianceItems.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                style={{
                  ...revealStyle(120 + i * 80),
                  display: "flex", gap: 16, alignItems: "flex-start",
                  padding: "20px 0",
                  borderBottom: i < complianceItems.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
                }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: t.primaryDim }}>{item.icon}</span>
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 15, fontWeight: 700, margin: "0 0 4px", color: "#fff" }}>{item.title}</h4>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.6, opacity: 0.65, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — certification cards */}
          <div data-reveal style={{ ...revealStyle(160), display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Big trust statement card */}
            <div style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: 20,
              padding: "28px 28px 24px",
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 28, color: t.primaryDim, display: "block", marginBottom: 12 }}>shield</span>
              <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 18, fontWeight: 600, lineHeight: 1.45, margin: "0 0 8px", color: "#fff" }}>
                "Trusted by enterprises across Kenya for secure, paperless workflows."
              </p>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, opacity: 0.5 }}>Digisign Security Guarantee</span>
            </div>

            {/* Badge row */}
            <div   className="security-body-grid"
           style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {certBadges.map((b) => (
                <div
                  key={b.label}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 14,
                    padding: "16px 12px",
                    textAlign: "center",
                    cursor: "default",
                    transition: "background 0.25s, border-color 0.25s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.borderColor = `${t.primaryDim}55`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                >
                  <div style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 16, fontWeight: 800, color: t.primaryDim, letterSpacing: "-0.02em" }}>{b.label}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 600, color: "#fff", opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 2 }}>{b.sub}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#fff", opacity: 0.4, marginTop: 2 }}>{b.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function CTASection() {
  return (
    <section style={{ padding: "80px 64px", background: t.surfaceLowest }}>
      <div
        data-reveal
        style={{
          ...revealStyle(0),
          maxWidth: 900,
          margin: "0 auto",
          background: t.inverseSurface,
          color: t.inverseText,
          borderRadius: 32,
          padding: "64px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >

        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 32, fontWeight: 600, marginBottom: 16 }}>
            Build Digital Trust Today
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, lineHeight: 1.6, color: "#c0c9d0", maxWidth: 560, margin: "0 auto 28px" }}>
            Join the digital transformation. Move from paper to secure, verifiable digital workflows with Certysign.
          </p>



          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://app.certysign.io" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <button
                style={{
                  background: t.primary,
                  color: t.onPrimary,
                  padding: "14px 40px",
                  borderRadius: 12,
                  border: "none",
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 18,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "filter 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.15)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                Launch App
              </button>
            </a>
            <a href="/contact" style={{ textDecoration: "none" }}>
              <button
                style={{
                  background: "transparent",
                  color: t.inverseText,
                  padding: "14px 40px",
                  borderRadius: 12,
                  border: `1px solid ${t.inverseText}40`,
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 18,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = t.inverseText; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = `${t.inverseText}40`; }}
              >
                Talk to Sales
              </button>
            </a>
          </div>

          
        </div>

        {/* Glow blobs */}
        <div style={{ position: "absolute", bottom: -48, right: -48, width: 256, height: 256, background: t.primary, opacity: 0.2, borderRadius: "50%", filter: "blur(48px)" }} />
        <div style={{ position: "absolute", top: -48, left: -48, width: 192, height: 192, background: t.primary, opacity: 0.1, borderRadius: "50%", filter: "blur(40px)" }} />
      </div>
    </section>
  );
}


export default function Certisign() {
  const root = useRef(null);
  useReveal(root);

  return (
    <>
   <style
  dangerouslySetInnerHTML={{
    __html: `
      @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600;700&family=Inter:wght@400;500;600&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

      .material-symbols-outlined {
        font-family: 'Material Symbols Outlined';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-smoothing: antialiased;
        font-variation-settings:
          'FILL' 0,
          'wght' 400,
          'GRAD' 0,
          'opsz' 24;
      }

      
      @media (max-width: 1024px) {

        .hero-grid {
          grid-template-columns: 1fr !important;
          gap: 48px !important;
        }

        .features-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }

        .benefits-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }

        .benefits-header {
          grid-template-columns: 1fr !important;
          text-align: center !important;
          gap: 20px !important;
        }

        .benefits-header h2 {
          white-space: normal !important;
        }

        .benefits-header p {
          text-align: center !important;
        }

        .security-header-grid,
        .security-body-grid {
          grid-template-columns: 1fr !important;
          gap: 32px !important;
        }

        .security-badges-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }
      }

    
      @media (max-width: 768px) {

        section {
          padding-left: 20px !important;
          padding-right: 20px !important;
        }

        .hero-grid {
          grid-template-columns: 1fr !important;
          gap: 40px !important;
        }

        .features-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 16px !important;
        }

        .benefits-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 16px !important;
        }

        .benefits-header {
          grid-template-columns: 1fr !important;
          text-align: center !important;
          gap: 16px !important;
        }

        .benefits-header h2 {
          white-space: normal !important;
        }

        .benefits-header p {
          text-align: center !important;
        }

        .security-header-grid,
        .security-body-grid {
          grid-template-columns: 1fr !important;
          gap: 24px !important;
        }

        .security-badges-grid {
          grid-template-columns: 1fr !important;
        }
      }

    
      @media (max-width: 480px) {

        section {
          padding-left: 16px !important;
          padding-right: 16px !important;
        }

        .hero-grid {
          gap: 32px !important;
        }

        .features-grid {
          grid-template-columns: 1fr !important;
        }

        .benefits-grid {
          grid-template-columns: 1fr !important;
        }

        .security-badges-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `
  }}
/>

      <div ref={root}>
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <SectorsSection />
        <SecuritySection />
        <CTASection />
      </div>

    </>
  );
}