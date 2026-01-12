import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev
        return prev + Math.random() * 30
      })
    }, 200)

    // Stop loading after page load
    const timer = setTimeout(() => {
      setProgress(100)
      setTimeout(() => setIsLoading(false), 300)
    }, 1800)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  if (!isLoading) {
    return null
  }

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-neutral-100">
        <div 
          className="h-full bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Logo indicator at top-right */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-md">
        <div className="animate-bounce">
          <img 
            src="/images/assets/logo-gradient.svg" 
            alt="Loading"
            className="w-5 h-5"
          />
        </div>
        <span className="text-xs font-semibold text-primary-600">Loading...</span>
      </div>
    </>
  )
}

