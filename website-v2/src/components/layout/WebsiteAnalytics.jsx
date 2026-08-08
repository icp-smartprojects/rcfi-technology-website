import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getAnalyticsConsent, getVisitorSessionId } from '@/lib/analytics'

const WEBSITE_VERSION = 'v2'

function sendPageView(path) {
  const sessionId = getVisitorSessionId()
  if (!sessionId || getAnalyticsConsent() !== true) return

  const body = JSON.stringify({
    path,
    sessionId,
    referrer: typeof document !== 'undefined' ? document.referrer : '',
    websiteVersion: WEBSITE_VERSION,
    consentGranted: true,
  })

  if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
    const blob = new Blob([body], { type: 'application/json' })
    navigator.sendBeacon('/api/analytics/pageview', blob)
    return
  }

  fetch('/api/analytics/pageview', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  }).catch(() => {})
}

export default function WebsiteAnalytics() {
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return
    sendPageView(router.asPath)
  }, [router.isReady, router.asPath])

  return null
}
