# GitHub & Deployment Setup Guide

## Prerequisites
- GitHub account
- Git installed locally
- GitHub CLI (optional but recommended)

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `rcfi-technology-website`
3. Description: `Official website for RCFI Technology - Digital Trust, Governance, and Business Management Solutions`
4. Make it Public (for portfolio showcase)
5. Click "Create repository"

## Step 2: Link Local Repository to GitHub

```bash
cd /home/m8575/RCFI/rcfi-technology-website

# Add remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/rcfi-technology-website.git

# Rename branch to main (if not already)
git branch -M main

# Push code to GitHub
git push -u origin main
```

## Step 3: Deploy to Production

### Option A: Vercel (Recommended for Next.js)

1. Go to https://vercel.com/new
2. Connect your GitHub account
3. Select the `rcfi-technology-website` repository
4. Click "Import"
5. Leave all settings as default (Vercel detects Next.js automatically)
6. Click "Deploy"
7. Your site will be live at `https://rcfi-technology-website.vercel.app`

**Advantages:**
- Free hosting for public projects
- Automatic deployments on git push
- Built-in CDN and HTTPS
- Easy performance monitoring
- One-click previews for PRs

### Option B: GitHub Pages

1. Create a `gh-pages` branch:
```bash
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Init gh-pages"
git push -u origin gh-pages
```

2. Update `next.config.js` for static export (if using GH Pages):
```js
export const config = {
  output: 'export',
  basePath: '/rcfi-technology-website'
}
```

3. Build and push:
```bash
npm run build
git add .next/
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

### Option C: Docker + AWS/Heroku/DigitalOcean

1. Create Dockerfile:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

2. Build image:
```bash
docker build -t rcfi-website .
```

3. Push to Docker Hub and deploy to your preferred cloud provider

## Step 4: Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `rcfi.co.ke`)
3. Update DNS records as shown by Vercel
4. Wait for DNS propagation (can take 24-48 hours)

### Environment Variables

Create `.env.local` (not committed to Git):

```env
# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Email (for contact form)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASSWORD=your_app_password

# Other APIs
NEXT_PUBLIC_API_URL=https://api.rcfi.co.ke
```

## Step 5: Monitoring & Maintenance

- **Vercel Dashboard**: Monitor build logs, performance metrics, and analytics
- **GitHub Insights**: Track commits, contributions, and repository statistics
- **Uptime Monitoring**: Use services like UptimeRobot or Pingdom for monitoring
- **Performance**: Use Lighthouse CI for automated performance testing

## Useful Commands

```bash
# Build for production
npm run build

# Start production server
npm start

# Build and start locally
npm run build && npm start

# Run linting
npm run lint

# Check for TypeScript errors
npm run type-check

# Push changes to GitHub
git add -A
git commit -m "Your commit message"
git push origin main

# Create a new branch for features
git checkout -b feature/feature-name
git push -u origin feature/feature-name
```

## Security Checklist

- ✅ All sensitive data in `.env.local` (not committed)
- ✅ No API keys in source code
- ✅ Regular dependency updates: `npm audit fix`
- ✅ HTTPS enabled on all domains
- ✅ Rate limiting on API endpoints
- ✅ CSRF protection enabled
- ✅ Security headers configured

## Support

For issues or questions:
1. Check existing GitHub Issues
2. Create a new Issue with detailed description
3. Contact RCFI Technology team

---

**Website URL**: https://rcfi.co.ke  
**GitHub Repository**: https://github.com/YOUR_USERNAME/rcfi-technology-website  
**Deployed on**: Vercel
