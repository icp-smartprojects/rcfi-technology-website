import { useState } from 'react'
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'

export default function ContactForm({ type = 'general' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    product: 'all',
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
        body: JSON.stringify({ ...formData, type }),
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
          product: 'all',
          message: ''
        })
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or email us directly at info@rcfi.co.ke'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-form" className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Send Us a Message
          </h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and we'll get back to you shortly
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              placeholder="+254 700 000 000"
            />
          </div>

          {/* Organization */}
          <div>
            <label htmlFor="organization" className="block text-sm font-semibold text-gray-900 mb-2">
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              placeholder="Your Company Name"
            />
          </div>

          {/* Product Interest */}
          <div>
            <label htmlFor="product" className="block text-sm font-semibold text-gray-900 mb-2">
              Product Interest
            </label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            >
              <option value="all">All Products</option>
              <option value="digisign">DigiSign</option>
              <option value="elano">Elano</option>
              <option value="prezio">Prezio</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your needs..."
            ></textarea>
          </div>

          {/* Status Message */}
          {status.message && (
            <div className={`p-4 rounded-lg flex items-start gap-3 ${
              status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}>
              {status.type === 'success' ? (
                <FiCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />
              ) : (
                <FiAlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              )}
              <p>{status.message}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <FiSend />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}