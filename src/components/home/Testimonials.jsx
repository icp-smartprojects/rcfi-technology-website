import Link from 'next/link'
import { useState } from 'react'
import TestimonialCard from '@/components/common/TestimonialCard'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "RCFI's Elano platform transformed how we manage our CSO network. What used to take weeks now takes minutes. The transparency and accountability features have been game-changing for our county.",
      name: "Dr. Sarah Kimani",
      title: "Director of CSO Coordination",
      organization: "Uasin Gishu County Government",
      logo: "/images/clients/uasin-gishu.png"
    },
    {
      quote: "DigiSign has revolutionized our customer onboarding process. The e-KYC integration with government databases is seamless, and we've reduced verification time from days to seconds. Absolutely essential for modern banking.",
      name: "Michael Odhiambo",
      title: "Head of Digital Banking",
      organization: "Kenya Commercial Bank",
      logo: "/images/clients/kcb.png"
    },
    {
      quote: "As a small business owner, Prezio has been a lifesaver. Professional invoicing, client management, and financial tracking all in one place. It's affordable, easy to use, and looks professional to my clients.",
      name: "Grace Wanjiru",
      title: "Founder & CEO",
      organization: "Wanjiru Consulting Services",
      logo: null
    },
    {
      quote: "The blockchain document security in DigiSign gives our donors the confidence they need. Every grant agreement, report, and financial document is timestamped and tamper-proof. It's accountability made easy.",
      name: "James Mwangi",
      title: "Executive Director",
      organization: "Kenya Education Network",
      logo: "/images/clients/ken.png"
    },
    {
      quote: "RCFI understood our needs as a growing fintech. Their team worked with us to customize the solution, and the support has been outstanding. DigiSign is now integral to our compliance workflow.",
      name: "Amina Hassan",
      title: "Compliance Officer",
      organization: "PesaPay Digital",
      logo: "/images/clients/pesapay.png"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
            Trusted by Leaders
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Hear from organizations transforming with RCFI
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Testimonial Cards - Desktop: 2 visible, Mobile: 1 visible */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Current Testimonial */}
              <div className="animate-fade-in">
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </div>
              
              {/* Next Testimonial - Hidden on mobile */}
              <div className="hidden md:block animate-fade-in">
                <TestimonialCard 
                  testimonial={testimonials[(currentIndex + 1) % testimonials.length]} 
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-soft hover:shadow-lg flex items-center justify-center text-neutral-700 hover:text-primary-600 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary-600 w-8' 
                        : 'bg-neutral-300 hover:bg-neutral-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-soft hover:shadow-lg flex items-center justify-center text-neutral-700 hover:text-primary-600 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-4">Want to see more success stories?</p>
          <Link 
            href="/resources/case-studies" 
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-lg"
          >
            View All Case Studies
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}