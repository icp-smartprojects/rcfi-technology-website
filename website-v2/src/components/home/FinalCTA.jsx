import Link from 'next/link'
import Section from '@/components/layout/Section'
import { bg, images } from '@/lib/theme'
import { MEET_URL } from '@/lib/site'

export default function FinalCTA() {
  return (
    <Section background={bg.hero(images.handshake)} className="py-24">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-5 text-center">
        <h2 className="m-0 font-display text-[40px] font-extrabold text-white text-pretty">
          Ready to transform your operations?
        </h2>
        <p className="m-0 max-w-[56ch] text-[17px] leading-relaxed text-ink-pale">
          Talk to our team about how RCFI solutions can help your organization achieve digital
          excellence — we&apos;re available 24/7.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a href={MEET_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book a Meeting
          </a>
          <Link href="/contact" className="btn-ghost">
            Send a Message
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-[13px] text-ink-mist">
          <span>Free consultation</span>
          <span>·</span>
          <span>No credit card required</span>
          <span>·</span>
          <span>Quick setup</span>
        </div>
      </div>
    </Section>
  )
}
