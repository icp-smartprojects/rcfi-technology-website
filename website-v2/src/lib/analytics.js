/** Anonymous session + consent helpers (GDPR §3.7 — no PII in localStorage keys). */

const SESSION_KEY = 'rcfi_vid'
const CONSENT_KEY = 'rcfi_analytics_consent'

export function getVisitorSessionId() {
  if (typeof window === 'undefined') return null
  let id = localStorage.getItem(SESSION_KEY)
  if (!id) {
    id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 11)}`
    localStorage.setItem(SESSION_KEY, id)
  }
  return id
}

export function getAnalyticsConsent() {
  if (typeof window === 'undefined') return null
  const v = localStorage.getItem(CONSENT_KEY)
  if (v === 'granted') return true
  if (v === 'denied') return false
  return null
}

export function setAnalyticsConsent(granted) {
  if (typeof window === 'undefined') return
  localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied')
}

export function anonymousConsentEmail(sessionId) {
  return `visitor-${sessionId}@anon.rcfi.co.ke`
}
