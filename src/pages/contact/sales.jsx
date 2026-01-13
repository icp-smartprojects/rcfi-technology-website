import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { FiMail, FiPhone, FiMessageSquare, FiCheckCircle } from 'react-icons/fi'

export default function ContactSales() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sales inquiry:', formData)
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <>
        <Head>
          <title>Thank You | RCFI Technology</title>
        </Head>
        <section className="pt-32 pb-20 px-4 min-h-screen flex items-center justify-center">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FiCheckCircle className="w-12 h-12 text-primary-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">We'll Be In Touch Soon!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Our sales team will contact you within 24 hours to discuss your needs.
            </p>
            <Link href="/" className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold transition-all inline-block">
              Back to Home
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Contact Sales | RCFI Technology</title>
        <meta name="description" content="Get in touch with our sales team for pricing, custom solutions, and enterprise inquiries" />
      </Head>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Talk to Sales</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how RCFI solutions can help your organization achieve its goals
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <FiPhone className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">+254 754 134 704</p>
              <p className="text-sm text-gray-500">Mon-Fri, 8am-6pm EAT</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <FiMail className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">sales@rcfi.co.ke</p>
              <p className="text-sm text-gray-500">Response within 24 hours</p>
            </div>
            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <FiMessageSquare className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-2">Available Now</p>
              <p className="text-sm text-gray-500">Mon-Sat, 8am-8pm EAT</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company *</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">What are you interested in? *</label>
                <select
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="digisign">DigiSign</option>
                  <option value="elano">Elano</option>
                  <option value="prezio">Prezio</option>
                  <option value="enterprise">Enterprise Solution</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Select range</option>
                    <option value="<100k">Less than KES 100,000</option>
                    <option value="100k-500k">KES 100,000 - 500,000</option>
                    <option value="500k-1m">KES 500,000 - 1,000,000</option>
                    <option value="1m+">Over KES 1,000,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6months+">6+ months</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold text-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}