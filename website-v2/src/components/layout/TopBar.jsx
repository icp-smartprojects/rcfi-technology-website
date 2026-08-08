export default function TopBar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-7 bg-[#235e43] px-8 py-2 text-[13px] text-ink-pale">
      <span className="inline-flex items-center gap-1.5">
        <span className="text-green-light">●</span> ISO 27001 Certified
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="text-green-light">●</span> CAK Licensed ECSP
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="text-green-light">●</span> Kenya DPA Compliant
      </span>
      <a
        href="mailto:info@rcfi.co.ke"
        className="font-semibold text-white no-underline hover:text-white"
      >
        info@rcfi.co.ke
      </a>
    </div>
  )
}
