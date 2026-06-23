import { useEffect, useRef } from "react";
import Link from "next/link";
import SEO from "@/components/common/SEO";
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
  const heroAnimations = `
    @keyframes pulseNode {
      0%,100% { transform: scale(1); }
      50% { transform: scale(1.25); }
    }
    @keyframes networkFloat {
      0%,100% { transform: translateY(0px); }
      50% { transform: translateY(-14px); }
    }
    @keyframes dashFlow {
      from { stroke-dashoffset: 100; }
      to { stroke-dashoffset: 0; }
    }
    @keyframes backgroundMove {
      0% { transform: translate(0,0) scale(1); }
      100% { transform: translate(-3%, -2%) scale(1.05); }
    }
    @keyframes floatCard {
      0%,100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }
  `;

  return (
    <section
      style={{
        position: "relative",
        minHeight: 820,
        display: "flex",
        alignItems: "center",
        padding: "80px 64px",
        overflow: "hidden",
        background: t.surfaceLowest,
      }}
    >
      <style>{heroAnimations}</style>

      {/* BACKGROUND */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
  
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "110%",
            height: "110%",
            opacity: 0.18,
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(22,163,74,0.35) 0, transparent 8%), radial-gradient(circle at 70% 60%, rgba(22,163,74,0.3) 0, transparent 7%), radial-gradient(circle at 45% 80%, rgba(22,163,74,0.25) 0, transparent 6%)",
            backgroundSize: "180px 180px",
            animation: "backgroundMove 25s ease-in-out infinite alternate",
          }}
        />
        {/* White Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(248,250,252,0.98) 0%, rgba(248,250,252,0.92) 45%, rgba(248,250,252,0.75) 100%)",
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            right: "-200px",
            top: "50%",
            transform: "translateY(-50%)",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "rgba(22,163,74,0.12)",
            filter: "blur(120px)",
          }}
        />
      </div>

      <div
        className="hero-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "7fr 5fr",
          gap: 40,
          alignItems: "center",
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LEFT SIDE */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <a href="https://certysign.io/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 12, textDecoration: "none", width: "fit-content" }}>
            <img
              src="/images/assets/logo-green.svg"
              alt="CertySign"
              style={{ height: 44, width: "auto" }}
            />
            <span
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: "clamp(32px, 4vw, 42px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: t.onSurface,
              }}
            >
              CertySign
            </span>
          </a>

          <span
            style={{
              color: t.primary,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "Inter, sans-serif",
            }}
          >
            ECSP · Communications Authority of Kenya
          </span>

          <h1
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: "clamp(44px, 6vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: t.onSurface,
              margin: 0,
            }}
          >
            Sign with{" "}
            <span style={{ color: t.primary }}>certainty</span>
          </h1>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 22,
              lineHeight: 1.5,
              color: t.secondary,
              maxWidth: 520,
              margin: 0,
              fontWeight: 500,
            }}
          >
            Create legally binding digital signatures, verify identities, and manage documents — on one platform.
          </p>

          <a
            href="https://certysign.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 17,
              fontWeight: 600,
              color: t.primary,
              textDecoration: "none",
              width: "fit-content",
            }}
          >
            certysign.io →
          </a>

          {/* STATS */}
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap", marginTop: 8 }}>
            <div>
              <div style={{ fontSize: 34, fontWeight: 700, color: t.primary }}>
                99.9%
              </div>
              <div style={{ fontSize: 13, color: t.secondary }}>
                Verification Accuracy
              </div>
            </div>
            <div>
              <div style={{ fontSize: 34, fontWeight: 700, color: t.primary }}>
                DPA
              </div>
              <div style={{ fontSize: 13, color: t.secondary }}>Compliant</div>
            </div>
            <div>
              <div style={{ fontSize: 34, fontWeight: 700, color: t.primary }}>
                24/7
              </div>
              <div style={{ fontSize: 13, color: t.secondary }}>Secure Access</div>
            </div>
          </div>

          {/* BUTTONS */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 8 }}>
            <a href="https://certysign.io/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <button
                style={{
                  background: t.primary,
                  color: t.onPrimary,
                  padding: "16px 34px",
                  borderRadius: 14,
                  border: "none",
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 18,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Start Free
              </button>
            </a>
            <a href="https://app.certysign.io" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <button
                style={{
                  background: "#fff",
                  color: t.onSurface,
                  padding: "16px 34px",
                  borderRadius: 14,
                  border: `1px solid ${t.outlineVariant}`,
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Sign In
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — Phone mockup with floating trust cards */}
        <div
          className="hero-stage"
          style={{
            position: "relative",
            minHeight: 600,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >

          {/* Ambient glow */}
          <div
            style={{
              position: "absolute",
              width: 420,
              height: 420,
              right: 20,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(22,163,74,0.16) 0%, rgba(22,163,74,0) 70%)",
              filter: "blur(30px)",
            }}
          />

          {/* Connector lines (drawn behind everything) */}
          <svg
            viewBox="0 0 520 600"
            width="100%"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              overflow: "visible",
            }}
            preserveAspectRatio="xMidYMid meet"
          >
            {/* award card -> phone */}
            <path
              d="M150 150 H210 a14 14 0 0 1 14 14 V250"
              fill="none"
              stroke={t.outlineVariant}
              strokeWidth="2"
            />
            {/* latency card -> phone */}
            <path
              d="M120 300 H200 a14 14 0 0 1 14 14 V340"
              fill="none"
              stroke={t.outlineVariant}
              strokeWidth="2"
            />
            {/* phone -> users card (bottom) */}
            <path
              d="M300 470 V520 a14 14 0 0 1 -14 14 H250"
              fill="none"
              stroke={t.outlineVariant}
              strokeWidth="2"
            />
          </svg>

          {/* PHONE */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: 270,
              height: 552,
              borderRadius: 46,
              background: "#0B0F14",
              padding: 11,
              boxShadow:
                "0 40px 90px rgba(2,17,8,0.28), 0 12px 30px rgba(2,17,8,0.18)",
              animation: "networkFloat 8s ease-in-out infinite",
            }}
          >

            {/* Side buttons */}
            <div style={{ position: "absolute", left: -2, top: 130, width: 3, height: 56, borderRadius: 3, background: "#0B0F14" }} />
            <div style={{ position: "absolute", left: -2, top: 196, width: 3, height: 40, borderRadius: 3, background: "#0B0F14" }} />
            <div style={{ position: "absolute", right: -2, top: 160, width: 3, height: 70, borderRadius: 3, background: "#0B0F14" }} />

            {/* Screen */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: 36,
                overflow: "hidden",
                background: "#F1F5F9",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {/* Dynamic Island */}
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 92,
                  height: 26,
                  borderRadius: 14,
                  background: "#0B0F14",
                  zIndex: 5,
                }}
              />

              {/* App content */}
              <div style={{ padding: "44px 14px 14px", height: "100%", boxSizing: "border-box", overflow: "hidden" }}>
                {/* Top bar */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: t.onSurface, display: "flex", alignItems: "center", gap: 6 }}>
                      Welcome back, CertySign
                      <span style={{ fontSize: 8, fontWeight: 700, color: t.primary, background: "rgba(22,163,74,0.12)", padding: "2px 6px", borderRadius: 6 }}>
                        Owner
                      </span>
                    </div>
                    <div style={{ fontSize: 8.5, color: t.secondary, marginTop: 2 }}>Last login: Today at 11:18 AM</div>
                  </div>
                </div>

                {/* Hero gradient card */}
                <div
                  style={{
                    borderRadius: 18,
                    padding: 14,
                    background: "linear-gradient(150deg, #0E3B2E 0%, #16A34A 100%)",
                    color: "#fff",
                    marginBottom: 12,
                  }}
                >
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: "rgba(255,255,255,0.16)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, fontStyle: "italic", letterSpacing: "-0.02em" }}>Timestamp Authority</div>
                  <div style={{ fontSize: 8.5, lineHeight: 1.5, opacity: 0.9, marginTop: 5, fontStyle: "italic" }}>
                    RFC 3161 compliant · Post-Quantum ready · Legally binding timestamps
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 5, marginTop: 10, background: "rgba(255,255,255,0.14)", padding: "3px 8px", borderRadius: 8, fontSize: 8.5, fontWeight: 600 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7CFFB0" }} />
                    Operational
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 9 }}>
                    {["RFC 3161", "Post-Quantum", "Hybrid Signatures", "HSM Backed", "eIDAS Compliant"].map((c) => (
                      <span key={c} style={{ fontSize: 7.5, fontWeight: 600, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)", padding: "3px 7px", borderRadius: 7 }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stat grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
                  {[
                    { label: "Total Timest...", value: "0", accent: "#3B82F6", bg: "#F8FAFC", glyph: "#" },
                    { label: "Success Rate", value: "100.0%", accent: "#16A34A", bg: "#ECFDF3", glyph: "✓" },
                    { label: "Avg Latency", value: "1000ms", accent: "#F59E0B", bg: "#FFFBEB", glyph: "⚡" },
                    { label: "Uptime", value: "1134.5h", accent: "#8B5CF6", bg: "#F5F3FF", glyph: "∿" },
                  ].map((s) => (
                    <div key={s.label} style={{ background: "#fff", border: `1px solid ${t.outlineVariant}`, borderRadius: 12, padding: "9px 10px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
                        <span style={{ width: 18, height: 18, borderRadius: 6, background: s.bg, color: s.accent, fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {s.glyph}
                        </span>
                        <span style={{ fontSize: 7.5, color: t.secondary }}>{s.label}</span>
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 800, fontStyle: "italic", color: t.onSurface }}>{s.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tabs */}
                <div style={{ display: "flex", gap: 12, fontSize: 9, paddingBottom: 8, borderBottom: `1px solid ${t.outlineVariant}`, marginBottom: 10 }}>
                  <span style={{ fontWeight: 700, color: t.onSurface }}>Timestamp</span>
                  <span style={{ color: t.secondary }}>Verify</span>
                  <span style={{ color: t.secondary }}>Explorer</span>
                  <span style={{ color: t.secondary }}>Developer</span>
                </div>

                {/* Request panel */}
                <div style={{ background: "#fff", border: `1px solid ${t.outlineVariant}`, borderRadius: 12, padding: 11 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 11, fontWeight: 700, color: t.onSurface }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={t.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z" />
                      <path d="M5 13a7 7 0 0 0 14 0" />
                    </svg>
                    Request a Timestamp
                  </div>
                  <div style={{ fontSize: 8.5, color: t.secondary, marginTop: 5, lineHeight: 1.5, fontStyle: "italic" }}>
                    Hash your data and receive a cryptographically signed RFC 3161 timestamp.
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* FLOATING CARD: Award (top-left) */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 70,
              zIndex: 3,
              width: 150,
              background: "#fff",
              borderRadius: 16,
              padding: "12px 14px",
              boxShadow: "0 20px 45px rgba(0,0,0,.10)",
              border: `1px solid ${t.outlineVariant}`,
              animation: "floatCard 7s ease-in-out infinite",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 16 }}>🏆</span>
              <span style={{ fontSize: 16, fontWeight: 800, color: t.onSurface }}>#1</span>
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, color: t.onSurface, lineHeight: 1.4 }}>
              Trusted e-signature platform in Kenya
            </div>
          </div>

          {/* FLOATING CARD: Latency (left) */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 240,
              zIndex: 3,
              width: 160,
              background: "linear-gradient(160deg, #0E3B2E 0%, #123524 100%)",
              borderRadius: 16,
              padding: 14,
              color: "#fff",
              boxShadow: "0 20px 45px rgba(0,0,0,.16)",
              animation: "floatCard 6s ease-in-out infinite",
              animationDelay: "0.4s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
              <span style={{ width: 20, height: 20, borderRadius: 6, background: "rgba(255,255,255,0.14)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>⚡</span>
              <span style={{ fontSize: 10, fontWeight: 600 }}>Sign Time</span>
            </div>

            {/* mini waveform */}
            <svg width="100%" height="34" viewBox="0 0 130 34" style={{ display: "block", marginBottom: 6 }}>
              <path d="M0 24 L18 16 L34 22 L52 8 L70 18 L88 12 L106 22 L130 14" fill="none" stroke="#7CFFB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
              <span style={{ fontSize: 26, fontWeight: 800, fontStyle: "italic" }}>30</span>
              <span style={{ fontSize: 10, opacity: 0.85 }}>seconds</span>
            </div>

          </div>

          {/* FLOATING CARD: Users (bottom-center) */}
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: "42%",
              transform: "translateX(-50%)",
              zIndex: 3,
              width: 170,
              background: "#fff",
              borderRadius: 16,
              padding: "14px 16px",
              textAlign: "center",
              boxShadow: "0 20px 45px rgba(0,0,0,.10)",
              border: `1px solid ${t.outlineVariant}`,
              animation: "floatCard 7s ease-in-out infinite",
              animationDelay: "0.8s",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
              {["#16A34A", "#0E3B2E", "#3B82F6"].map((c, i) => (
                <span key={i} style={{ width: 26, height: 26, borderRadius: "50%", background: c, border: "2px solid #fff", marginLeft: i ? -8 : 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg>
                </span>
              ))}
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, fontStyle: "italic", color: t.onSurface }}>50K+</div>
            <div style={{ fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: t.secondary, marginTop: 2 }}>
              Verified Signatures
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



const features = [
  { icon: "draw", title: "Make Digital Signatures", desc: "Create legally binding signatures in seconds." },
  { icon: "badge", title: "Digital Signature Certificates", desc: "X.509 certificates for individuals and organizations." },
  { icon: "verified_user", title: "PKI Digital Signatures", desc: "Cryptographically secure. Non-repudiation." },
  { icon: "lock", title: "Tamper-Proof Verification", desc: "Detect any change after signing." },
  { icon: "schedule", title: "Trusted Timestamp Authority", desc: "Proof of exact signing time." },
  { icon: "account_tree", title: "Workflow Automation", desc: "Multi-level approvals in real time." },
];

function FeaturesSection() {
  return (
    <section id="features" style={{ padding: "80px 64px", background: t.surfaceLow }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div data-reveal style={{ ...revealStyle(0), textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: t.onSurface, marginBottom: 16 }}>
            Core Platform Capabilities
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 20, color: t.secondary, maxWidth: 640, margin: "0 auto" }}>
            Make signatures. Verify documents. Enterprise-grade PKI.
          </p>
        </div>

        <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
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
              <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: t.onSurface, marginBottom: 10 }}>
                {f.title}
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: t.onSurfaceVariant, lineHeight: 1.5 }}>
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
  { icon: "bolt", title: "Faster Contracts", desc: "Close deals in minutes.", accent: "#4ade80" },
  { icon: "description", title: "Less Paperwork", desc: "Go fully paperless.", accent: "#60a5fa" },
  { icon: "gavel", title: "Legally Binding", desc: "Global e-signature standards.", accent: "#f59e0b" },
  { icon: "security", title: "Secure Workflows", desc: "End-to-end encryption.", accent: "#a78bfa" },
];


 function ProductShowcaseSection() {
  return (
    <section
      style={{
        padding: "120px 64px",
        background: t.surfaceLowest,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          data-reveal
          style={{
            ...revealStyle(0),
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 24,
              height: 2,
              background: t.primary,
              borderRadius: 2,
            }}
          />

          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: t.primary,
            }}
          >
            Product Experience
          </span>
        </div>

        <div
          data-reveal
          style={{
            ...revealStyle(80),
          }}
        >
          <h2
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 20,
              color: t.onSurface,
            }}
          >
            Everything You Need
            <br />
            for Digital Trust
          </h2>

          <p
            style={{
              maxWidth: 560,
              margin: "0 auto 60px",
              fontFamily: "Inter, sans-serif",
              fontSize: 20,
              lineHeight: 1.5,
              color: t.secondary,
            }}
          >
            Legally binding signatures. PKI identity verification. Tamper-proof audit trails.
          </p>
        </div>

        <div
          data-reveal
          style={{
            ...revealStyle(160),
            position: "relative",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 600,
              height: 600,
              borderRadius: "50%",
              background: `${t.primary}15`,
              transform: "translate(-50%, -50%)",
              filter: "blur(90px)",
              zIndex: 0,
            }}
          />

          <img
            src="/images/mockups/certysign-mockups.png"
            alt="CertySign Platform"
            style={{
              width: "100%",
              maxWidth: 1100,
              display: "block",
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
              animation: "showcaseFloat 8s ease-in-out infinite",
              filter:
                "drop-shadow(0 30px 60px rgba(0,0,0,0.12))",
            }}
          />
        </div>
      </div>
    </section>
  );
}


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
              Why CertySign
            </span>
          </div>

          {/* Centre heading */}
          <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, color: t.onSurface, margin: 0, textAlign: "center", whiteSpace: "normal" }}>
            Why <span style={{ color: t.primary }}>CertySign</span>
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
                fontSize: 20,
                fontWeight: 700,
                color: t.onSurface,
                margin: "0 0 8px",
                lineHeight: 1.3,
              }}>
                {b.title}
              </h4>

              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 16,
                color: t.secondary,
                lineHeight: 1.5,
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


