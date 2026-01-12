import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    // Hide loader after 2 seconds
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!showLoader) {
    return null
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Logo - SVG */}
        <div className="animate-bounce">
          <img 
            src="/images/assets/logo-gradient.svg" 
            alt="RCFI Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary-900 mb-3">
            RCFI Technology
          </h2>
          <p className="text-sm text-neutral-600 mb-6">
            Empowering Africa's Digital Transformation
          </p>
        </div>

        {/* Loading Spinner */}
        <div className="mt-4">
          <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  )
}
