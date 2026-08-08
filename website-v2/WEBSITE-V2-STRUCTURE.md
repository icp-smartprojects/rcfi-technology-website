# RCFI Website V2 — Folder Structure

Next.js 14 (Pages Router) · Tailwind CSS · Port **3015** (dev)

Repo: `Reprodrive-centre-for-innovation/v-02`

---

## Quick tree

```
website-v2/
├── public/                         # Static assets (served at /)
│   ├── images/
│   │   ├── partners/               # Partner logos (transparent PNGs)
│   │   ├── scenes/                 # Section background photos
│   │   ├── logo-*.png / .svg       # Brand logos
│   │   ├── africa-network.png      # Homepage hero background
│   │   ├── certysign-mockups.png
│   │   └── aws.png, azure.png, …   # Legacy copies (partners use /partners/)
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── components/
│   │   ├── home/                   # Homepage sections only
│   │   │   ├── Hero.jsx
│   │   │   ├── Partners.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── WhyRCFI.jsx
│   │   │   ├── Cinematic.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Industries.jsx
│   │   │   ├── Impact.jsx
│   │   │   └── FinalCTA.jsx
│   │   ├── layout/                 # Global shell
│   │   │   ├── TopBar.jsx          # ISO / CAK / phone strip
│   │   │   ├── Header.jsx          # Nav + Book a Meeting
│   │   │   ├── Footer.jsx
│   │   │   ├── Section.jsx         # Background image sections
│   │   │   ├── SEO.jsx
│   │   │   └── PageTransition.jsx  # Route progress bar
│   │   ├── about/                  # (empty — about content in pages/)
│   │   ├── contact/                # (empty)
│   │   └── products/               # (empty — product pages are full pages)
│   │       ├── certysign/
│   │       ├── elano/
│   │       └── prezio/
│   │
│   ├── pages/                      # Routes (file = URL)
│   │   ├── _app.jsx                # App wrapper: TopBar, Header, Footer
│   │   ├── _document.jsx           # HTML shell, meta
│   │   ├── index.jsx               # /
│   │   ├── about/
│   │   │   └── index.jsx           # /about
│   │   ├── contact/
│   │   │   └── index.jsx           # /contact
│   │   └── products/
│   │       ├── certysign.jsx       # /products/certysign
│   │       ├── elano.jsx           # /products/elano
│   │       └── prezio.jsx          # /products/prezio
│   │
│   ├── lib/
│   │   ├── theme.js                # Images, partners, bg helpers, scenes
│   │   └── site.js                 # MEET_URL (meet.rcfi.co.ke)
│   │
│   ├── styles/
│   │   └── globals.css             # Tailwind + design tokens (.btn-primary, etc.)
│   │
│   └── middleware.js               # Bot friction, asset bypass
│
├── .shots/                         # Local screenshots (not deployed)
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json                   # @/ → src/
├── package.json
└── README.md
```

---

## Routes

| URL | File | Description |
|-----|------|-------------|
| `/` | `src/pages/index.jsx` | Home — composes all `components/home/*` |
| `/about` | `src/pages/about/index.jsx` | Team, mission, trust pillars |
| `/contact` | `src/pages/contact/index.jsx` | Form, hours, Book a Meeting |
| `/products/certysign` | `src/pages/products/certysign.jsx` | CertySign product page |
| `/products/elano` | `src/pages/products/elano.jsx` | Elano product page |
| `/products/prezio` | `src/pages/products/prezio.jsx` | Prezio product page |

---

## Where to edit what

| Change | Location |
|--------|----------|
| Homepage hero | `src/components/home/Hero.jsx` |
| Partner logos marquee | `src/components/home/Partners.jsx` |
| Partner image files | `public/images/partners/*.png` |
| Partner list | `src/lib/theme.js` → `partners` |
| Book a Meeting URL | `src/lib/site.js` → `MEET_URL` |
| Nav links / header CTA | `src/components/layout/Header.jsx` |
| Footer links | `src/components/layout/Footer.jsx` |
| Top compliance strip | `src/components/layout/TopBar.jsx` |
| Page title / meta | `src/components/layout/SEO.jsx` or per-page `<SEO />` |
| Colors, buttons, fonts | `src/styles/globals.css` + `tailwind.config.js` |
| Background photos | `public/images/scenes/` + `src/lib/theme.js` |
| Office hours | `src/pages/contact/index.jsx` |
| Team members | `src/pages/about/index.jsx` → `team` array |
| Product page content | `src/pages/products/*.jsx` |

---

## Component pattern

```
pages/index.jsx          → imports home sections
pages/products/elano.jsx → full page (large single file)
components/home/*        → reusable homepage blocks
components/layout/*      → shared chrome (header, footer, section wrapper)
lib/theme.js             → shared image paths and scene presets
```

**Note:** `src/components/about/`, `contact/`, and `products/` folders exist but are **empty**. Page content lives directly in `src/pages/`. Split into components there when files grow too large.

---

## Public assets

| Path | Use |
|------|-----|
| `/images/logo-green.png` | Header logo |
| `/images/partners/*.png` | Partner marquee (transparent) |
| `/images/scenes/*.jpg` | Section backgrounds via `theme.js` |
| `/images/africa-network.png` | Hero background |
| `/images/certysign-mockups.png` | CertySign page mockups |

Referenced in code as `/images/...` (from `public/images/`).

---

## Scripts

```bash
npm install
npm run dev      # http://127.0.0.1:3015
npm run build    # static export / production build
npm run start    # serve production build on 3015
```

---

## Config files

| File | Role |
|------|------|
| `next.config.js` | Next.js config (export, images, etc.) |
| `tailwind.config.js` | Colors: navy, green, canvas, fonts |
| `jsconfig.json` | `@/` alias → `src/` |
| `src/middleware.js` | Security headers, bot filter |

---

## Add a new page

1. Create `src/pages/your-route/index.jsx` (or `your-route.jsx`)
2. Add `<SEO title="..." description="..." />`
3. Use `<Section>` from `components/layout/Section.jsx` for backgrounds
4. Add link in `Header.jsx` nav `links` array
5. Update `public/sitemap.xml` if needed

---

## Add a new product page

1. Create `src/pages/products/new-product.jsx`
2. Add card in `src/components/home/Products.jsx`
3. Optional: `src/components/products/new-product/` for split components

---

## Do not commit / deploy

- `node_modules/`
- `.next/`
- `out/` (if generated)
- `.shots/` (local screenshots)
- `*-removebg-preview.png` (root — source copies; use `public/images/partners/`)

---

*Last synced with website-v2 codebase structure.*
