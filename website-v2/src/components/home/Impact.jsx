// import Section from '@/components/layout/Section'
// import { scenes } from '@/lib/theme'

// const stats = [
//   { value: '10,000+', label: 'Users served across government, CSOs, and enterprises' },
//   { value: '47', label: 'Counties reached nationwide' },
//   { value: '99.95%', label: 'Guaranteed uptime SLA' },
//   { value: '2+', label: 'Years driving digital innovation in Kenya' },
// ]

// export default function Impact() {
//   return (
//     <Section background={scenes.kenyaDark()} className="py-[72px] text-white">
//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//         {stats.map((stat) => (
//           <div key={stat.value} className="flex flex-col gap-1.5 border-l-[3px] border-green pl-5">
//             <span className="font-display text-4xl font-extrabold">{stat.value}</span>
//             <span className="text-sm text-ink-mist">{stat.label}</span>
//           </div>
//         ))}
//       </div>
//     </Section>
//   )
// }



import Section from "@/components/layout/Section";

const stats = [
  {
    value: "10,000+",
    label: "Users served across government, CSOs, and enterprises",
  },
  {
    value: "47",
    label: "Counties reached nationwide",
  },
  {
    value: "99.95%",
    label: "Guaranteed uptime SLA",
  },
  {
    value: "2+",
    label: "Years driving digital innovation in Kenya",
  },
];

export default function Impact() {
  return (
    <Section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="eyebrow">Our Impact</span>

          <h2 className="mt-4 text-[40px] font-bold text-navy">
            Trusted across Kenya
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-ink-muted">
            Delivering secure digital infrastructure that empowers governments,
            enterprises and development organizations.
          </p>
        </div>

        {/* Stats Container */}
        <div
          className="relative overflow-hidden rounded-[32px] border"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #F7FAF8 100%)",
            borderColor: "#E6ECE8",
            boxShadow: "0 20px 60px rgba(0,0,0,.05)",
          }}
        >
          {/* Decorative Glow */}
          <div
            style={{
              position: "absolute",
              width: "320px",
              height: "320px",
              right: "-100px",
              top: "-100px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(35,94,67,.08), transparent 70%)",
            }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 relative">

            {stats.map((stat, index) => (
              <div
                key={stat.value}
                className="group relative p-10 transition-all duration-300 hover:bg-[#F8FBF9]"
                style={{
                  borderRight:
                    index !== stats.length - 1 && index !== 1
                      ? "1px solid #E6ECE8"
                      : undefined,
                  borderBottom:
                    index < 2
                      ? "1px solid #E6ECE8"
                      : undefined,
                }}
              >
                {/* Small Accent */}
                <div
                  style={{
                    width: 45,
                    height: 5,
                    borderRadius: 999,
                    background: "#235e43",
                    marginBottom: 22,
                  }}
                />

                <h3
                  style={{
                    color: "#235e43",
                    fontSize: "3rem",
                    fontWeight: 800,
                    lineHeight: 1,
                    marginBottom: 18,
                  }}
                >
                  {stat.value}
                </h3>

                <p
                  className="text-ink-muted"
                  style={{
                    lineHeight: 1.8,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </Section>
  );
}