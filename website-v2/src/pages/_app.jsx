import '@fontsource/archivo/500.css'
import '@fontsource/archivo/600.css'
import '@fontsource/archivo/700.css'
import '@fontsource/archivo/800.css'
import '@fontsource/public-sans/400.css'
import '@fontsource/public-sans/500.css'
import '@fontsource/public-sans/600.css'
import '@fontsource/public-sans/700.css'
import '@/styles/globals.css'
import TopBar from '@/components/layout/TopBar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/layout/PageTransition'
import ConsentBanner from '@/components/layout/ConsentBanner'
import WebsiteAnalytics from '@/components/layout/WebsiteAnalytics'

export default function App({ Component, pageProps }) {
  return (
    <div className="flex min-h-screen flex-col bg-canvas font-sans">
      <WebsiteAnalytics />
      <TopBar />
      <Header />
      <main className="flex-1">
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </main>
      <Footer />
      <ConsentBanner />
    </div>
  )
}
