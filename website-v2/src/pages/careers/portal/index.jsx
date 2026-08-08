import { useState, useEffect } from 'react'
import Link from 'next/link'
import SEO from '@/components/layout/SEO'
import Section from '@/components/layout/Section'
import { scenes } from '@/lib/theme'

const MANDATORY_DOC_FALLBACK = [
  { id: 'application_letter', label: 'Industrial Attachment/Internship Application Letter' },
  { id: 'cv', label: 'Curriculum Vitae (CV) / Resume' },
  { id: 'national_id', label: 'National ID Card or Passport' },
  { id: 'student_id', label: 'Student Identification Card' },
  { id: 'intro_letter', label: 'Official Introduction Letter' },
  { id: 'attachment_request_letter', label: 'Industrial Attachment Request Letter' },
  { id: 'student_insurance', label: 'Valid Student Insurance Cover Certificate' },
]

function sessionStorageKey(referenceNumber) {
  return `rcfi_portal_session_${referenceNumber}`
}

function readStoredSession(referenceNumber) {
  if (typeof window === 'undefined' || !referenceNumber) return ''
  return sessionStorage.getItem(sessionStorageKey(referenceNumber)) || ''
}

function storeSession(referenceNumber, token) {
  if (typeof window !== 'undefined' && referenceNumber && token) {
    sessionStorage.setItem(sessionStorageKey(referenceNumber), token)
  }
}

