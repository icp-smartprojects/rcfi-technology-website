import Link from 'next/link'
import SEO from '@/components/layout/SEO'
import Section from '@/components/layout/Section'
import { bg, images, scenes } from '@/lib/theme'
import { MEET_URL } from '@/lib/site'

export default function ElanoPage() {
  return (
    <>
      <SEO
        title="Elano — Governance & Intelligence"
        description="Govern Kenyan institutions digitally with registration, board governance, strategic planning, MEARL, and financial management."
      />



      <Section
  background={bg.hero(images.team)}
  className="relative overflow-hidden py-[120px] text-white"
>

  <div className="relative flex flex-col items-center text-center">

    <h1 className="
      m-0
      max-w-[900px]
      font-display
      text-[54px]
      font-extrabold
      leading-[1.05]
      drop-shadow-xl
      sm:text-[72px]
    ">

      Digital Governance
      <span className="block text-green-mint">
        Made Simple
      </span>

    </h1>



    {/* Description */}

    <p className="
      mt-8
      max-w-[680px]
      text-lg
      leading-relaxed
      text-white/80
    ">

      Streamline institutional registration,
      board governance, compliance, strategic
      planning and certification through one
      secure digital platform.

    </p>




    {/* Buttons */}

    <div className="mt-10 flex gap-4">

      <a href={MEET_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
        Book a Demo
      </a>


      <a href={MEET_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
        Book a Sales Call
      </a>


    </div>





    {/* TRUST BAR */}

    <div className="
      mt-16
      grid
      w-full
      max-w-[850px]
      grid-cols-1
      overflow-hidden
      rounded-3xl
      border
      border-white/20
      bg-white/10
      backdrop-blur-xl
      sm:grid-cols-3
    ">


      {[
        {
          number:"500+",
          text:"Organizations"
        },
        {
          number:"1,000+",
          text:"Board Meetings"
        },
        {
          number:"2,000+",
          text:"Certificates"
        }

      ].map((item)=>(

        <div
          key={item.text}
          className="
          border-white/10
          p-6
          sm:border-r
          last:border-none
          "
        >

          <div className="text-3xl font-extrabold">
            {item.number}
          </div>

          <div className="mt-1 text-sm text-white/60">
            {item.text}
          </div>


        </div>

      ))}


    </div>


  </div>


</Section>



<Section className="border-b border-line bg-white py-16">
  <div className="flex flex-col items-center gap-6 text-center">

    <div className="band-heading flex flex-col items-center gap-4">

      <span className="eyebrow !text-[#235e43]">
        Trusted by Leading Organizations
      </span>

      <p className="band-lead m-0 max-w-[64ch] text-base leading-relaxed !text-black">
        NGOs, CSOs, microfinance institutions, county governments and
        development agencies use Elano to digitize governance,
        compliance and programme management.
      </p>

    </div>

    <div className="mt-2 flex flex-wrap justify-center gap-3">

      {[
        "Kenyan NGOs",
        "CSO Networks",
        "County Governments",
        "Development Agencies",
        "Microfinance Institutions",
        "Faith-Based Organizations",
      ].map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-[#dbe7df] bg-[#f7fbf8] px-5 py-2.5 text-sm font-semibold text-[#235e43] transition-all duration-300 hover:border-[#235e43] hover:bg-[#235e43] hover:text-white"
        >
          {tag}
        </span>
      ))}

    </div>

  </div>
</Section>
      


<Section className="relative overflow-hidden bg-[#235e43] py-[88px]">

  {/* subtle green background effects */}
  <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#2f7652] opacity-40 blur-3xl" />
  <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#17432f] opacity-40 blur-3xl" />

  <div className="relative flex flex-col gap-10">


    <div className="band-heading flex flex-col gap-3">

      <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#b9e3c9]">
        How It Works
      </span>

      <h2 className="m-0 max-w-[700px] font-display text-[36px] font-extrabold text-white">
        From registration to certified governance
      </h2>

      <p className="m-0 max-w-[650px] text-base leading-relaxed text-white/80">
        Elano connects registration, certification, governance and reporting
        into one secure digital workflow.
      </p>

    </div>



    <div className="grid gap-6 md:grid-cols-2">


      {[
        {
          n: '01',
          t: 'Register',
          b: 'Guided 6-step wizard with document upload for PBO, CBO, and CGRA legal tracks.'
        },
        {
          n: '02',
          t: 'Review & Certify',
          b: 'Admin review queue — approve, reject, clarify and issue certificates.'
        },
        {
          n: '03',
          t: 'Govern',
          b: 'Board management, meetings, resolutions, attendance and governance documents.'
        },
        {
          n: '04',
          t: 'Deliver & Report',
          b: 'Strategic plans, projects, M&E indicators, budgets and compliance reports.'
        },

      ].map((s)=>(


        <div
          key={s.n}
          className="
          group
          rounded-3xl
          border
          border-white/60
          bg-white
          p-8
          shadow-[0_20px_50px_rgba(0,0,0,0.15)]
          transition-all
          duration-300
          hover:-translate-y-2
          "
        >


          <div
            className="
            mb-6
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-[#235e43]
            text-lg
            font-extrabold
            text-white
            "
          >
            {s.n}
          </div>


          <h3
            className="
            m-0
            font-display
            text-xl
            font-bold
            text-[#102a1f]
            "
          >
            {s.t}
          </h3>


          <p
            className="
            mt-4
            m-0
            text-sm
            leading-7
            text-gray-600
            "
          >
            {s.b}
          </p>


          <div
            className="
            mt-6
            h-1
            w-10
            rounded-full
            bg-[#235e43]
            transition-all
            duration-300
            group-hover:w-20
            "
          />

        </div>


      ))}


    </div>


  </div>

</Section>

    


<Section 
  background={bg.darkPanel(images.compliance)} 
  className="py-[88px] text-white"
>

  <div className="flex flex-col gap-9">

    <div className="flex max-w-[64ch] flex-col gap-2.5">

      <span className="eyebrow-light">
        Built for Compliance
      </span>

      <h2 className="m-0 font-display text-[36px] font-extrabold">
        Compliance-first governance
      </h2>

      <p className="m-0 text-base leading-relaxed text-ink-pale">
        Everything you need to register legally, run boards properly, and stay audit-ready.
      </p>

    </div>


    <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">

      {[
        { 
          t: 'Legal-track registration', 
          b: 'PBO, CBO, CGRA, NPO, CSO onboarding with document validation.' 
        },
        { 
          t: 'Admin review workflows', 
          b: 'Assign reviewers, approve, reject, or request clarification.' 
        },
        { 
          t: 'Public verification', 
          b: 'Searchable registry and certificate authenticity checks.' 
        },
        { 
          t: 'Governance compliance', 
          b: 'Board composition rules, quorum, and conflict-of-interest tracking.' 
        },
        { 
          t: 'Audit trails', 
          b: '7-year activity logging for registration and governance actions.' 
        },
        { 
          t: 'Role-based access', 
          b: 'Granular permissions for admins, reviewers, board, staff, and donors.' 
        },
      ].map((item) => (

        <div
          key={item.t}
          className="
            flex
            flex-col
            gap-1.5
            rounded-xl
            border
            border-white/15
            bg-white/[0.07]
            p-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:bg-white/[0.12]
            hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]
          "
        >

          <h3 className="m-0 font-display text-base font-bold">
            {item.t}
          </h3>

          <p className="m-0 text-sm leading-relaxed text-ink-pale">
            {item.b}
          </p>

        </div>

      ))}

    </div>

  </div>
</Section>


<Section className="bg-[#f8faf9] py-[88px]">

   <div className="flex flex-col gap-10">

    <div className="band-heading flex max-w-[760px] flex-col gap-3">

      <span className="eyebrow !text-[#235e43]">
        Platform in Action
      </span>

      <h2 className="heading-display m-0 text-[36px] !text-[#102a1f]">
        Registration, planning, M&E, finance, and reporting — together
      </h2>

      <p className="max-w-[650px] text-base leading-relaxed text-[#4b5563]">
        Elano brings every important institutional workflow into one
        connected platform — helping organizations operate,
        monitor, and report with confidence.
      </p>

    </div>



    <div className="grid gap-6 md:grid-cols-2">


      {[
        {
          t: 'Organization Registration',
          d: 'Complete digital registry of organizational structure.',
          f: [
            'Legal entity registration & governance mapping',
            'Leadership and board management',
            'Regulatory compliance tracking & document repository'
          ],
        },

        {
          t: 'Strategic Planning',
          d: 'Align goals, programmes, and resources.',
          f: [
            'Strategic plans and Theory of Change',
            'Programme and project management',
            'Activity tracking and milestone monitoring'
          ],
        },

        {
          t: 'MEARL Framework',
          d: 'Monitor performance, accountability, research, and learning.',
          f: [
            'Indicator tracking and data collection',
            'Performance dashboards and impact assessment',
            'Learning management'
          ],
        },

        {
          t: 'Financial Management & Reporting',
          d: 'Manage budgets, approvals, and reporting seamlessly.',
          f: [
            'Budget creation and expenditure tracking',
            'Approval workflows',
            'Donor reports and export-ready dashboards'
          ],
        },

      ].map((card) => (

        <div
          key={card.t}
          className="
            group
            rounded-2xl
            border
            border-[#d9e5dc]
            bg-white
            p-8
            shadow-[0_8px_25px_rgba(16,42,31,0.06)]
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-[#235e43]
            hover:shadow-[0_18px_40px_rgba(35,94,67,0.14)]
          "
        >

          <div
            className="
              mb-5
              h-1
              w-12
              rounded-full
              bg-[#235e43]
              transition-all
              duration-300
              group-hover:w-20
            "
          />


          <h3
            className="
              mb-3
              font-display
              text-xl
              font-bold
              text-[#102a1f]
            "
          >
            {card.t}
          </h3>


          <p
            className="
              mb-5
              text-sm
              leading-relaxed
              text-[#4b5563]
            "
          >
            {card.d}
          </p>


          <ul
            className="
              flex
              flex-col
              gap-3
              p-0
              text-sm
              text-[#374151]
            "
          >

            {card.f.map((item)=>(

              <li
                key={item}
                className="flex gap-3"
              >

                <span
                  className="
                    font-bold
                    text-[#235e43]
                  "
                >
                  ✓
                </span>

                {item}

              </li>

            ))}

          </ul>


        </div>

      ))}


    </div>


  </div>

</Section>


      <Section background={scenes.contentA()} className="border-y border-line py-[88px]">
  <div className="flex flex-col gap-9">
    <div className="band-heading flex flex-col gap-2.5">
      <span className="eyebrow">
        Product Modules
      </span>

      <h2 className="heading-display m-0 text-[36px]">
        Eight integrated modules, one platform
      </h2>
    </div>


    <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">

      {[
        { t: 'Organization Registration', b: '6-step wizard, legal tracks, public registry & verification.' },
        { t: 'Board & Governance', b: 'Member profiles, committees, conflict-of-interest tracking.' },
        { t: 'Meetings & Resolutions', b: 'Agendas, RSVP, minutes, voting, and quorum.' },
        { t: 'Strategic Planning', b: 'Multi-year plans, AOPs, and KPI monitoring.' },
        { t: 'Programmes & Projects', b: 'Milestones, budget linkage, CSV/PDF export.' },
        { t: 'MEL & Accountability', b: 'Indicators, evaluations, complaint tracking.' },
        { t: 'Financial Management', b: 'Chart of accounts, budget approvals, budget vs. actual.' },
        { t: 'Security & Access', b: '2FA, role-based access, 7-year audit trails.' },
      ].map((m) => (
        <div
           key={m.t}
  className="
    flex
    flex-col
    gap-1.5
    rounded-xl
    bg-canvas
    p-[22px]
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-[0_15px_35px_rgba(35,94,67,0.18)]
    hover:border
    hover:border-[#235e43]
  "
        >
          <h3 className="m-0 font-display text-[15px] font-bold text-navy">
            {m.t}
          </h3>

          <p className="m-0 text-[13px] leading-relaxed text-ink-muted">
            {m.b}
          </p>

        </div>
      ))}

    </div>
  </div>
</Section>



<Section className="relative overflow-hidden border-t border-[#e7efe9] bg-white py-[88px]">

  {/* Soft background accents */}
  <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-[#235e43]/6 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#2f7652]/8 blur-3xl" />

  <div className="relative flex flex-col gap-14">

    {/* Heading */}
    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

      <span className="eyebrow !text-[#235e43]">
        BUILT FOR EVERY STAKEHOLDER
      </span>

      <h2 className="heading-display mt-4 text-[40px] font-extrabold leading-tight text-[#102a1f]">
        One platform for everyone shaping governance
      </h2>

      <p className="mt-5 max-w-[720px] text-lg leading-relaxed text-[#5b6661]">
        From NGOs and regulators to board members and the public,
        Elano brings registration, governance, compliance and reporting
        together in one secure digital ecosystem.
      </p>

    </div>


    {/* Audience Cards */}

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

      {[
        {
          icon:"🏢",
          t:"NGOs & CSOs",
          b:"Registration, governance, programmes and impact tracking."
        },
        {
          icon:"🏦",
          t:"Institutions",
          b:"Board governance, compliance, reporting and oversight."
        },
        {
          icon:"🏛",
          t:"Government",
          b:"Certification, public registry and application review."
        },
        {
          icon:"👥",
          t:"Board Members",
          b:"Meetings, approvals, collaboration and governance."
        },
        {
          icon:"🌍",
          t:"The Public",
          b:"Verify certified organizations with confidence."
        }

      ].map((item)=>(

        <div
          key={item.t}
          className="
            group
            rounded-2xl
            border
            border-[#e6ede8]
            bg-white
            p-6
            shadow-[0_8px_25px_rgba(0,0,0,0.05)]
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-[#235e43]
            hover:shadow-[0_18px_40px_rgba(35,94,67,0.18)]
          "
        >

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#235e43]/10 text-2xl transition-all duration-300 group-hover:bg-[#235e43] group-hover:text-white">
            {item.icon}
          </div>

          <h3 className="mb-2 font-display text-[17px] font-bold text-[#102a1f]">
            {item.t}
          </h3>

          <p className="text-sm leading-7 text-[#5f6d67]">
            {item.b}
          </p>

        </div>

      ))}

    </div>




    {/* Testimonials */}

    <div className="rounded-[30px] border border-[#e7efe9] bg-[#f8fbf9] p-10">

      <div className="mb-8 text-center">

        <h2 className="heading-display text-[30px] text-[#102a1f]">
          Trusted by institutions that cannot afford mistakes
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-[#5b6661]">
          Organizations across Kenya rely on Elano to improve governance,
          accountability and operational transparency.
        </p>

      </div>


      <div className="grid gap-6 lg:grid-cols-3">

        {[
          {
            q:"Registration used to take weeks. Today every application, review and certificate is tracked digitally.",
            a:"Programme Director",
            o:"Kenyan NGO"
          },
          {
            q:"Board meetings, resolutions and governance records are finally centralized in one secure platform.",
            a:"Board Secretary",
            o:"CSO"
          },
          {
            q:"Leadership can now monitor strategy, projects, finance and reporting from one dashboard.",
            a:"CEO",
            o:"Development Agency"
          }

        ].map((item)=>(

          <div
            key={item.a}
            className="
              rounded-2xl
              border
              border-[#e7efe9]
              bg-white
              p-6
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-[0_18px_40px_rgba(35,94,67,0.15)]
            "
          >

            <div className="mb-5 text-4xl text-[#235e43]">
              "
            </div>

            <p className="leading-7 italic text-[#495057]">
              {item.q}
            </p>

            <div className="mt-6 h-px bg-[#e8efea]" />

            <div className="mt-5">

              <p className="font-semibold text-[#102a1f]">
                {item.a}
              </p>

              <p className="text-sm text-[#235e43]">
                {item.o}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

</Section>


      <Section background={scenes.cta()} className="py-[88px] text-center">
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-[18px]">
          <div className="band-heading flex flex-col items-center gap-3">
            <h2 className="heading-display m-0 text-[36px]">Ready to govern digitally?</h2>
            <p className="band-lead m-0 text-base leading-relaxed">
              See how Elano helps Kenyan institutions register, certify, and govern with confidence.
            </p>
          </div>
          <a href={MEET_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Demo</a>
        </div>
      </Section>
    </>
  )
}
