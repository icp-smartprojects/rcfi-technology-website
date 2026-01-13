import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi'
import { companyInfo } from '@/data/companyData'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    interest: 'general',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! We\'ll get back to you within 24 hours.'
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          interest: 'general',
          message: ''
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactOptions = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Call Us',
      value: companyInfo.contact.phone,
      href: `tel:${companyInfo.contact.phone}`,
      description: 'Mon-Fri, 8am-6pm EAT'
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email Us',
      value: companyInfo.contact.email,
      href: `mailto:${companyInfo.contact.email}`,
      description: 'We reply within 24 hours'
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Visit Us',
      value: companyInfo.address.full,
      href: 'https://maps.google.com/?q=Hifadhi+House+ICD+Road+Nairobi',
      description: 'By appointment only'
    }
  ]

  return (
    <>
      <Head>
        <title>Contact Us | RCFI Technology</title>
        <meta name="description" content="Get in touch with RCFI Technology. Request a demo, talk to sales, or get support for our digital transformation solutions." />
        <link rel="canonical" href="https://rcfi.co.ke/contact" />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-6">
              Let's Talk About Your Digital Transformation
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Whether you're looking for a demo, have questions, or need support, 
              our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => (
              <a
                key={index}
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : undefined}
                rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {option.value}
                </p>
                <p className="text-sm text-neutral-600">
                  {option.description}
                </p>
              </a>
            ))}
          </div>

          {/* Main Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Send Us a Message
              </h2>

              {status.message && (
                <div className={`mb-6 p-4 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  <div className="flex items-start gap-3">
                    {status.type === 'success' ? (
                      <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <FiMail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    )}
                    <p>{status.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input"
                      placeholder="+254 712 345 678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-neutral-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="input"
                    placeholder="Company or Organization Name"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-neutral-700 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="demo">Request a Demo</option>
                    <option value="digisign">DigiSign</option>
                    <option value="elano">Elano</option>
                    <option value="prezio">Prezio</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="input"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full justify-center text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner w-5 h-5"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Quick Links
              </h2>

              <div className="space-y-6">
                <Link 
                  href="/contact/demo"
                  className="block bg-primary-50 rounded-xl p-6 hover:bg-primary-100 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      📺
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
                        Request a Demo
                      </h3>
                      <p className="text-sm text-neutral-600">
                        See our platforms in action with a personalized demo
                      </p>
                    </div>
                  </div>
                </Link>

                <Link 
                  href="/resources/documentation"
                  className="block bg-neutral-50 rounded-xl p-6 hover:bg-neutral-100 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      📚
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
                        Documentation
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Technical guides, API docs, and integration help
                      </p>
                    </div>
                  </div>
                </Link>

                <Link 
                  href="/resources/faq"
                  className="block bg-neutral-50 rounded-xl p-6 hover:bg-neutral-100 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      ❓
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
                        FAQs
                      </h3>
                      <p className="text-sm text-neutral-600">
                        Common questions and quick answers
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Office Hours */}
              <div className="mt-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl p-6 text-white">
                <div className="flex items-start gap-3 mb-4">
                  <FiClock className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Office Hours</h3>
                    <div className="space-y-1 text-sm text-primary-100">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-primary-100">
                  East Africa Time (EAT / UTC+3)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-neutral-100">
        <div style={{ width: '100%', height: '500px', position: 'relative' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.8246556!2d36.82195!3d-1.2846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6faffffff%3A0x500ad2c5!2sHifadhi%20House!5e0!3m2!1sen!2ske!4v1701234567890"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RCFI Office Location - Hifadhi House, ICD Road, Nairobi"
          ></iframe>
        </div>
      </section>
    </>
  )
}