


import Section from "@/components/layout/Section";

const reasons = [
  {
    title: "Built for Africa",
    body: "Designed specifically for Kenyan and East African markets with local regulations and needs in mind.",
  },
  {
    title: "Compliance first",
    body: "Fully aligned with Kenya DPA, ISO 27001, CAK regulations, and international security standards.",
  },
  {
    title: "Proven track record",
    body: "2+ years serving government agencies, CSOs, financial institutions, and enterprises across Kenya.",
  },
  {
    title: "End-to-end support",
    body: "From onboarding and training to ongoing technical support and system maintenance.",
  },
  {
    title: "Health security ready",
    body: "We understand clinical workflows, patient data sensitivity, and health-sector regulation — through our IntelliSOFT partnership and licensed digital trust expertise.",
  },
];

export default function WhyRCFI() {
  return (
    <Section className="py-24 border-y border-line bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-start">

        {/* Left */}
        <div className="sticky top-28">
          <span className="eyebrow">
            Why Choose RCFI
          </span>

          <h2
            className="mt-4 text-[38px] leading-tight font-bold text-navy"
            style={{ maxWidth: 500 }}
          >
            Built for Africa,
            <br />
            trusted by leaders.
          </h2>

          <p
            className="mt-5 text-ink-muted leading-8"
            style={{ maxWidth: 500 }}
          >
            We deliver secure, compliant, and scalable digital solutions
            tailored for governments, financial institutions, enterprises,
            and development organizations across Africa.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5 mt-10">

            <div
              className="rounded-3xl border bg-white"
              style={{
                padding: "26px",
                borderColor: "#E5E7EB",
                boxShadow: "0 10px 35px rgba(0,0,0,.05)",
              }}
            >
              <h3
                style={{
                  color: "#235e43",
                  fontSize: "2.4rem",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                100%
              </h3>

              <p className="text-sm text-ink-muted m-0 leading-6">
                Data sovereignty with hosting in Kenya.
              </p>
            </div>

            <div
              className="rounded-3xl border bg-white"
              style={{
                padding: "26px",
                borderColor: "#E5E7EB",
                boxShadow: "0 10px 35px rgba(0,0,0,.05)",
              }}
            >
              <h3
                style={{
                  color: "#235e43",
                  fontSize: "2.4rem",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                24/7
              </h3>

              <p className="text-sm text-ink-muted m-0 leading-6">
                Continuous monitoring with a 99.95% uptime SLA.
              </p>
            </div>

          </div>
        </div>

        {/* Right */}
        <div className="space-y-5">
          {reasons.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                borderColor: "#E5E7EB",
              }}
            >
              {/* Accent Line */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "5px",
                  background: "#235e43",
                }}
              />

              <div className="flex gap-6 p-8">

                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "#EEF7F2",
                    color: "#235e43",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  0{index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {item.title}
                  </h3>

                  <p className="text-ink-muted leading-7">
                    {item.body}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}