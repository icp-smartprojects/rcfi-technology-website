#!/bin/bash
# RCFI Technology Website - GitHub Push Commands
# Copy and paste these commands to push to GitHub

# ============================================
# 1. SETUP (Do this once)
# ============================================

# First, create a GitHub repository at https://github.com/new
# Name it: rcfi-technology-website

# Then run:
cd /home/m8575/RCFI/rcfi-technology-website

git remote add origin https://github.com/YOUR_USERNAME/rcfi-technology-website.git

git branch -M main

# ============================================
# 2. VERIFY SETUP
# ============================================

git remote -v
# Should show:
# origin  https://github.com/YOUR_USERNAME/rcfi-technology-website.git (fetch)
# origin  https://github.com/YOUR_USERNAME/rcfi-technology-website.git (push)

# ============================================
# 3. PUSH TO GITHUB (Main Push!)
# ============================================

git push -u origin main

# ============================================
# 4. VERIFY ON GITHUB
# ============================================

# Visit: https://github.com/YOUR_USERNAME/rcfi-technology-website
# You should see all files there

# ============================================
# 5. DEPLOY TO VERCEL (Optional but Recommended)
# ============================================

# Go to: https://vercel.com/new
# Click "Continue with GitHub"
# Find rcfi-technology-website
# Click "Import"
# Click "Deploy"
# Wait 2-5 minutes
# Your site will be live!

echo "✅ Ready to push! Follow the commands above."
