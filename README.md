# RCFI Technology Website

Official website for Reprodrive Center for Innovation Limited - Digital Trust, Governance, and Business Management Solutions.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/rcfi/website.git
cd rcfi-technology-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
rcfi-technology-website/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── products/
│   │   ├── team/
│   │   ├── partners/
│   │   ├── certifications/
│   │   └── solutions/
│   ├── fonts/
│   └── docs/
├── src/
│   ├── components/
│   │   ├── common/         # Reusable components
│   │   ├── home/           # Homepage sections
│   │   ├── products/       # Product page components
│   │   ├── about/          # About page components
│   │   ├── solutions/      # Solutions page components
│   │   ├── resources/      # Resources page components
│   │   ├── partners/       # Partners page components
│   │   └── contact/        # Contact page components
│   ├── data/              # Static data and content
│   ├── pages/             # Next.js pages
│   ├── styles/            # Global styles
│   ├── utils/             # Utility functions
│   └── hooks/             # Custom React hooks
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Animations:** Framer Motion
- **Language:** JavaScript/TypeScript

## 🛠️ Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Format code
npm run format
```

### Adding New Content

#### Adding a New Product

1. Update `src/data/productsData.js`
2. Create component in `src/components/products/[product-name]/`
3. Create page in `src/pages/products/[product-name].jsx`

#### Adding a New Solution

1. Update `src/data/solutionsData.js`
2. Create component in `src/components/solutions/`
3. Create page in `src/pages/solutions/[solution-name].jsx`

#### Adding a Blog Post

1. Create content in `src/data/resourcesData.js`
2. Add images to `public/images/blog/`
3. Create page in `src/pages/resources/blog/[slug].jsx`

## 🎯 Key Features

### Homepage
- Hero section with CTAs
- Trust bar with partner logos
- Products overview
- Why choose us section
- Industries served
- Platform highlights with video
- Success metrics
- Testimonials carousel
- Latest news/blog posts
- Final CTA section

### Product Pages (DigiSign, Elano, Prezio)
- Hero section
- Problem/Challenge statement
- Solution overview
- Detailed features
- Use cases by industry
- Technical specifications
- Integrations
- Pricing tiers
- FAQs
- Customer stories
- Final CTA

### About Page
- Company overview
- Mission, Vision, Values
- Timeline/Milestones
- Certifications & compliance
- Team profiles
- Partners ecosystem

### Solutions Pages (By Industry)
- Industry-specific hero
- Challenges faced
- How RCFI helps
- Success stories
- Relevant features
- Final CTA

### Resources Section
- Case studies
- White papers
- Blog
- Documentation
- FAQs

### Contact Pages
- General contact form
- Demo request form
- Sales inquiry
- Support channels
- Office locations

## 🎨 Design System

### Colors
- **Primary:** Blue (#0ea5e9)
- **Secondary:** Purple (#a855f7)
- **Accent:** Orange (#f97316)
- **Neutral:** Gray scale

### Typography
- **Display Font:** Poppins
- **Body Font:** Inter
- **Monospace:** Fira Code

### Components
All components follow a consistent design pattern:
- Rounded corners (2xl for cards)
- Soft shadows with hover effects
- Smooth transitions (300ms)
- Responsive breakpoints (mobile-first)

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px
- **Large Desktop:** > 1280px

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form API
NEXT_PUBLIC_API_URL=https://api.rcfi.co.ke

# Site URL
NEXT_PUBLIC_SITE_URL=https://rcfi.co.ke
```

### Site Metadata

Update in `src/data/companyData.js`:
- Company information
- Contact details
- Social media links
- Certifications
- Stats/metrics

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

```bash
# Or deploy via CLI
npm install -g vercel
vercel
```

### Other Platforms

Build the static site:

```bash
npm run build
npm run export
```

Deploy the `out/` directory to your hosting provider.

## 📊 Analytics

The site includes Google Analytics integration. Update the tracking ID in `.env.local`.

## 🔒 Security

- All forms use CSRF protection
- Environment variables for sensitive data
- HTTPS enforced
- Security headers configured in `next.config.js`

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run E2E tests
npm run test:e2e
```

## 📝 Content Management

### Images
- Place images in `public/images/[category]/`
- Use descriptive filenames
- Optimize before upload (WebP recommended)
- Include alt text for accessibility

### Copy Writing Guidelines
- Use active voice
- Keep paragraphs short (3-4 lines)
- Include clear CTAs
- Highlight benefits over features

## 🌐 SEO

Each page includes:
- Meta title and description
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Structured data (where applicable)

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Screen reader friendly
- Proper heading hierarchy
- Alt text for images
- Focus indicators

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

Copyright © 2026 Reprodrive Center for Innovation Limited. All rights reserved.

## 🆘 Support

For technical support:
- Email: support@rcfi.co.ke
- Phone: +254 754 134 704
- Documentation: https://docs.rcfi.co.ke

## 📞 Contact

**Reprodrive Center for Innovation Limited**
- Address: 5th Floor, Hifadhi House, ICD Road, Nairobi, Kenya
- Email: info@rcfi.co.ke
- Phone: +254 754 134 704
- Website: https://rcfi.co.ke

---

Built with ❤️ by RCFI Technology Team