const useCases = [
  {
    tag: "Public Sector",
    icon: "account_balance",
    title: "Government & Public Sector",
    items: ["Government contracts", "Procurement approvals", "Court & legal filings", "Licenses & permits", "Citizen service forms"],
    note: "Sign digitally — no print, stamp, or scan.",
  },
  {
    tag: "Legal",
    icon: "gavel",
    title: "Legal Industry",
    items: ["Contracts & NDAs", "Affidavits", "Partnership agreements", "Client engagement letters", "Court documentation"],
    note: "Immutable audit trails. Timestamp verification.",
  },
  {
    tag: "Finance",
    icon: "payments",
    title: "Banking & Financial Services",
    items: ["Loan agreements", "Account opening", "Mortgage documents", "Investment contracts", "KYC compliance"],
    note: "PKI-backed signatures. Tamper-proof records.",
  },
  {
    tag: "Enterprise",
    icon: "corporate_fare",
    title: "Corporate & Enterprise",
    items: ["Vendor agreements", "Procurement approvals", "HR contracts", "Board resolutions", "Policy approvals"],
    note: "Legal → Finance → CEO → Client — all digital.",
  },
  {
    tag: "HR",
    icon: "groups",
    title: "Human Resources",
    items: ["Employment contracts", "Offer letters", "NDAs", "Performance agreements", "Policy acknowledgements"],
    note: "Faster onboarding. No paper.",
  },
  {
    tag: "Healthcare",
    icon: "local_hospital",
    title: "Healthcare",
    items: ["Patient consent forms", "Insurance documentation", "Medical records authorization", "Healthcare agreements"],
    note: "Authenticity & regulatory compliance.",
  },
  {
    tag: "Real Estate",
    icon: "apartment",
    title: "Real Estate",
    items: ["Lease agreements", "Property sale contracts", "Mortgage documents", "Tenant agreements"],
    note: "Days to minutes — fully online.",
  },
  {
    tag: "Procurement",
    icon: "local_shipping",
    title: "Procurement & Supply Chain",
    items: ["Supplier contracts", "Purchase agreements", "Delivery confirmations", "Vendor onboarding"],
    note: "Faster cycles. Secure validation.",
  },
  {
    tag: "Education",
    icon: "school",
    title: "Education Sector",
    items: ["Academic certificates", "Transcripts", "Student consent forms", "Research agreements"],
    note: "Prevent certificate fraud.",
  },
  {
    tag: "SME",
    icon: "storefront",
    title: "SMEs & Startups",
    items: ["Service contracts", "Freelancer agreements", "Partnership deals", "Client onboarding"],
    note: "Affordable. Fast. Paperless.",
  },
  {
    tag: "International",
    icon: "public",
    title: "Cross-Border Agreements",
    items: ["Global vendor contracts", "International partnerships", "Digital trade agreements"],
    note: "Verifiable trust across jurisdictions.",
  },
  {
    tag: "Verification",
    icon: "qr_code_scanner",
    title: "Document Verification",
    items: ["Signature verification", "Timestamp confirmation", "QR code lookup", "Public authenticity checks"],
    note: "Upload a signed PDF — confirm instantly.",
  },
];

