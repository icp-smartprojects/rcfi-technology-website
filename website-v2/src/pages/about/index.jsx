

import Link from 'next/link'
import SEO from '@/components/layout/SEO'
import Section from '@/components/layout/Section'
import { bg, images } from '@/lib/theme'
import { MEET_URL } from '@/lib/site'


const team = [
  { initials: 'IK', name: 'Ian Kigen Kisorio', role: 'Chief Executive Officer & Founder', focus: 'Leadership & Vision', bio: "Founder and CEO driving RCFI's mission across Kenya and East Africa.", tone: 'navy' },
  { initials: 'EM', name: 'Emmanuel Mariaria', role: 'Chief Operating Officer', focus: 'Operations', bio: 'Leads operational excellence and business development initiatives.', tone: 'navy' },
  { initials: 'IN', name: 'Ian Ndoli', role: 'Chief Technology Officer', focus: 'Technology & Engineering', bio: 'Oversees technology strategy and engineering excellence across all RCFI platforms.', tone: 'navy' },
  { initials: 'KT', name: 'Kevin Tonui', role: 'Chief Compliance Officer', focus: 'Cybersecurity & Compliance', bio: 'Leads compliance and regulatory strategy for all RCFI digital trust services.', tone: 'green' },
  { initials: 'JM', name: 'Jotham Mwangi', role: 'Backend Engineer', focus: 'Backend Engineering', bio: 'Leads backend engineering powering CertySign, Elano, and Prezio.', tone: 'green', photo: '/images/team/jotham-mwangi.jpeg' },
  { initials: 'VM', name: 'Virginia Maina', role: 'UX/UI & Frontend Developer', focus: 'Design & Frontend', bio: 'Creates intuitive product experiences and ships modern frontend systems.', tone: 'green' },
{ initials: 'TS', name: 'Tom Steve', role: 'Software Developer', focus: 'Platform Delivery', bio: 'Develops secure and scalable software solutions that power RCFI’s digital platforms.', tone: 'navy' },
{ initials: 'CH', name: 'Chebet', role: 'UI & UX Designer', focus: 'Platform Delivery', bio: 'Designs intuitive, user-centered interfaces that deliver seamless and engaging digital experiences.', tone: 'green' },
{ initials: 'KM', name: 'Kame', role: 'Frontend Developer', focus: 'Platform Delivery', bio: 'Builds responsive, modern web interfaces that ensure fast, accessible, and seamless user experiences.', tone: 'navy' },
  
]


const trustPillars = [
{
t:'Licensed by the CAK',
b:'Authorized Electronic Certification Service Provider. Our signatures are legally binding under Kenyan law — enforceable, not just convenient.'
},
{
t:'ISO 27001 certified',
b:'Information security management certified to the international standard for encryption, access control, and document handling.'
},
{
t:'Data sovereignty — hosted in Kenya',
b:'Customer data stays in Kenya, aligned with the Kenya Data Protection Act 2019.'
},
{
t:'Real PKI, operated in-house',
b:'HSM-backed key storage, X.509 certificates, and trusted timestamp authority.'
},
{
t:'Tamper-proof audit trails',
b:'Every action logged and retained for compliance and accountability.'
},
{
t:'24/7 monitoring & support',
b:'Continuous monitoring with a team ready for support and custom builds.'
}
]


