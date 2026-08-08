

import { useState } from 'react'
import SEO from '@/components/layout/SEO'
import Section from '@/components/layout/Section'
import { scenes } from '@/lib/theme'
import { MEET_URL, SUPPORT_PORTAL_URL } from '@/lib/site'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [ticketId, setTicketId] = useState('')
  const [isFollowUp, setIsFollowUp] = useState(false)
  const [wasReopened, setWasReopened] = useState(false)
  const [consent, setConsent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)

    if (String(data.get('website_url') || '').trim()) return

    if (!data.get('consent_ack')) {
      setError('Please confirm that RCFI may contact you by email and SMS.')
      return
    }

    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          organization: data.get('organization'),
          interest: data.get('interest'),
          message: data.get('message'),
          consent_ack: true,
          website_url: data.get('website_url'),
        }),
      })
      const payload = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(payload.message || 'Could not send your message')
      }
      setSent(true)
      setTicketId(payload.data?.ticketId || '')
      setIsFollowUp(Boolean(payload.data?.isFollowUp))
      setWasReopened(Boolean(payload.data?.wasReopened))
      setConsent(false)
      form.reset()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setError(err.message || 'Could not send your message')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <SEO
        title="Contact RCFI Technology"
        description="Book a meeting with the RCFI team or send a message — demo, sales, support, and partnership inquiries."
      />


      <Section
        background={scenes.contentA()}
        className="
          relative
          py-[80px]
        "
      >

        <div className="flex flex-col gap-12">


          {/* INTRO SECTION */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              bg-[#235e43]
              px-8
              py-14
              text-white
              sm:px-12
            "
          >

            <div
              className="
                absolute
                -right-24
                -top-24
                h-[280px]
                w-[280px]
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            <div
              className="
                relative
                flex
                max-w-[700px]
                flex-col
                gap-5
              "
            >

              <h1
                className="
                  m-0
                  max-w-[24ch]
                  font-display
                  text-[40px]
                  font-extrabold
                  leading-[1.1]
                  text-pretty
                  sm:text-[48px]
                "
              >
                Let&apos;s talk about your digital transformation
              </h1>


              <p
                className="
                  m-0
                  max-w-[60ch]
                  text-[17px]
                  leading-relaxed
                  text-white/80
                "
              >
                Book a live session on our calendar for demos, sales, or support — or send us a
                message and we&apos;ll reply within one business day.
              </p>

              <div className="mt-2 flex flex-wrap gap-4">
                <a
                  href={MEET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-white
                    px-7
                    py-3.5
                    text-[15px]
                    font-bold
                    text-[#235e43]
                    no-underline
                    shadow-lg
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-[#f0f7f3]
                  "
                >
                  Book a Meeting
                </a>
                <a
                  href="mailto:info@rcfi.co.ke"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/40
                    px-7
                    py-3.5
                    text-[15px]
                    font-semibold
                    text-white
                    no-underline
                    transition-colors
                    hover:bg-white/10
                  "
                >
                  info@rcfi.co.ke
                </a>
              </div>

            </div>

          </div>



          {/* CONTACT CONTENT */}
          <div
            className="
              grid
              items-start
              gap-12
              lg:grid-cols-[1fr_0.72fr]
            "
          >


            {/* FORM */}
            <div
              className="
                flex
                flex-col
                gap-6
                rounded-[22px]
                border
                border-line
                bg-white
                p-10
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >

              <h2 className="heading-display m-0 text-[26px]">
                Send us a message
              </h2>

              {error && (
                <div className="rounded-[10px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                  {error}
                </div>
              )}

              {sent ? (
                <div className="flex flex-col gap-2 rounded-[10px] border border-green-border bg-green-soft p-6">

                  <span className="font-display text-[17px] font-bold text-[#146A52]">
                    ✓ {isFollowUp ? 'Follow-up received' : 'Message sent'}
                  </span>

                  <p className="m-0 text-sm leading-relaxed text-ink-soft">
                    {isFollowUp ? (
                      <>
                        Your message was added to your <strong>existing ticket</strong>
                        {ticketId ? (
                          <> <strong className="font-mono text-ink">#{ticketId}</strong></>
                        ) : null}
                        {wasReopened ? ' and the ticket was reopened for our team.' : '.'}
                      </>
                    ) : (
                      <>Thank you for reaching out. Our team replies within one business day.</>
                    )}
                    {ticketId && !isFollowUp ? (
                      <>
                        {' '}Your reference is{' '}
                        <strong className="font-mono text-ink">#{ticketId}</strong>.
                      </>
                    ) : null}
                    {' '}Confirmations were sent to your <strong>email</strong> and <strong>SMS</strong>.
                    {' '}For urgent matters, email{' '}
                    <a href="mailto:info@rcfi.co.ke" className="font-bold">
                      info@rcfi.co.ke
                    </a>
                    .
                  </p>

                  <p className="m-0 text-sm leading-relaxed text-ink-soft">
                    RCFI staff can sign in to the{' '}
                    <a
                      href={`${SUPPORT_PORTAL_URL}/login`}
                      className="font-semibold text-navy underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      support portal
                    </a>{' '}
                    with your credentials to view and follow up on this message.
                  </p>

                  <button
                    type="button"
                    onClick={() => { setSent(false); setTicketId(''); setIsFollowUp(false); setWasReopened(false) }}
                    className="
                      cursor-pointer
                      self-start
                      border-0
                      bg-transparent
                      p-0
                      text-sm
                      font-semibold
                      text-navy
                      underline
                    "
                  >
                    Send another message
                  </button>

                </div>
              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="relative flex flex-col gap-[18px]"
                  autoComplete="on"
                >

                  <div
                    className="
                      absolute
                      -left-[9999px]
                      h-0
                      w-0
                      overflow-hidden
                      opacity-0
                    "
                    aria-hidden
                  >
                    <label>
                      Company website
                      <input
                        type="text"
                        name="website_url"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </label>
                  </div>


                  <div className="grid gap-4 sm:grid-cols-2">

                    <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-ink-soft">
                      Full name *
                      <input
                        name="name"
                        required
                        maxLength={120}
                        placeholder="Jane Wanjiku"
                        className="input-field"
                        autoComplete="name"
                      />
                    </label>


                    <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-ink-soft">
                      Email address *
                      <input
                        name="email"
                        type="email"
                        required
                        maxLength={160}
                        placeholder="jane@organization.co.ke"
                        className="input-field"
                        autoComplete="email"
                      />
                    </label>

                  </div>

                                    <div className="grid gap-4 sm:grid-cols-2">

                    <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-ink-soft">
                      Phone number *
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="+254 7XX XXX XXX"
                        className="input-field"
                        autoComplete="tel"
                      />
                    </label>


                    <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-ink-soft">
                      Organization
                      <input
                        name="organization"
                        placeholder="Your organization"
                        className="input-field"
                      />
                    </label>

                  </div>



                  <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-ink-soft">

                    I&apos;m interested in *

                    <select
                      name="interest"
                      required
                      defaultValue="general"
                      className="input-field"
                    >

                      <option value="general">
                        General inquiry
                      </option>

                      <option value="demo">
                        Request a demo
                      </option>

                      <option value="certysign">
                        CertySign
                      </option>

                      <option value="elano">
                        Elano
                      </option>

                      <option value="prezio">
                        Prezio
                      </option>

                      <option value="health_security">
                        Health Security / Cybersecurity
                      </option>

                      <option value="health_security_partnership">
                        Health security partnership
                      </option>

                      <option value="partnership">
                        Partnership
                      </option>

                      <option value="support">
                        Technical support
                      </option>

                    </select>

                  </label>



                  <label className="flex flex-col gap-1.5 text-[13px] font-semibold text-ink-soft">

                    Message *

                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us how we can help…"
                      className="input-field resize-y"
                    />

                  </label>

                  <label className="flex items-start gap-3 rounded-[10px] border border-line bg-canvas/50 px-4 py-3 text-[13px] leading-relaxed text-ink-soft">
                    <input
                      type="checkbox"
                      name="consent_ack"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                      className="mt-0.5 h-4 w-4 shrink-0 accent-[#235e43]"
                    />
                    <span>
                      I agree that RCFI Technology may contact me about this inquiry by{' '}
                      <strong>email</strong> and <strong>SMS</strong>, and that my details will be handled
                      securely in line with our privacy practices. *
                    </span>
                  </label>

   <button
  type="submit"
  disabled={sending || !consent}
  className="
    self-start
    border-0
    rounded-lg
    bg-[#235e43]
    px-6
    py-3
    text-sm
    font-bold
    text-white
    transition-all
    hover:bg-[#2f7652]
    hover:-translate-y-0.5
    disabled:opacity-60
    disabled:cursor-not-allowed
    disabled:hover:translate-y-0
  "
>
  {sending ? 'Sending…' : 'Send Message'}
</button>


                </form>

              )}

            </div>


            {/* CONTACT DETAILS */}
            <div className="flex flex-col gap-4">
              <a
                href={MEET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  flex-col
                  gap-2
                  rounded-xl
                  border
                  border-[#235e43]
                  bg-[#235e43]
                  px-[26px]
                  py-[22px]
                  no-underline
                  text-white
                  shadow-[0_12px_40px_rgba(35,94,67,0.25)]
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-[#2f7652]
                "
              >
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/80">
                  Schedule online
                </span>
                <span className="font-display text-lg font-bold">
                  Book a Meeting
                </span>
                <span className="text-[13px] text-white/85">
                  Demo, sales, support, partnership, or onboarding — pick a time at meet.rcfi.co.ke
                </span>
              </a>

              <a
                href="mailto:info@rcfi.co.ke"
                className="
                  flex
                  flex-col
                  gap-1
                  rounded-xl
                  border
                  border-line
                  bg-white
                  px-[26px]
                  py-[22px]
                  no-underline
                  transition-colors
                  hover:border-green
                "
              >

                <span className="text-xs font-bold uppercase tracking-[0.1em] text-ink-faint">
                  Email us
                </span>

                <span className="font-display text-lg font-bold text-navy">
                  info@rcfi.co.ke
                </span>

                <span className="text-[13px] text-ink-muted">
                  We reply within one business day
                </span>

              </a>

              <a
                href="https://maps.google.com/?q=Hifadhi+House+ICD+Road+Nairobi"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  flex-col
                  gap-1
                  rounded-xl
                  border
                  border-line
                  bg-white
                  px-[26px]
                  py-[22px]
                  no-underline
                  transition-colors
                  hover:border-green
                "
              >

                <span className="text-xs font-bold uppercase tracking-[0.1em] text-ink-faint">
                  Visit us
                </span>

                <span className="font-display text-lg font-bold text-navy">
                  Hifadhi House, 5th Floor
                </span>

                <span className="text-[13px] text-ink-muted">
                  Along ICD Road, Nairobi, Kenya · By appointment
                </span>

              </a>





              <div
                className="
                  flex
                  flex-col
                  gap-2
                  rounded-xl
                  bg-[#235e43]
                  px-[26px]
                  py-[22px]
                  text-white
                "
              >

                <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/70">
                  Office hours
                </span>


                <div className="flex justify-between text-sm">

                  <span className="text-white/75">
                    Monday – Friday
                  </span>

                  <span className="font-semibold">
                    8:30 AM – 5:30 PM
                  </span>

                </div>



                <span className="mt-1 text-xs text-white/60">
                  East Africa Time (EAT / UTC+3)
                </span>


              </div>


            </div>


          </div>


        </div>


      </Section>


    </>
  )
}