/** Overlay tones — always paired with a photo for consistent depth */
export const overlay = {
  hero: 'linear-gradient(160deg, rgba(5,30,50,0.92) 0%, rgba(7,45,74,0.72) 100%)',
  heroGreen:
    'linear-gradient(160deg, rgba(6,38,62,0.93) 0%, rgba(10,62,48,0.88) 100%)',
  soft: 'linear-gradient(180deg, rgba(232,240,247,0.48) 0%, rgba(205,220,233,0.58) 100%)',
  softAlt:
    'linear-gradient(180deg, rgba(234,241,247,0.45) 0%, rgba(200,218,232,0.55) 100%)',
  softLight:
    'linear-gradient(180deg, rgba(236,243,248,0.52) 0%, rgba(215,228,239,0.60) 100%)',
  softMuted:
    'linear-gradient(180deg, rgba(220,232,241,0.42) 0%, rgba(185,208,225,0.55) 100%)',
  dusk: 'linear-gradient(180deg, rgba(5,32,52,0.72) 0%, rgba(4,26,42,0.84) 100%)',
  // duskSoft: 'linear-gradient(180deg, rgba(6,40,65,0.66) 0%, rgba(5,34,56,0.80) 100%)',
  duskSoft:
  'linear-gradient(180deg, rgba(35,94,67,0.45) 0%, rgba(16,42,31,0.55) 100%)',
  cinematic: 'linear-gradient(180deg, rgba(4,24,40,0.58) 0%, rgba(4,24,40,0.80) 100%)',
  // darkPanel:
  //   'linear-gradient(180deg, rgba(6,38,62,0.94) 0%, rgba(7,47,76,0.92) 100%)',
darkPanel:
  'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 100%)',
  impact: 'linear-gradient(160deg, rgba(6,38,62,0.94) 0%, rgba(7,47,76,0.90) 100%)',
  services:
    'radial-gradient(900px 480px at 88% -20%, rgba(30,142,110,0.22), transparent 60%), radial-gradient(700px 420px at -10% 115%, rgba(15,82,130,0.5), transparent 55%), #072F4C',
    productModules:
  'linear-gradient(180deg, rgba(35,94,67,0.35) 0%, rgba(16,42,31,0.45) 100%)',
}

/**
 * Scene helper — image scrolls WITH the section (no background-attachment:fixed)
 * so overlays and photos stay in sync on every page / mobile.
 */
function scene(overlayKey, imageUrl, options = {}) {
  const darkKeys = new Set([
    'hero',
    'heroGreen',
    'cinematic',
    'darkPanel',
    'impact',
    'dusk',
    'duskSoft',
    'services',
  ])
  return {
    overlay: overlay[overlayKey],
    image: imageUrl,
    tone: darkKeys.has(overlayKey) ? 'dark' : 'light',
    eager: Boolean(options.eager),
  }
}

/** Local optimized scenes — same-origin, ~100–250KB each (no remote Unsplash latency) */
export const images = {
  skyline: '/images/scenes/skyline.jpg',
  office: '/images/scenes/office.jpg',
  officeAlt: '/images/scenes/officeAlt.jpg',
  nairobi: '/images/scenes/nairobi.jpg',
  earth: '/images/scenes/earth.jpg',
  handshake: '/images/scenes/handshake.jpg',
  docs: '/images/scenes/docs.jpg',
  finance: '/images/scenes/finance.jpg',
  team: '/images/scenes/team.jpg',
  meeting: '/images/scenes/meeting.jpg',
  compliance: '/images/scenes/compliance.jpg',
  analytics: '/images/scenes/analytics.jpg',
  cityWork: '/images/scenes/cityWork.jpg',
  collaboration: '/images/scenes/collaboration.jpg',
  people: '/images/scenes/people.jpg',
  lobby: '/images/scenes/lobby.jpg',
}

/** Prefer these helpers everywhere so pages share the same scene language */
export const bg = {
  hero: (url) => scene('hero', url, { eager: true }),
  heroGreen: (url) => scene('heroGreen', url, { eager: true }),
  soft: (url) => scene('soft', url),
  softAlt: (url) => scene('softAlt', url),
  softLight: (url) => scene('softLight', url),
  softMuted: (url) => scene('softMuted', url),
  dusk: (url) => scene('dusk', url),
  duskSoft: (url) => scene('duskSoft', url),
  cinematic: (url) => scene('cinematic', url, { eager: true }),
  darkPanel: (url) => scene('darkPanel', url),
  impact: (url) => scene('impact', url),
  productModules: (url) => scene('productModules', url),
  services: { overlay: overlay.services, image: null },
}

/**
 * Page rhythm — dusk bands over atmospheric photos (not blown-out white offices).
 * Pair with light headings + frosted white cards.
 */
export const scenes = {
  // contentA: () => bg.duskSoft(images.cityWork),
  contentA: () => bg.productModules(images.cityWork),
  contentB: () => bg.dusk(images.meeting),
  contentMuted: () => bg.duskSoft(images.compliance),
  contentDocs: () => bg.dusk(images.docs),
  cta: () => bg.dusk(images.lobby),
  kenya: () => bg.cinematic(images.nairobi),
  kenyaDark: () => bg.impact(images.earth),
}

export const partners = [
  { name: 'Konza Technopolis', src: '/images/partners/konza.png?v=2' },
  { name: 'Kenya Revenue Authority', src: '/images/partners/kra.png?v=2' },
  { name: 'Communications Authority of Kenya', src: '/images/partners/cak.png?v=2' },
  { name: 'Amazon Web Services', src: '/images/partners/aws.png?v=2' },
  { name: 'Microsoft Azure', src: '/images/partners/azure.png?v=2' },
  { name: 'Crown Interactive', src: '/images/partners/crown.png?v=2' },
]



