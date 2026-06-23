# RCFI Technology Website — Pull Guide

How to pull and run the latest changes from the `update-V1` branch.

---

## Prerequisites

Make sure you have these installed:

- [Git](https://git-scm.com/downloads)
- [Node.js 18+](https://nodejs.org/) (check with `node -v`)
- npm (comes with Node.js, check with `npm -v`)

You must also have your GitHub account added to the **Reprodrive-centre-for-innovation** organization. Ask the org admin to add you if you don't have access yet.

---

## Option A — HTTPS (Easiest)

Use this if you log in to GitHub normally via browser.

### 1. Clone the repo

```bash
git clone https://github.com/Reprodrive-centre-for-innovation/-rcfi-technology-website.git
cd -rcfi-technology-website
```

GitHub will ask for your credentials. Use your GitHub username and a **Personal Access Token** (not your password).

> **Generate a token:** GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token → tick `repo` scope → copy it.

### 2. Switch to the update branch

```bash
git checkout update-V1
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Option B — SSH (Recommended for developers)

Use this if you already have an SSH key on your machine.

### 1. Add your SSH public key to GitHub

```bash
# Generate a key if you don't have one
ssh-keygen -t ed25519 -C "your.email@example.com"

# Copy your public key
cat ~/.ssh/id_ed25519.pub
```

Go to **GitHub → Settings → SSH and GPG keys → New SSH key** and paste it in.

Test it works:
```bash
ssh -T git@github.com
# Should say: Hi <your-username>! You've successfully authenticated...
```

### 2. Clone the repo

```bash
git clone git@github.com:Reprodrive-centre-for-innovation/-rcfi-technology-website.git
cd -rcfi-technology-website
```

### 3. Switch to the update branch

```bash
git checkout update-V1
```

### 4. Install dependencies

```bash
npm install
```

### 5. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Already cloned? Pull latest changes

If you already have the repo on your machine, just pull the latest:

```bash
# Make sure you're on the right branch
git checkout update-V1

# Pull latest changes
git pull origin update-V1

# Install any new packages
npm install

# Start dev server
npm run dev
```

---

## Branch overview

| Branch | Purpose |
|---|---|
| `main` | Production-ready stable code |
| `update-V1` | Latest updates — current active development branch |

Always work on `update-V1`. Do not push directly to `main`.

---

## Troubleshooting

**Port already in use**
```bash
# Kill whatever is on port 3000
lsof -ti :3000 | xargs kill -9
npm run dev
```

**`npm install` fails**
```bash
# Clear npm cache and retry
npm cache clean --force
rm -rf node_modules
npm install
```

**Page shows 404 or white screen on reload**
- **After `npm run build:static`:** the dev cache is cleared automatically. Restart dev with `npm run dev` or `npm run dev:clean`.
- **To preview the real deploy build:** use `npm run preview:static` (serves the `out/` folder on port 3001).
- **On cPanel/Apache:** use the included `public/.htaccess` (copied to `out/` on build). Do **not** rewrite `/_next/` URLs to `index.html` — that causes white screens and MIME errors.
- URLs use trailing slashes (`/products/certysign/`). The `.htaccess` redirects `/products/certysign` → `/products/certysign/`.

**Permission denied on clone**
Your GitHub account may not be in the organization yet. Contact the repo admin.
