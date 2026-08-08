import Section from '@/components/layout/Section'
import { partners } from '@/lib/theme'

export default function Partners() {
  const marqueePartners = [...partners, ...partners]

  return (
    <>
      <style>{`
        @keyframes partners-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .partners-track {
          display: flex;
          width: max-content;
          align-items: center;
          animation: partners-scroll 55s linear infinite;
        }

        .partners-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <Section className="relative overflow-hidden border-y border-white/[0.08] bg-[#06111a] py-24 text-white">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(47,118,82,0.12),transparent)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="m-0 text-[11px] font-bold uppercase tracking-[0.22em] text-white/50">
              Our Partners
            </p>
            <h2 className="m-0 mt-5 font-display text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-tight tracking-[-0.02em] text-white">
              Trusted by leading organizations across Kenya
            </h2>
          </div>

          {/* Light glass rail — logos stay visible in full color */}
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.94] py-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl md:py-10">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/95 to-[#f4f7f5]"
              aria-hidden
            />

            <div
              className="relative"
              style={{
                WebkitMaskImage:
                  'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                maskImage:
                  'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              }}
            >
              <div className="partners-track">
                {marqueePartners.map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="mx-8 flex h-[76px] w-48 flex-shrink-0 items-center justify-center rounded-xl border border-[#e8edf2] bg-white px-6 shadow-[0_4px_20px_rgba(6,17,26,0.06)] transition duration-300 hover:border-[#2f7652]/35 hover:shadow-[0_8px_28px_rgba(47,118,82,0.12)] md:mx-10 md:h-20 md:w-52"
                  >
                    <img
                      src={partner.src}
                      alt={partner.name}
                      title={partner.name}
                      className="max-h-12 w-auto max-w-[150px] object-contain md:max-h-[52px]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
