

import Head from 'next/head'
import Link from 'next/link'
import {
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiTrendingUp,
  FiLayers,
  FiActivity,
  FiClock,
    FiZap,
} from 'react-icons/fi'

import CTAButton from '@/components/common/CTAButton'
import { productsData } from '@/data/productsData'

export default function PrezioPage() {
  const product = productsData.prezio

  return (
    <>
      <Head>
        <title>
          {product?.name || 'Prezio'} - Business Process Automation | RCFI
          Technology
        </title>

        <meta
          name="description"
          content={
            product?.longDescription ||
            'Business process automation and workflow management platform'
          }
        />

        <link
          rel="canonical"
          href="https://rcfi.co.ke/products/prezio"
        />
      </Head>

      {/* HERO */}

   <section className="relative overflow-hidden bg-white pt-28 pb-24">

  {/* Background Glow */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-primary-100 rounded-full blur-3xl opacity-40" />
    <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-100 rounded-full blur-3xl opacity-40" />
  </div>

  <div className="container-custom relative z-10">

    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

      {/* LEFT */}
      <div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-8">
          <FiShield />
          <span>Intelligent Business Automation</span>
        </div>

        <h1 className="text-6xl lg:text-7xl font-bold text-neutral-900 leading-[0.92] mb-8">
          Less Process.
          <br />
          More
          <span className="text-primary-600"> Progress.</span>
        </h1>

        <p className="text-xl text-neutral-600 leading-relaxed mb-10 max-w-xl">
          Prezio automates approvals, workflows, documents and operational
          processes so teams spend less time managing work and more time
          moving business forward.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <CTAButton
            href="/contact/demo"
            variant="primary"
            size="lg"
          >
            Request Demo
          </CTAButton>
        </div>

      <div className="flex gap-3 w-full max-w-[700px]">

  <div className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white border border-neutral-200 shadow-sm">
    <FiCheckCircle className="text-primary-600" />
    <span className="text-sm font-medium">
      Workflow Automation
    </span>
  </div>

  <div className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white border border-neutral-200 shadow-sm">
    <FiCheckCircle className="text-primary-600" />
    <span className="text-sm font-medium">
      Document Management
    </span>
  </div>

  <div className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white border border-neutral-200 shadow-sm">
    <FiCheckCircle className="text-primary-600" />
    <span className="text-sm font-medium">
      Real-Time <br/> Analytics
    </span>
  </div>

</div>

      </div>

      {/* RIGHT */}
      <div className="relative">

        {/* Image */}
        <div className="relative overflow-hidden rounded-[36px] shadow-[0_25px_70px_rgba(0,0,0,0.08)]">

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
            alt="Business Operations"
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        {/* Top Floating Stat */}
        <div className="absolute -right-4 top-8 bg-white rounded-[28px] px-6 py-5 shadow-xl border border-neutral-200">

          <div className="text-3xl font-bold text-primary-600">
            80%
          </div>

          <div className="text-sm text-neutral-500">
            Faster Approvals
          </div>

        </div>

        {/* Bottom Workflow Card */}
        <div className="absolute -bottom-8 left-8 bg-white rounded-[28px] p-5 shadow-xl border border-neutral-200 max-w-[280px]">

          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center flex-shrink-0">
              <FiZap className="text-primary-600 text-xl" />
            </div>

            <div>
              <h4 className="font-semibold text-neutral-900 mb-1">
                Automated Routing
              </h4>

              <p className="text-sm text-neutral-500 leading-relaxed">
                Requests automatically reach the right people without delays.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

    

      {/* HOW PREZIO WORKS */}

 <section className="py-28 bg-neutral-50 overflow-hidden">
  <div className="container-custom">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold">
        HOW IT WORKS
      </span>

      <h2 className="text-5xl md:text-6xl font-bold mt-6 leading-tight text-neutral-900">
        Work Flows
        <span className="block text-primary-600">
          Automatically
        </span>
      </h2>

      <p className="mt-6 text-lg text-neutral-600">
        From request to completion, every step moves forward without the
        usual bottlenecks.
      </p>
    </div>

    {/* Workflow */}
    <div className="relative max-w-6xl mx-auto">

      {/* Connection Line */}
      <div className="hidden lg:block absolute top-16 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 relative">

        {/* Step 1 */}
        <div className="bg-white rounded-[32px] p-10 border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500">

          <div className="flex items-center justify-between mb-8">
            <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center">
              <span className="text-2xl">📝</span>
            </div>

            <span className="text-5xl font-bold text-neutral-100">
              01
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-3">
            Submit Request
          </h3>

          <p className="text-neutral-600">
            Employees initiate requests, approvals or documents in seconds.
          </p>

        </div>

        {/* Step 2 */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-primary-600 to-primary-700 p-10 text-white shadow-2xl">

          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>

              <span className="text-5xl font-bold text-white/20">
                02
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Automated Routing
            </h3>

            <p className="text-primary-100">
              Prezio instantly routes work to the right people and tracks every step.
            </p>
          </div>

        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-[32px] p-10 border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500">

          <div className="flex items-center justify-between mb-8">
            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center">
              <span className="text-2xl">✓</span>
            </div>

            <span className="text-5xl font-bold text-neutral-100">
              03
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-3">
            Complete Faster
          </h3>

          <p className="text-neutral-600">
            Teams gain visibility and finish work without unnecessary delays.
          </p>

        </div>

      </div>

     

    </div>

  </div>
</section>



            {/* OPERATIONS HUB */}

      <section className="py-24 bg-white overflow-hidden">

        <div className="container-custom">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}

            <div className="relative">

              <div className="rounded-[32px] overflow-hidden shadow-2xl border border-neutral-200">

                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                  alt="Analytics Dashboard"
                  className="w-full h-[600px] object-cover"
                />

              </div>

              {/* Floating cards */}

              <div className="absolute top-8 left-8 bg-white rounded-2xl shadow-xl p-5">

                <div className="text-xs text-neutral-500 mb-1">
                  Active Processes
                </div>

                <div className="text-3xl font-bold text-primary-600">
                  324
                </div>

              </div>

              <div className="absolute bottom-8 right-8 bg-white rounded-2xl shadow-xl p-5">

                <div className="text-xs text-neutral-500 mb-1">
                  Completed
                </div>

                <div className="text-3xl font-bold text-green-600">
                  98%
                </div>

              </div>

            </div>

            {/* RIGHT CONTENT */}

            <div>

              <span className="text-primary-600 font-semibold">
                OPERATIONS HUB
              </span>

              <h2 className="text-5xl font-bold text-neutral-900 mt-4 mb-6">
                Everything In
                <br />
                One Place
              </h2>

              <p className="text-lg text-neutral-600 leading-relaxed mb-10">
                Replace spreadsheets, endless emails and disconnected systems
                with one centralized workspace built to manage workflows,
                approvals, documents and business operations.
              </p>

              <div className="space-y-6">

                <div className="flex gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center">
                    <FiLayers className="text-primary-600 text-xl" />
                  </div>

                  <div>

                    <h3 className="font-semibold text-lg mb-1">
                      Workflow Automation
                    </h3>

                    <p className="text-neutral-600">
                      Eliminate repetitive manual tasks and speed up execution.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center">
                    <FiActivity className="text-primary-600 text-xl" />
                  </div>

                  <div>

                    <h3 className="font-semibold text-lg mb-1">
                      Real-Time Insights
                    </h3>

                    <p className="text-neutral-600">
                      Monitor operational performance with complete visibility.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center">
                    <FiCheckCircle className="text-primary-600 text-xl" />
                  </div>

                  <div>

                    <h3 className="font-semibold text-lg mb-1">
                      Approval Management
                    </h3>

                    <p className="text-neutral-600">
                      Keep requests moving and avoid approval bottlenecks.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURE GRID */}
<section className="py-24 bg-gradient-to-b from-white to-primary-50 overflow-hidden">
  <div className="container-custom">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <span className="text-primary-600 font-semibold tracking-[0.2em]">
        CAPABILITIES
      </span>

      <h2 className="text-5xl md:text-6xl font-bold mt-6 text-neutral-900">
        One Platform.
        <br />
        Endless Possibilities.
      </h2>

      <p className="text-neutral-600 mt-6 text-lg">
        Everything your organization needs connected in one intelligent workspace.
      </p>
    </div>

    {/* Ecosystem */}
    <div className="relative max-w-6xl mx-auto">

      {/* Soft Shape Behind Everything */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[750px] h-[380px] rounded-full border border-primary-100/80"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center relative z-10">

        {/* LEFT */}
        <div className="space-y-6">

          {/* Documents */}
          <div className="relative overflow-hidden bg-white rounded-3xl p-7 border border-neutral-100 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="absolute left-0 top-0 h-full w-1 bg-primary-500"></div>

            <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center mb-4">
              📄
            </div>

            <h4 className="font-bold text-xl text-neutral-900 mb-2">
              Documents
            </h4>

            <p className="text-neutral-500">
              Store policies, SOPs, audits and compliance records in one secure place.
            </p>

          </div>

          {/* Teams */}
          <div className="relative overflow-hidden bg-primary-50/70 rounded-3xl p-7 border border-primary-100 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="absolute left-0 top-0 h-full w-1 bg-primary-500"></div>

            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4">
              👥
            </div>

            <h4 className="font-bold text-xl text-neutral-900 mb-2">
              Teams
            </h4>

            <p className="text-neutral-500">
              Collaborate across departments with clear accountability and ownership.
            </p>

          </div>

        </div>

        {/* CENTER */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-primary-300/20 blur-3xl scale-125 rounded-full"></div>

            <div className="relative w-[380px] h-[300px] rounded-[36px] bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 p-[1px] shadow-[0_35px_100px_rgba(59,130,246,0.25)]">

              <div className="w-full h-full rounded-[35px] bg-white flex flex-col items-center justify-center text-center px-10">

                <div className="w-18 h-18 rounded-3xl bg-primary-100 flex items-center justify-center mb-6">
                  <span className="text-3xl">⚡</span>
                </div>

                <h3 className="text-5xl font-bold text-neutral-900">
                  Prezio
                </h3>

                <p className="text-neutral-500 mt-3 text-lg">
                  Intelligent Compliance Platform
                </p>

                <div className="mt-6 flex gap-2 flex-wrap justify-center">
                  <span className="px-3 py-1 bg-primary-50 rounded-full text-sm text-primary-700">
                    Documents
                  </span>

                  <span className="px-3 py-1 bg-primary-50 rounded-full text-sm text-primary-700">
                    Teams
                  </span>

                  <span className="px-3 py-1 bg-primary-50 rounded-full text-sm text-primary-700">
                    Automation
                  </span>

                  <span className="px-3 py-1 bg-primary-50 rounded-full text-sm text-primary-700">
                    Integrations
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* Integrations */}
          <div className="relative overflow-hidden bg-white rounded-3xl p-7 border border-neutral-100 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="absolute left-0 top-0 h-full w-1 bg-primary-500"></div>

            <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center mb-4">
              🔗
            </div>

            <h4 className="font-bold text-xl text-neutral-900 mb-2">
              Integrations
            </h4>

            <p className="text-neutral-500">
              Connect seamlessly with your existing tools and operational systems.
            </p>

          </div>

          {/* Automation */}
          <div className="relative overflow-hidden bg-primary-50/70 rounded-3xl p-7 border border-primary-100 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="absolute left-0 top-0 h-full w-1 bg-primary-500"></div>

            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4">
              ⚙️
            </div>

            <h4 className="font-bold text-xl text-neutral-900 mb-2">
              Automation
            </h4>

            <p className="text-neutral-500">
              Eliminate repetitive tasks with intelligent workflows and reminders.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* CTA */}

      <section className="py-24 bg-primary-900 text-white">

        <div className="container-custom">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your
              <br />
              Business Processes
            </h2>

            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Discover how Prezio can automate workflows, accelerate approvals
              and provide complete operational visibility.
            </p>

            <Link
              href="/contact/demo"
              className="inline-flex items-center gap-3 bg-white text-primary-900 px-8 py-4 rounded-xl font-semibold hover:bg-neutral-100 transition"
            >
              Request Demo
              <FiArrowRight />
            </Link>

          </div>

        </div>

      </section>

    </>
  )
}