export default function ApplicantPortalPage() {
  const [step, setStep] = useState('reference')
  const [referenceNumber, setReferenceNumber] = useState('')
  const [invitationCode, setInvitationCode] = useState('')
  const [otp, setOtp] = useState('')
  const [password, setPassword] = useState('')
  const [sessionToken, setSessionToken] = useState('')
  const [portalData, setPortalData] = useState(null)
  const [docTypes, setDocTypes] = useState(MANDATORY_DOC_FALLBACK)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [uploadType, setUploadType] = useState('application_letter')
  const [uploadFile, setUploadFile] = useState(null)

  useEffect(() => {
    fetch('/api/careers/document-config')
      .then((r) => r.json())
      .then((d) => {
        const mandatory = (d.data || []).filter((x) => x.mandatory)
        if (mandatory.length) {
          setDocTypes(mandatory.map((x) => ({ id: x.id, label: x.label })))
          setUploadType(mandatory[0].id)
        }
      })
      .catch(() => {})
  }, [])

  function applySessionToken(ref, token) {
    if (!token) return
    setSessionToken(token)
    storeSession(ref, token)
  }

  async function portalCall(action, body, multipart = false) {
    setError('')
    setLoading(true)
    try {
      let res
      if (multipart) {
        const fd = new FormData()
        Object.entries(body).forEach(([k, v]) => fd.append(k, v))
        res = await fetch(`/api/careers/portal?action=upload`, { method: 'POST', body: fd })
      } else {
        res = await fetch(`/api/careers/portal?action=${action}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
      }
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.message || 'Request failed')
      return data
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  async function refreshPortalData(ref = referenceNumber, token = sessionToken || readStoredSession(referenceNumber)) {
    if (!ref || !password) return null
    const data = await portalCall('login', { referenceNumber: ref, password })
    if (data.data) {
      setPortalData(data.data)
      applySessionToken(ref, data.data.sessionToken)
    }
    return data.data
  }

  async function ensureUploadSession() {
    const token = sessionToken || readStoredSession(referenceNumber)
    if (token) return token
    const data = await portalCall('login', { referenceNumber, password })
    applySessionToken(referenceNumber, data.data?.sessionToken)
    if (data.data) setPortalData(data.data)
    return data.data?.sessionToken
  }

  async function verifyReference(e) {
    e.preventDefault()
    const ref = referenceNumber.trim().toUpperCase()
    const data = await portalCall('verify-reference', { referenceNumber: ref })
    setReferenceNumber(ref)
    setPortalData(data.data)
    const stored = readStoredSession(ref)
    if (stored) setSessionToken(stored)
    if (data.data.requiresInvitation) setStep('invitation')
    else if (data.data.requiresPassword) setStep('login')
    else setStep('status')
  }

  async function verifyInvitation(e) {
    e.preventDefault()
    await portalCall('verify-invitation', { referenceNumber, invitationCode: invitationCode.trim().toUpperCase() })
    setStep('otp')
  }

  async function verifyOtpCode(e) {
    e.preventDefault()
    const data = await portalCall('verify-otp', { referenceNumber, otp })
    setPortalData(data.data)
    setStep(data.data.requiresPassword ? 'password' : 'login')
  }

  async function setPortalPassword(e) {
    e.preventDefault()
    const data = await portalCall('set-password', { referenceNumber, password })
    applySessionToken(referenceNumber, data.data?.sessionToken)
    setStep('upload')
  }

  async function portalLogin(e) {
    e.preventDefault()
    const data = await portalCall('login', { referenceNumber, password })
    setPortalData(data.data)
    applySessionToken(referenceNumber, data.data?.sessionToken)
    setStep('upload')
  }

  async function openUploadStep() {
    try {
      const token = await ensureUploadSession()
      if (!token) {
        setStep('login')
        return
      }
      setStep('upload')
    } catch {
      setStep('login')
    }
  }

  async function uploadDocument(e) {
    e.preventDefault()
    if (!uploadFile) return
    setError('')
    setLoading(true)
    try {
      const token = await ensureUploadSession()
      if (!token) throw new Error('Please sign in again to upload documents')

      const fd = new FormData()
      fd.append('referenceNumber', referenceNumber)
      fd.append('documentType', uploadType)
      fd.append('sessionToken', token)
      fd.append('document', uploadFile)
      const res = await fetch('/api/careers/portal?action=upload', { method: 'POST', body: fd })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.message || 'Upload failed')
      await refreshPortalData(referenceNumber, token)
      setUploadFile(null)
      setStep('status')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEO title="Secure Applicant Portal — RCFI" description="Complete your attachment application securely." />
      <Section background={scenes.contentA()} className="py-[80px]">
        <div className="mx-auto max-w-lg">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-green">Secure Portal</p>
            <h1 className="mt-2 font-display text-3xl font-bold text-navy">Applicant Portal</h1>
            <p className="mt-2 text-sm text-ink-soft">
              Shortlisted applicants only. Verify reference, invitation code, and OTP before uploading documents.
            </p>
            <Link href="/careers/" className="text-sm text-green font-semibold hover:underline mt-2 inline-block">
              ← Back to careers
            </Link>
          </div>

          <div className="rounded-2xl border border-line bg-white p-8 shadow-sm space-y-6">
            {error && <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>}

            {step === 'reference' && (
              <form onSubmit={verifyReference} className="space-y-4">
                <label className="block text-sm font-medium text-navy">
                  Application reference (your portal username) *
                  <input
                    value={referenceNumber}
                    onChange={(e) => setReferenceNumber(e.target.value.toUpperCase())}
                    placeholder="ATT-2026-00125"
                    required
                    className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 font-mono"
                  />
                </label>
                <button type="submit" disabled={loading} className="w-full rounded-lg py-3 font-semibold text-white" style={{ backgroundColor: '#235e43' }}>
                  {loading ? 'Verifying…' : 'Continue'}
                </button>
              </form>
            )}

            {step === 'invitation' && (
              <form onSubmit={verifyInvitation} className="space-y-4">
                <p className="text-sm text-ink-soft">Portal username: <strong>{referenceNumber}</strong></p>
                <label className="block text-sm font-medium text-navy">
                  Invitation code *
                  <input
                    value={invitationCode}
                    onChange={(e) => setInvitationCode(e.target.value.toUpperCase())}
                    required
                    className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 font-mono uppercase"
                  />
                </label>
                <button type="submit" disabled={loading} className="w-full rounded-lg py-3 font-semibold text-white" style={{ backgroundColor: '#235e43' }}>
                  {loading ? 'Sending OTP…' : 'Verify invitation'}
                </button>
              </form>
            )}

            {step === 'otp' && (
              <form onSubmit={verifyOtpCode} className="space-y-4">
                <p className="text-sm text-ink-soft">Enter the 6-digit code sent to your email and phone.</p>
                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="000000"
                  required
                  className="w-full rounded-lg border border-line px-3 py-2.5 font-mono text-center text-2xl tracking-widest"
                />
                <button type="submit" disabled={loading} className="w-full rounded-lg py-3 font-semibold text-white" style={{ backgroundColor: '#235e43' }}>
                  {loading ? 'Verifying…' : 'Verify OTP'}
                </button>
              </form>
            )}

            {step === 'password' && (
              <form onSubmit={setPortalPassword} className="space-y-4">
                <p className="text-sm text-ink-soft">Create a secure password for your applicant portal.</p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8}
                  required
                  placeholder="Min. 8 characters"
                  className="w-full rounded-lg border border-line px-3 py-2.5"
                />
                <button type="submit" disabled={loading} className="w-full rounded-lg py-3 font-semibold text-white" style={{ backgroundColor: '#235e43' }}>
                  {loading ? 'Saving…' : 'Create password'}
                </button>
              </form>
            )}

            {step === 'login' && (
              <form onSubmit={portalLogin} className="space-y-4">
                <p className="text-sm text-ink-soft">Portal username: <strong>{referenceNumber}</strong></p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-lg border border-line px-3 py-2.5"
                  placeholder="Portal password"
                />
                <button type="submit" disabled={loading} className="w-full rounded-lg py-3 font-semibold text-white" style={{ backgroundColor: '#235e43' }}>
                  {loading ? 'Signing in…' : 'Sign in'}
                </button>
              </form>
            )}

            {step === 'upload' && (
              <form onSubmit={uploadDocument} className="space-y-4">
                <p className="text-sm font-medium text-navy">Upload mandatory application documents</p>
                <p className="text-xs text-ink-soft">
                  All seven documents listed in the programme checklist are required. Your secure session is required for each upload.
                </p>
                <ul className="text-xs text-ink-soft space-y-1 list-disc pl-4 max-h-32 overflow-y-auto">
                  {docTypes.map((d) => (
                    <li key={d.id}>{d.label}</li>
                  ))}
                </ul>
                <select value={uploadType} onChange={(e) => setUploadType(e.target.value)} className="w-full rounded-lg border border-line px-3 py-2.5 text-sm">
                  {docTypes.map((d) => (
                    <option key={d.id} value={d.id}>{d.label}</option>
                  ))}
                </select>
                <input type="file" accept=".pdf,.png,.jpg,.jpeg,.doc,.docx" onChange={(e) => setUploadFile(e.target.files?.[0] || null)} required className="w-full text-sm" />
                <button type="submit" disabled={loading || !uploadFile} className="w-full rounded-lg py-3 font-semibold text-white" style={{ backgroundColor: '#235e43' }}>
                  {loading ? 'Uploading…' : 'Upload document'}
                </button>
                <button type="button" onClick={() => setStep('status')} className="w-full text-sm text-green font-semibold">
                  View application status →
                </button>
              </form>
            )}

            {step === 'status' && portalData && (
              <div className="space-y-4 text-sm">
                <p><strong>Reference:</strong> {portalData.referenceNumber || referenceNumber}</p>
                <p><strong>Status:</strong> <span className="capitalize">{(portalData.status || '').replace(/_/g, ' ')}</span></p>
                {portalData.submittedDocuments?.length > 0 && (
                  <div>
                    <p className="font-medium text-navy mb-2">Documents</p>
                    <ul className="space-y-1">
                      {portalData.submittedDocuments.map((d, i) => (
                        <li key={i} className="flex justify-between text-ink-soft">
                          <span>{d.label || d.documentType}</span>
                          <span className="capitalize">{d.verificationStatus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {portalData.missingDocuments?.length > 0 && (
                  <p className="text-amber-700">Missing: {portalData.missingDocuments.join(', ')}</p>
                )}
                <button type="button" onClick={openUploadStep} className="w-full rounded-lg py-3 font-semibold text-white" style={{ backgroundColor: '#235e43' }}>
                  Upload more documents
                </button>
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  )
}