export default function AboutPage(){

return (
<>


<SEO
title="About RCFI Technology"
description="RCFI Technology builds digital trust, governance, and business management platforms for Kenya, East Africa, and Africa."
/>



{/* HERO */}

{/* HERO */}

<Section
  background={bg.hero(images.people)}
  className="
    relative
    overflow-hidden
    py-[130px]
    text-white
    lg:py-[170px]
  "
>


<div
className="
relative
z-10
grid
items-center
gap-12
lg:grid-cols-[1fr_320px]
"
>


{/* LEFT CONTENT */}

<div
className="
max-w-[760px]
"
>


<h1
className="
mt-0
font-display
text-[52px]
font-extrabold
leading-[1.02]
tracking-tight
sm:text-[68px]
"
>

Building Africa&apos;s
digital trust infrastructure

</h1>



<p
className="
mt-7
max-w-[620px]
text-lg
leading-relaxed
text-white/80
"
>

We build secure technology platforms that help
organizations sign documents, manage operations,
and build trusted digital experiences across Kenya
and Africa.

</p>




<div
className="
mt-8
flex
flex-wrap
gap-5
"
>


{[
'Nairobi Based',
'CAK Licensed',
'ISO 27001'
].map(item=>(

<div
key={item}
className="
flex
items-center
gap-2
text-sm
font-semibold
"
>

<span
className="
h-2
w-2
rounded-full
bg-[#2f7652]
"
/>

{item}

</div>


))}


</div>


</div>






{/* RIGHT INFORMATION */}

<div
className="
hidden
flex-col
gap-8
border-l
border-white/30
pl-8
lg:flex
"
>


<div>

<p
className="
text-4xl
font-display
font-extrabold
"
>
3
</p>

<p
className="
mt-1
text-sm
text-white/70
"
>
Enterprise Platforms
</p>

</div>



<div>

<p
className="
text-4xl
font-display
font-extrabold
"
>
47
</p>

<p
className="
mt-1
text-sm
text-white/70
"
>
Counties Supported
</p>

</div>



<div>

<p
className="
text-4xl
font-display
font-extrabold
"
>
24/7
</p>

<p
className="
mt-1
text-sm
text-white/70
"
>
System Reliability
</p>

</div>


</div>



</div>


</Section>





{/* MISSION / VISION */}


<Section
className="
bg-white
py-[120px]
"
>


<div
className="
flex
flex-col
gap-12
"
>


<div
className="
max-w-[650px]
"
>

<span className="eyebrow">
What we stand for
</span>


<h2
className="
mt-4
heading-display
text-[42px]
sm:text-[48px]
"
>

Mission-led.
Product-built.
Compliance-first.

</h2>


</div>




<div
className="
grid
gap-8
md:grid-cols-2
"
>


<div
className="
rounded-[32px]
bg-[#235e43]
p-10
text-white
"
>


<span
className="
text-sm
font-bold
uppercase
tracking-widest
text-white/60
"
>
Our Mission
</span>


<p
className="
mt-5
font-display
text-[26px]
font-bold
leading-snug
"
>

Make legally trusted digital transactions accessible
to every organization in Africa.

</p>


</div>




<div
className="
rounded-[32px]
border
border-[#235e43]/10
bg-[#f4f8f5]
p-10
"
>


<span
className="
text-sm
font-bold
uppercase
tracking-widest
text-[#235e43]
"
>
Our Vision
</span>


<p
className="
mt-5
font-display
text-[26px]
font-bold
leading-snug
text-[#13261d]
"
>

An Africa where paperwork never slows progress —
where doing business is digital, secure, and sovereign.

</p>


</div>



</div>


</div>


</Section>


{/* TRUST SECTION */}

<Section
className="
bg-[#f3f7f4]
py-[120px]
"
>


<div
className="
flex
flex-col
gap-12
"
>


<div
className="
max-w-[700px]
"
>


<span className="eyebrow">
Why we are trusted
</span>


<h2
className="
mt-4
heading-display
text-[42px]
sm:text-[48px]
"
>

Trust isn't claimed.
It's licensed, certified, and audited.

</h2>


<p
className="
mt-5
text-lg
leading-relaxed
text-ink-muted
"
>

Every layer of our platforms is built around
security, compliance, and operational reliability.

</p>


</div>





<div
className="
grid
gap-6
md:grid-cols-2
lg:grid-cols-3
"
>


{
trustPillars.map((item)=>(


<div
key={item.t}
className="
group
rounded-[30px]
border
border-black/5
bg-white
p-8
transition
duration-300
hover:-translate-y-1
hover:shadow-xl
"
>


<div
className="
flex
h-11
w-11
items-center
justify-center
rounded-2xl
bg-[#235e43]/10
font-bold
text-[#235e43]
"
>

✓

</div>



<h3
className="
mt-6
font-display
text-[19px]
font-bold
text-[#13261d]
"
>

{item.t}

</h3>



<p
className="
mt-3
text-sm
leading-relaxed
text-ink-muted
"
>

{item.b}

</p>


</div>


))
}


</div>



</div>


</Section>






{/* PLATFORM STACK */}


<Section
background={bg.darkPanel(images.analytics)}
className="
py-[120px]
text-white
"
>


<div
className="
flex
flex-col
gap-12
"
>



<div
className="
max-w-[700px]
"
>


<span
className="
text-sm
font-bold
uppercase
tracking-[0.15em]
text-[#78c99d]
"
>

Platform ecosystem

</span>



<h2
className="
mt-4
font-display
text-[42px]
font-extrabold
leading-tight
sm:text-[48px]
"
>

Three products.
One engineering standard.

</h2>



<p
className="
mt-5
text-lg
leading-relaxed
text-white/70
"
>

Built in Nairobi. Designed for regulated
industries. Connected by one secure technology
foundation.

</p>


</div>






<div
className="
grid
gap-6
md:grid-cols-3
"
>


{[
{
name:'CertySign',
line:'Digital Trust & PKI',
href:'/products/certysign',
body:'Legally binding e-signatures, certificates, and trusted timestamping with audit-grade trails.'
},
{
name:'Elano',
line:'Governance & Intelligence',
href:'/products/elano',
body:'Institution registration, boards, planning, M&E, and finance in one governed workspace.'
},
{
name:'Prezio',
line:'Operations Automation',
href:'/products/prezio',
body:'Requests, approvals, documents, and workflows that move without chasing people down.'
}

].map((product)=>(


<Link
key={product.name}
href={product.href}
className="
group
flex
flex-col
rounded-[32px]
border
border-white/15
bg-white/[0.07]
p-8
no-underline
backdrop-blur-md
transition
duration-300
hover:-translate-y-2
hover:border-[#78c99d]/50
hover:bg-white/[0.12]
"
>


<span
className="
text-xs
font-bold
uppercase
tracking-[0.15em]
text-[#78c99d]
"
>

{product.line}

</span>



<h3
className="
mt-5
font-display
text-[30px]
font-extrabold
text-white
"
>

{product.name}

</h3>



<p
className="
mt-4
text-sm
leading-relaxed
text-white/70
"
>

{product.body}

</p>



<span
className="
mt-8
text-sm
font-bold
text-[#78c99d]
"
>

Explore product →

</span>


</Link>


))


}



</div>



</div>


</Section>


{/* TEAM SECTION */}

<Section
className="
bg-white
py-[120px]
"
>


<div
className="
flex
flex-col
gap-12
"
>


<div
className="
mx-auto
max-w-[650px]
text-center
"
>


<span className="eyebrow">
Leadership & engineering
</span>



<h2
className="
mt-4
heading-display
text-[42px]
sm:text-[48px]
"
>

The team behind the platform

</h2>



<p
className="
mt-5
text-base
leading-relaxed
text-ink-muted
"
>

Operators, engineers, and compliance specialists
building production technology for regulated
environments.

</p>


</div>





<div
className="
grid
gap-6
sm:grid-cols-2
lg:grid-cols-3
"
>


{
team.map((member)=>(


<div
key={member.name}
className="
group
rounded-[32px]
border
border-black/5
bg-[#fafcfb]
p-8
text-center
transition
duration-300
hover:-translate-y-1
hover:shadow-xl
"
>


<span
className={`
mx-auto
flex
h-[72px]
w-[72px]
items-center
justify-center
overflow-hidden
rounded-full
font-display
text-xl
font-extrabold
text-white
${
member.photo
? 'bg-transparent'
: member.tone === 'green'
? 'bg-[#2f7652]'
: 'bg-[#13261d]'
}
`}
>

{member.photo ? (
<img
src={member.photo}
alt={member.name}
className="h-full w-full object-cover"
/>
) : (
member.initials
)}

</span>




<div
className="
mt-6
flex
flex-col
gap-1
"
>


<h3
className="
font-display
text-lg
font-extrabold
text-[#13261d]
"
>

{member.name}

</h3>



<span
className="
text-xs
font-bold
uppercase
tracking-wide
text-[#235e43]
"
>

{member.role}

</span>



<span
className="
text-xs
font-semibold
text-gray-400
"
>

{member.focus}

</span>


</div>




<p
className="
mt-5
text-sm
leading-relaxed
text-gray-600
"
>

{member.bio}

</p>


</div>


))


}


</div>


</div>


</Section>







{/* AFRICA FOOTPRINT */}



<Section
className="
bg-[#235e43]
py-[110px]
text-white
"
>


<div
className="
flex
flex-col
gap-12
"
>


<div
className="
max-w-[600px]
"
>


<span
className="
text-sm
font-bold
uppercase
tracking-[0.15em]
text-white/60
"
>

Coverage

</span>



<h2
className="
mt-4
font-display
text-[42px]
font-extrabold
leading-tight
sm:text-[48px]
"
>

Built in Nairobi.
Ready for the continent.

</h2>



<p
className="
mt-5
text-white/75
leading-relaxed
"
>

From Kenya's technology ecosystem to Africa's
digital future, our platforms are designed for
secure growth across borders.

</p>


</div>






<div
className="
grid
gap-8
sm:grid-cols-2
lg:grid-cols-4
"
>


{
[
{
v:'Nairobi',
l:'Headquartered at Hifadhi House, ICD Road'
},
{
v:'Kenya',
l:'Serving organizations across all 47 counties'
},
{
v:'East Africa',
l:'Regional and cross-border ready'
},
{
v:'Africa',
l:'Building infrastructure for digital transformation'
}
].map((item)=>(


<div
key={item.v}
className="
border-l-2
border-white/40
pl-6
"
>


<h3
className="
font-display
text-[32px]
font-extrabold
"
>

{item.v}

</h3>



<p
className="
mt-3
text-sm
leading-relaxed
text-white/70
"
>

{item.l}

</p>


</div>


))


}


</div>


</div>


</Section>







{/* FINAL CTA */}



<Section
background={bg.darkPanel(images.lobby)}
className="
py-[120px]
text-white
text-center
"
>


<div
className="
mx-auto
max-w-[760px]
flex
flex-col
items-center
gap-6
"
>


<span
className="
rounded-full
border
border-white/20
bg-white/10
px-4
py-2
text-sm
"
>

Partner with RCFI

</span>



<h2
className="
font-display
text-[42px]
font-extrabold
leading-tight
sm:text-[52px]
"
>

Build secure digital infrastructure
with a team that understands trust.

</h2>



<p
className="
max-w-[620px]
text-lg
leading-relaxed
text-white/70
"
>

From platform demonstrations to fully customized
solutions, connect with the engineers and product
teams building Africa's digital future.

</p>





<div
className="
flex
flex-wrap
justify-center
gap-4
"
>


<a
href={MEET_URL}
target="_blank"
rel="noopener noreferrer"
className="
rounded-full
bg-white
px-8
py-4
font-bold
text-[#235e43]
no-underline
transition
hover:bg-[#f3f7f4]
"
>

Book a Meeting

</a>



<Link
href="/contact"
className="
rounded-full
border
border-white/40
px-8
py-4
font-semibold
text-white
no-underline
transition
hover:bg-white/10
"
>

Send a Message

</Link>




<a
href="mailto:info@rcfi.co.ke"
className="
rounded-full
border
border-white/30
px-8
py-4
font-bold
text-white
no-underline
transition
hover:bg-white/10
"
>

Email info@rcfi.co.ke

</a>


</div>



</div>


</Section>


</>
)
}