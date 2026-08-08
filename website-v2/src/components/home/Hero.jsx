
import Link from 'next/link'
import { ArrowRight, ShieldCheck,
  Activity,
  BadgeCheck,} from "lucide-react";
import { MEET_URL } from '@/lib/site'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#06111a] text-white min-h-screen flex items-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/africa-network.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041019]/95 via-[#07151d]/75 to-[#08161d]/40" />

      {/* Background Glow */}
      <div className="absolute -left-40 bottom-[-120px] h-[500px] w-[500px] rounded-full bg-[#2f7652]/40 blur-[140px]" />
      <div className="absolute right-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-[#2f7652]/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1450px] items-center justify-between px-8 py-24 lg:px-16">

        {/* LEFT */}
        <div className="max-w-[620px]">

          <h1 className="text-[64px] font-black leading-[1.05] tracking-[-2px]">

            Building the Trust Layer
            <br />

            for{" "}

            <span className="text-[#38c172]">
              Africa's
            </span>{" "}

            Digital Economy

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-[540px] text-[22px] leading-[1.7] text-white/70">

            Secure digital identity, trusted signing,
            governance and business platforms — and independent cybersecurity
            assurance for the health systems that serve millions across East Africa.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/products/certysign"
              className="group flex h-16 items-center gap-3 rounded-lg bg-[#2f7652] px-9 text-lg font-semibold text-white no-underline transition-all duration-300 hover:bg-[#235e43] hover:shadow-[0_0_35px_rgba(47,118,82,.45)]"
            >
              Explore Products
              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <a
              href={MEET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 items-center rounded-lg border border-white/30 px-9 text-lg font-semibold text-white no-underline backdrop-blur-md transition hover:border-white hover:bg-white/10"
            >
              Book a Meeting
            </a>

          </div>

          {/* Bottom Trust */}

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-6 text-sm text-white/75">

            <div className="flex items-center gap-3">
              <div className="h-9 w-px bg-white/20" />
              <div>
                <div className="font-semibold text-white">
                  ISO 27001
                </div>
                <div>Certified</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-9 w-px bg-white/20" />
              <div>
                <div className="font-semibold text-white">
                  Kenya DPA
                </div>
                <div>Compliant</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-9 w-px bg-white/20" />
              <div>
                <div className="font-semibold text-white">
                  CAK
                </div>
                <div>Licensed</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-9 w-px bg-white/20" />
              <div>
                <div className="font-semibold text-white">
                  Serving
                </div>
                <div>East Africa</div>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative hidden h-[760px] w-[700px] lg:block">

         

          {/* Top Card */}

<div className="absolute left-1/2 top-[40px] w-[190px] -translate-x-1/2 rounded-[22px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-[24px] shadow-[0_20px_60px_rgba(0,0,0,.35)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03]">

  <div className="flex justify-center">

    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#235e43]">

      <ShieldCheck className="h-5 w-5 text-white" strokeWidth={2.2} />

     
    </div>

  </div>

  <h3 className="mt-4 text-center text-lg font-semibold">
    Secure Platform
  </h3>

  <p className="mt-2 text-center text-sm leading-6 text-white/60">
    Enterprise grade security & privacy
  </p>

</div>


{/* Right Card */}

<div className="absolute right-[15px] top-[310px] w-[185px] rounded-[22px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-[24px] shadow-[0_20px_60px_rgba(0,0,0,.35)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03]">

  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#235e43]">

  <BadgeCheck className="h-5 w-5 text-white" strokeWidth={2.2} />
  

  </div>

  <h3 className="mt-4 text-lg font-semibold">
    Kenya DPA
  </h3>

  <p className="mt-2 text-sm text-white/65">
    Data Protection Compliant
  </p>

</div>


{/* Center Performance Card */}

<div className="absolute left-[15px] top-[310px] w-[185px] rounded-[22px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-[24px] shadow-[0_20px_60px_rgba(0,0,0,.35)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03]">
  <Activity className="h-5 w-5 text-white" strokeWidth={2.2} />

  <div className="text-4xl font-black">
    99.98%
  </div>

  <p className="mt-1 text-white/75">
    Platform Uptime
  </p>

  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">

    <div className="h-full w-[99%] rounded-full bg-[#38c172]" />

  </div>

</div>



        </div>

      </div>


      <style jsx>{`
  @keyframes floatSlow {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-14px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes floatMedium {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-22px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes floatFast {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes pulseGlow {
    0% {
      opacity: 0.4;
      transform: scale(0.95);
    }

    50% {
      opacity: 0.9;
      transform: scale(1.05);
    }

    100% {
      opacity: 0.4;
      transform: scale(0.95);
    }
  }

  @keyframes shine {
    from {
      transform: translateX(-120%);
    }

    to {
      transform: translateX(220%);
    }
  }

  .floatSlow {
    animation: floatSlow 7s ease-in-out infinite;
  }

  .floatMedium {
    animation: floatMedium 6s ease-in-out infinite;
  }

  .floatFast {
    animation: floatFast 5s ease-in-out infinite;
  }

  .pulseGlow {
    animation: pulseGlow 5s ease-in-out infinite;
  }

  .shine {
    animation: shine 0.8s linear;
  }
`}</style>

    </section>
    

    
  );
}