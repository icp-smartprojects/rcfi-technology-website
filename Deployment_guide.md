# RCFI Technology Website - Deployment Guide

Complete step-by-step guide to deploy your RCFI Technology website.

## 📋 Pre-Deployment Checklist

### 1. Content Preparation
- [ ] All product images uploaded to `public/images/products/`
- [ ] Team member photos in `public/images/team/`
- [ ] Partner logos in `public/images/partners/`
- [ ] Hero images in `public/images/hero/`
- [ ] Company logo and favicon
- [ ] All data files completed in `src/data/`

### 2. Configuration
- [ ] Update company information in `src/data/companyData.js`
- [ ] Set up Google Analytics tracking ID
- [ ] Configure contact form API endpoint
- [ ] Set production domain in environment variables
- [ ] Update social media links

### 3. Testing
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Check all internal links
- [ ] Verify contact forms work
- [ ] Test image loading and fallbacks
- [ ] Check page load speed

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Built for Next.js
- Automatic deployments from Git
- Free SSL certificates
- Global CDN
- Zero configuration

**Steps:**

1. **Create Vercel Account**
   ```bash
   # Visit vercel.com and sign up with GitHub
   ```

2. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/rcfi-website.git
   git push -u origin main
   ```

3. **Import Project in Vercel**
   - Go to vercel.com/new
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

4. **Configure Environment Variables**
   In Vercel dashboard > Project > Settings > Environment Variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_API_URL=https://api.rcfi.co.ke
   NEXT_PUBLIC_SITE_URL=https://rcfi.co.ke
   ```

5. **Custom Domain**
   - Go to Settings > Domains
   - Add `rcfi.co.ke`
   - Add DNS records as instructed by Vercel
   - Wait for DNS propagation (up to 48 hours)

**Automatic Deployments:**
Every push to main branch automatically deploys!

---

### Option 2: Netlify

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

---

### Option 3: cPanel / Traditional Hosting

1. **Export Static Site**
   ```bash
   # Add to next.config.js:
   output: 'export'
   
   # Build
   npm run build
   ```

2. **Upload Files**
   - FTP/SFTP into your server
   - Upload contents of `out/` folder to `public_html/`

3. **Configure .htaccess**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

### Option 4: AWS (Advanced)

**Services Needed:**
- S3 (Static hosting)
- CloudFront (CDN)
- Route 53 (DNS)
- Certificate Manager (SSL)

**Steps:**

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://rcfi-website
   aws s3 sync .next/ s3://rcfi-website --acl public-read
   ```

3. **Configure S3 for Static Hosting**
   - Enable static website hosting
   - Set index document: `index.html`
   - Set error document: `404.html`

4. **Create CloudFront Distribution**
   - Origin: S3 bucket
   - Enable HTTPS
   - Add custom domain

5. **Configure Route 53**
   - Create hosted zone for `rcfi.co.ke`
   - Add A record pointing to CloudFront

---

## 🔒 SSL Certificate Setup

### For Custom Domain

**Vercel/Netlify:**
- SSL automatically provided ✅

**cPanel:**
1. Go to cPanel > SSL/TLS
2. Use Let's Encrypt (free)
3. Enable "Force HTTPS"

**AWS:**
1. Request certificate in Certificate Manager
2. Verify domain ownership
3. Attach to CloudFront distribution

---

## 📧 Contact Form Setup

### Option A: Formspree (Easiest)

1. Sign up at formspree.io
2. Create form for rcfi.co.ke
3. Get endpoint URL
4. Update in contact form component:
   ```javascript
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option B: Custom API

1. Create API endpoint (Node.js/PHP)
2. Set up email service (SendGrid, AWS SES)
3. Update `NEXT_PUBLIC_API_URL` in environment

Example API endpoint:
```javascript
// pages/api/contact.js
export default async function handler(req, res) {
  const { name, email, message } = req.body
  
  // Send email logic here
  
  res.status(200).json({ success: true })
}
```

---

## 🎯 DNS Configuration

### Nameservers
Point your domain to hosting provider:

**Vercel:**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Netlify:**
```
dns1.p01.nsone.net
dns2.p01.nsone.net
```

### A Records (if using custom DNS)

```
Type: A
Name: @
Value: [Server IP]
TTL: 3600

Type: A
Name: www
Value: [Server IP]
TTL: 3600
```

