


import Link from "next/link";
import Section from "@/components/layout/Section";

const services = [
  {
    badge: "LIVE",
    badgeColor: "#16A34A",
    badgeBg: "#DCFCE7",
    title: "PKI as a Service",
    body: "Managed certificate issuance, digital signatures, trusted timestamping, and document verification — delivered as a secure cloud service under our CAK ECSP license. No hardware, no cryptography team required.",
    href: "/products/certysign",
    cta: "Powered by CertySign",
  },
  {
    badge: "COMING SOON",
    badgeColor: "#D97706",
    badgeBg: "#FEF3C7",
    title: "HSM as a Service",
    body: "Dedicated hardware security modules for cryptographic key generation, storage, and signing — hosted in Kenya with full data sovereignty. Join the waitlist to get early access.",
    href: "/contact",
    cta: "Join the waitlist",
  },
  {
    badge: "AVAILABLE",
    badgeColor: "#0D9488",
    badgeBg: "#CCFBF1",
    title: "Health Security & Digital Health Assurance",
    body: "Independent security and privacy assurance for EMRs, telemedicine platforms, health APIs, mobile health apps, and cloud-hosted patient data — with accredited digital health specialists.",
    href: "/health-security",
    cta: "Learn about health security",
  },
  {
    badge: "24/7 AVAILABLE",
    badgeColor: "#235e43",
    badgeBg: "#E8F5EE",
    title: "Custom Software Development",
    body: "Need software built? Our engineering team designs, builds, and maintains secure systems for organizations across Kenya, East Africa, and beyond.",
    href: "/contact",
    cta: "Reach us any time",
  },
];

export default function Services() {
  return (
    <Section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <span className="eyebrow">
            Infrastructure Services
          </span>

          <h2 className="mt-4 text-[42px] leading-tight font-bold text-navy">
            Trust infrastructure,
            <br />
            delivered as a service.
          </h2>

          <p className="mt-5 text-lg leading-8 text-ink-muted">
            We operate Kenya&apos;s licensed public key infrastructure so your
            organization can focus on innovation instead of infrastructure — and we extend
            that same rigour to the health platforms that carry patient data.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                borderColor: "#E5E7EB",
              }}
            >
              {/* Top Accent */}
              <div
                style={{
                  height: "5px",
                  background: "#235e43",
                }}
              />

              <div className="p-8 flex flex-col h-full">

                <span
                  style={{
                    alignSelf: "flex-start",
                    padding: "8px 14px",
                    borderRadius: "999px",
                    background: service.badgeBg,
                    color: service.badgeColor,
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: ".08em",
                    marginBottom: "22px",
                  }}
                >
                  {service.badge}
                </span>

                <h3 className="text-2xl font-bold text-navy mb-4">
                  {service.title}
                </h3>

                <p className="text-ink-muted leading-8 flex-1">
                  {service.body}
                </p>

                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold no-underline transition-all duration-300 hover:gap-3"
                  style={{
                    color: "#235e43",
                  }}
                >
                  {service.cta}

                  <span
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    →
                  </span>
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}