function UseCasesSection() {
  return (
    <section id="use-cases" style={{ padding: "96px 64px", background: t.surfaceContainer }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div data-reveal style={{ ...revealStyle(0), textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: t.primary }}>
            Who Uses CertySign
          </span>
          <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 700, color: t.onSurface, margin: "16px 0", lineHeight: 1.1 }}>
            Use Cases Across Every Industry
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 20, color: t.secondary, maxWidth: 680, margin: "0 auto", lineHeight: 1.5 }}>
            Secure digital workflows wherever trust matters.
          </p>
        </div>

        <div className="use-cases-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {useCases.map((sector, i) => (
            <div
              key={sector.title}
              data-reveal
              style={{
                ...revealStyle(i * 60),
                background: t.surfaceLowest,
                border: `1px solid ${t.outlineVariant}`,
                borderRadius: 20,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                transition: "box-shadow 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; e.currentTarget.style.borderColor = `${t.primary}55`; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = t.outlineVariant; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: `${t.primary}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: t.primary }}>{sector.icon}</span>
                </div>
                <div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: t.primary }}>{sector.tag}</div>
                  <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: t.onSurface, margin: "4px 0 0", lineHeight: 1.2 }}>{sector.title}</h3>
                </div>
              </div>

              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {sector.items.map((item) => (
                  <li key={item} style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: t.onSurfaceVariant, display: "flex", alignItems: "flex-start", gap: 8, lineHeight: 1.4 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16, color: t.primary, marginTop: 2, flexShrink: 0 }}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>

              {sector.note && (
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: t.primary, margin: 0, paddingTop: 8, borderTop: `1px solid ${t.outlineVariant}` }}>
                  {sector.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




const complianceItems = [
  { icon: "verified_user", title: "Data Protection Act", desc: "Kenya DPA compliant. Data stays sovereign." },
  { icon: "workspace_premium", title: "ISO 27001 Certified", desc: "Gold standard information security." },
  { icon: "account_balance", title: "CAK Authorized ECSP", desc: "Licensed by Communications Authority of Kenya." },
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
     {/* Fine dot grid overlay */}
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

         <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.15, margin: 0 }}>
           Enterprise-Grade<br />
           <span style={{ color: t.primaryDim }}>Security.</span>
         </h2>
         <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, lineHeight: 1.6, opacity: 0.75, margin: 0 }}>
           PKI infrastructure. End-to-end encryption. Legally binding under Kenyan and international law.
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
             <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 20, fontWeight: 600, lineHeight: 1.45, margin: "0 0 8px", color: "#fff" }}>
               Trusted by enterprises across Kenya.
             </p>
             <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, opacity: 0.5 }}>CertySign Security Guarantee</span>
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
    <section 
    style={{ padding: "80px 64px", background: t.surfaceLowest }
    
    }>
      <div
        data-reveal
        style={{
          ...revealStyle(0),
          maxWidth: 1000,
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
       

   <img
     className="cta-phone"
     src="/images/mockups/mock-3.png"
     alt="CertySign TSA"
     style={{
      position: "absolute",
      width: 510,
      right: "-140px",
      bottom: "-30px",
      }}
      />


    <style>{`
    @media (max-width: 768px) {
      .cta-phone {
      display: none !important;
       }
       }
      `}</style>

       <div style={{ position: "relative", zIndex: 1 }}></div>


        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: 16 }}>
            Start Signing Today
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 20, lineHeight: 1.5, color: "#c0c9d0", maxWidth: 560, margin: "0 auto 28px" }}>
            Join organizations securing documents with enterprise-grade PKI.
          </p>


          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="https://certysign.io/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}   
              >   

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
                Get Started Free
              </button>
            </a>
            <Link href="/contact/sales" style={{ textDecoration: "none" }}>
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
                Contact Sales
              </button>
            </Link>
            <Link href="/contact/support" style={{ textDecoration: "none" }}>
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
                Contact Support
              </button>
            </Link>
          </div>

          
        </div>

        {/* Glow blobs */}
        <div style={{ position: "absolute", bottom: -48, right: -48, width: 256, height: 256, background: t.primary, opacity: 0.2, borderRadius: "50%", filter: "blur(48px)" }} />
        <div style={{ position: "absolute", top: -48, left: -48, width: 192, height: 192, background: t.primary, opacity: 0.1, borderRadius: "50%", filter: "blur(40px)" }} />
      </div>
    </section>
  );
}


export default function CertySign() {
  const root = useRef(null);
  useReveal(root);

  return (
    <>
      <SEO
        title="CertySign - Sign With Certainty"
        description="Sign with certainty. Kenya's digital signature, e-KYC and document trust platform. Create legally binding signatures at certysign.io. ECSP licensed by CAK."
        keywords="CertySign, digital signatures Kenya, PKI, e-KYC, CAK licensed, digital certificate"
        url="/products/certysign"
        image="/images/mockups/certysign-mockups.png"
        type="product"
      />
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

        .use-cases-grid {
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

        .use-cases-grid {
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
        <ProductShowcaseSection />
        <BenefitsSection />
        <UseCasesSection />
        <SecuritySection />
        <CTASection />
      </div>

    </>
  );
}