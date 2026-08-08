# RCFI Support + Website — Local `.env` files

Use **`localhost`** (not `127.0.0.1`).

Copy each block into the matching file path.

---

## Ports

| Service | URL |
|---------|-----|
| Website-v2 | http://localhost:3015 |
| Support Backend | http://localhost:7000 |
| Support Frontend | http://localhost:9090 |

---

## 1) Support Backend

**Path:** `rcfi-support/Back-end/.env`

```env
# RCFI Support Backend — local .env
# ─────────────────────────────────────────────────────────────────────────

# Required
SUPPORT_ENCRYPTION_KEY=0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
MONGO_URI=mongodb://localhost:27017/rcfi_support
JWT_SECRET=rcfi-local-jwt-secret-change-me-32chars!!
PORT=7000

# Agents
SUPPORT_AGENT_EMAILS=admin@rcfi.co.ke

# Email notifications (socket chat is primary)
SUPPORT_EMAIL_ENABLED=false

# Branding
SUPPORT_APP_NAME=RCFI Support
SUPPORT_BRAND_NAME=RCFI Technology

# Local service URLs (localhost)
FRONTEND_URL=http://localhost:9090
WEBSITE_URL=http://localhost:3015
# CORS_ORIGINS=https://rcfi.co.ke,https://www.rcfi.co.ke

# Dev
NODE_ENV=development
RATE_LIMIT_DISABLED=true
```

---

## 2) Support Frontend

**Path:** `rcfi-support/support-frontend/.env.local`

```env
# RCFI Support Frontend — local .env.local
# ─────────────────────────────────────────────────────────────────────────

# Leave empty so Vite proxies /api + /socket.io to the backend
VITE_API_BASE_URL=

# Auth / API base
VITE_AUTH_API_URL=http://localhost:7000

# Branding
VITE_APP_NAME=RCFI Support
```

---

## 3) Website-v2

**Path:** `website-v2/.env.local`

```env
# RCFI website-v2 → rcfi-support connection
# ─────────────────────────────────────────────────────────────────────────

# Support backend (no trailing slash)
SUPPORT_API_URL=http://localhost:7000

# Support portal (visitor chat / admin login)
NEXT_PUBLIC_SUPPORT_PORTAL_URL=http://localhost:9090
```

---

## Quick start (after copying envs)

```bash
# 1) Backend
cd rcfi-support/Back-end
npm install
npm run dev
# optional: node scripts/seed-rcfi-categories.js

# 2) Frontend
cd ../support-frontend
npm install
npm run dev

# 3) Website
cd ../../website-v2
npm install
npm run dev
```

### First admin (backend)

```bash
curl -X POST http://localhost:7000/api/auth/setup \
  -H "Content-Type: application/json" \
  -d '{"firstName":"RCFI","lastName":"Admin","email":"admin@rcfi.co.ke","password":"SecurePass@123"}'
```

### Admin login

- URL: http://localhost:9090/login  
- Email: `admin@rcfi.co.ke`  
- Password: `SecurePass@123`

---

## Notes

- `SUPPORT_ENCRYPTION_KEY` must be **64 hex characters** (`openssl rand -hex 32`).
- MongoDB must be running locally on `localhost:27017`.
- These values are for **local/dev only** — change secrets before production.
