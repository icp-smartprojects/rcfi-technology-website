import { useEffect, useState } from 'react'
import Link from 'next/link'
import SEO from '@/components/layout/SEO'
import Section from '@/components/layout/Section'
import { scenes } from '@/lib/theme'

export default function CareersPage() {
  const [opportunities, setOpportunities] = useState([])
  const [departments, setDepartments] = useState([])
  const [selectedDept, setSelectedDept] = useState('')
  const [selectedOppId, setSelectedOppId] = useState('')
  const [sent, setSent] = useState(false)
  const [referenceNumber, setReferenceNumber] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/careers/opportunities')
      .then((r) => r.json())
      .then((d) => setOpportunities(d.data || []))
      .catch(() => {})
    fetch('/api/careers/departments')
      .then((r) => r.json())
      .then((d) => {
        const open = d.data || []
        setDepartments(open)
        if (open.length > 0) {
          setSelectedDept(open[0].slug)
          setSelectedOppId(open[0].opportunities?.[0]?._id || '')
        }
      })
      .catch(() => {})
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    const form = e.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())
    if (String(payload.website_url || '').trim()) return
    if (selectedOppId) payload.opportunityId = selectedOppId

    setSubmitting(true)
    try {
      const res = await fetch('/api/careers/eoi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.message || 'Could not submit application')
      setReferenceNumber(data.data?.referenceNumber || '')
      setSent(true)
      form.reset()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setError(err.message || 'Could not submit application')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <SEO
        title="Careers & Attachment — RCFI Technology"
        description="Apply for attachment and internship opportunities at RCFI Technology. Government-grade recruitment with secure document verification."
      />

      <Section background={scenes.contentA()} className="py-[80px]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-green">Talent Acquisition</p>
            <h1 className="mt-2 font-display text-4xl font-bold text-navy">Attachment & Internship Programme</h1>
            <p className="mt-4 text-ink-soft max-w-2xl mx-auto">
              Submit your expression of interest — no documents required at this stage.
              Shortlisted applicants receive a secure portal invitation by email and SMS.
            </p>
            <Link
              href="/careers/portal/"
              className="inline-block mt-4 text-sm font-semibold text-green hover:underline"
            >
              Already shortlisted? Open the Secure Applicant Portal →
            </Link>
          </div>

          {opportunities.length > 0 && (
            <div className="mb-10 grid gap-4 sm:grid-cols-2">
              {opportunities.map((opp) => (
                <div key={opp._id} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                  <h2 className="font-display text-lg font-bold text-navy">{opp.title}</h2>
                  <p className="mt-2 text-sm text-ink-soft line-clamp-3">{opp.description}</p>
                  {opp.applicationDeadline && (
                    <p className="mt-3 text-xs font-semibold text-ink-pale">
                      Deadline: {new Date(opp.applicationDeadline).toLocaleDateString('en-KE')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {sent ? (
            <div className="rounded-2xl border border-green/30 bg-green/5 p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-navy">Application received</h2>
              <p className="mt-3 text-ink-soft">
                Thank you for your interest in joining our attachment programme. Your application has been
                received successfully and is currently under review.
              </p>
              {referenceNumber && (
                <p className="mt-4 font-mono text-lg font-bold text-navy bg-white inline-block px-4 py-2 rounded-lg border border-line">
                  {referenceNumber}
                </p>
              )}
              <p className="mt-4 text-sm text-ink-soft">
                Confirmation has been sent to your email and phone. You will be notified once review is complete.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-line bg-white p-8 shadow-sm">
              <input type="text" name="website_url" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="rounded-lg bg-navy/5 border border-navy/10 p-4 text-sm text-ink-soft space-y-3">
                <div>
                  <strong className="text-navy">Phase 1 — Expression of Interest</strong>
                  <p className="mt-1">Complete the fields below. Do not upload documents here — document submission opens in the secure portal after HR shortlists your application.</p>
                </div>
                <div>
                  <strong className="text-navy">Phase 2 — Documents (after shortlisting)</strong>
                  <p className="mt-1">Mandatory uploads: application letter, CV, national ID/passport, student ID, official introduction letter, attachment request letter, and valid student insurance certificate.</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-navy sm:col-span-2">
                  Full name *
                  <input name="applicantName" required className="mt-1 w-full rounded-lg border border-line px-3 py-2.5" />
                </label>
                <label className="block text-sm font-medium text-navy">
                  Email address *
                  <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-line px-3 py-2.5" />
                </label>
                <label className="block text-sm font-medium text-navy">
                  Phone number *
                  <input name="phone" type="tel" required placeholder="07XX XXX XXX" className="mt-1 w-full rounded-lg border border-line px-3 py-2.5" />
                </label>
                <label className="block text-sm font-medium text-navy">
                  Institution *
                  <input name="institution" required placeholder="University or college name" className="mt-1 w-full rounded-lg border border-line px-3 py-2.5" />
                </label>
                <label className="block text-sm font-medium text-navy">
                  School / Faculty *
                  <input name="schoolFaculty" required placeholder="e.g. School of Computing" className="mt-1 w-full rounded-lg border border-line px-3 py-2.5" />
                </label>
                <label className="block text-sm font-medium text-navy">
                  Course / Programme *
                  <input name="course" required className="mt-1 w-full rounded-lg border border-line px-3 py-2.5" />
                </label>
                <label className="block text-sm font-medium text-navy">
                  Year of study *
                  <input name="yearOfStudy" required placeholder="e.g. 3rd Year" className="mt-1 w-full rounded-lg border border-line px-3 py-2.5" />
                </label>
                <label className="block text-sm font-medium text-navy">
                  Attachment duration
                  <input name="preferredAttachmentPeriod" placeholder="e.g. 3 months, May–August 2026" className="mt-1 w-full rounded-lg border border-line px-3 py-2.5" />
                </label>
                <label className="block text-sm font-medium text-navy">
                  Preferred start date
                  <input name="preferredStartDate" type="date" className="mt-1 w-full rounded-lg border border-line px-3 py-2.5" />
                </label>
                <label className="block text-sm font-medium text-navy">
                  Preferred department *
                  <select
                    name="preferredDepartment"
                    required
                    value={selectedDept}
                    onChange={(e) => {
                      const slug = e.target.value
                      setSelectedDept(slug)
                      const dept = departments.find((d) => d.slug === slug)
                      setSelectedOppId(dept?.opportunities?.[0]?._id || '')
                    }}
                    className="mt-1 w-full rounded-lg border border-line px-3 py-2.5"
                  >
                    {departments.length === 0 ? (
                      <option value="">No positions open — check back soon</option>
                    ) : (
                      departments.map((d) => (
                        <option key={d.slug} value={d.slug}>{d.label}</option>
                      ))
                    )}
                  </select>
                </label>
              </div>

              <label className="block text-sm font-medium text-navy">
                Brief statement of interest
                <textarea
                  name="motivationStatement"
                  rows={4}
                  maxLength={3000}
                  placeholder="Why do you want to join RCFI? What do you hope to learn during your attachment?"
                  className="mt-1 w-full rounded-lg border border-line px-3 py-2.5"
                />
              </label>

              <input type="hidden" name="positionType" value="attachment" />

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={submitting || departments.length === 0}
                className="w-full rounded-lg px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ backgroundColor: '#235e43' }}
              >
                {submitting ? 'Submitting…' : 'Submit expression of interest'}
              </button>
            </form>
          )}
        </div>
      </Section>
    </>
  )
}