### CNAME Records

```
Type: CNAME
Name: www
Value: rcfi.co.ke
TTL: 3600
```

---

## 📊 Analytics Setup

### Google Analytics

1. **Create GA4 Property**
   - Go to analytics.google.com
   - Create new property
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Add to Environment Variables**
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Verify Tracking**
   - Visit site
   - Check real-time reports in GA

---

## 🔍 SEO Setup

### Google Search Console

1. **Verify Ownership**
   - Go to search.google.com/search-console
   - Add property: rcfi.co.ke
   - Verify via HTML file or DNS

2. **Submit Sitemap**
   ```
   https://rcfi.co.ke/sitemap.xml
   ```

3. **Monitor Performance**
   - Check indexing status
   - Review search queries
   - Fix any errors

### robots.txt

Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://rcfi.co.ke/sitemap.xml
```

---

## ⚡ Performance Optimization

### 1. Image Optimization

```bash
# Install image optimization tool
npm install -g sharp-cli

# Optimize images
npx sharp -i public/images/ -o public/images/ -f webp
```

### 2. Enable Caching

Add to `next.config.js`:
```javascript
async headers() {
  return [
    {
      source: '/:all*(svg|jpg|png)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        }
      ],
    },
  ]
}
```

### 3. Analyze Bundle Size

```bash
npm run build
npm run analyze
```

---

## 🔐 Security Hardening

### 1. Security Headers

Already configured in `next.config.js`:
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

### 2. Rate Limiting (for Contact Forms)

Use services like:
- Cloudflare (free tier)
- AWS WAF
- Vercel Edge Functions

### 3. Environment Variables

Never commit `.env.local` to Git!

```bash
# Add to .gitignore
.env.local
.env*.local
```

---

## 🐛 Troubleshooting

### Build Errors

**Issue:** `Module not found`
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Issue:** `Out of memory`
```bash
# Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Deployment Errors

**Issue:** Images not loading
- Check image paths (case-sensitive)
- Verify files exist in `public/`
- Check file extensions

**Issue:** 404 on page refresh
- Configure rewrites in hosting platform
- Add `.htaccess` for Apache
- Enable "Pretty URLs" in hosting

### DNS Issues

**Issue:** Domain not resolving
- Wait 24-48 hours for propagation
- Check nameservers: `dig rcfi.co.ke`
- Flush DNS cache: `ipconfig /flushdns`

---

## 📱 Testing Checklist

### Before Going Live

- [ ] Test all pages load correctly
- [ ] Verify all images display
- [ ] Test contact forms
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify SSL certificate
- [ ] Check page load speed (< 3s)
- [ ] Test all internal links
- [ ] Verify analytics tracking
- [ ] Check meta tags and SEO
- [ ] Test back-to-top button
- [ ] Verify footer information
- [ ] Test navigation menu
- [ ] Check testimonials carousel
- [ ] Verify partner logos
- [ ] Test CTA buttons

---

## 🚀 Launch Day

### 1. Final Pre-Launch

```bash
# Pull latest changes
git pull origin main

# Run production build
npm run build

# Test locally
npm run start
```

### 2. Deploy

```bash
# Push to production
git push origin main

# Or manual deploy
vercel --prod
```

### 3. Post-Launch Monitoring

- Monitor analytics
- Check error logs
- Review performance metrics
- Monitor uptime (use UptimeRobot)
- Check contact form submissions

---

## 📞 Support

Need help deploying?

**Technical Support:**
- Email: support@rcfi.co.ke
- Phone: +254 754 134 704

**Hosting Recommendations:**
- Vercel: vercel.com (Best for Next.js)
- Netlify: netlify.com
- AWS: aws.amazon.com

---

## ✅ Post-Deployment

### Monitoring Setup

1. **Uptime Monitoring**
   - UptimeRobot (free)
   - Pingdom
   - StatusCake

2. **Error Tracking**
   - Sentry
   - LogRocket
   - Rollbar

3. **Performance**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

### Maintenance Schedule

- **Daily:** Check uptime, monitor analytics
- **Weekly:** Review error logs, check contact forms
- **Monthly:** Update content, security patches
- **Quarterly:** Performance audit, backup review

---

**Good luck with your deployment! 🎉**

The RCFI Technology website is production-ready and optimized for success.