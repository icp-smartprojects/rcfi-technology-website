import { useState } from 'react'
import { FiMail } from 'react-icons/fi'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      // TODO: Integrate with your email service
      await new Promise(resolve => setTimeout(resolve, 500))
      setEmail('')
      setStatus('success')
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      
      {status === 'success' && (
        <p className="text-green-600 text-sm">Thanks for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
