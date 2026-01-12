import '@/styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import BackToTop from '@/components/common/BackToTop'
import PageLoader from '@/components/common/PageLoader'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Track page views
    const handleRouteChange = (url) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_path: url,
        })
      }
    }
    
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <PageLoader />
      <Header />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}