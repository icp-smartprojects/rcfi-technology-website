import Section from '@/components/layout/Section'
import { bg, images } from '@/lib/theme'

export default function Cinematic({
  title = 'Built in Nairobi. Trusted across Africa.',
  body = 'Sovereign digital infrastructure — hosted in Kenya, licensed in Kenya, serving the continent.',
  image = images.nairobi,
  centered = true,
  cta,
}) {
  return (
    <Section
      background={bg.cinematic(image)}
      className={`flex min-h-[480px] items-center py-24 ${centered ? 'text-center' : ''}`}
    >
      <div
        className={`flex w-full flex-col gap-[18px] ${
          centered ? 'items-center text-center' : 'items-start text-left'
        }`}
      >
        <h2
          className={`m-0 max-w-[22ch] font-display text-[40px] font-extrabold leading-[1.05] text-white text-pretty sm:text-[56px] ${
            centered ? '' : 'max-w-[20ch]'
          }`}
        >
          {title}
        </h2>
        <p className="m-0 max-w-[52ch] text-[19px] leading-relaxed text-[#D7E3EC]">{body}</p>
        {cta}
      </div>
    </Section>
  )
}
