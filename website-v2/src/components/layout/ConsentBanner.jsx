import { useEffect, useState } from 'react'
import {
  getVisitorSessionId,
  getAnalyticsConsent,
  setAnalyticsConsent,
  anonymousConsentEmail,
} from '@/lib/analytics'

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(getAnalyticsConsent() === null)
  }, [])

  async function recordConsent(granted) {
    setAnalyticsConsent(granted)
    setVisible(false)

    const sessionId = getVisitorSessionId()
    if (!sessionId) return

    try {
      await fetch('/api/analytics/consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: anonymousConsentEmail(sessionId),
          collectedVia: 'website_banner_v2',
          consentVersion: '1.0',
          categories: [{ category: 'analytics', granted, version: '1.0' }],
        }),
      })
    } catch {
      /* local consent still applies */
    }
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[100] border-t border-slate-200 bg-white/95 backdrop-blur-md shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-3">
        <p className="text-sm text-slate-600 leading-relaxed">
          We use anonymous analytics to understand which pages visitors view (e.g. product pages).
          No personal data is sold. You can accept or decline.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => recordConsent(false)}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => recordConsent(true)}
            className="rounded-md bg-[#0a6e4a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#085a3d]"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  )
}
