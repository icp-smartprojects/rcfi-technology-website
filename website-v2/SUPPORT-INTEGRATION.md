# Website-v2 ↔ RCFI Support integration

**Connected system:** `../rcfi-support` (copied support stack for RCFI — not the original other-system folder)

## Layout

```
rcfi-technology-website/
├── website-v2/          ← THIS site (linked to support)
│   ├── src/pages/api/contact.js
│   ├── src/pages/api/updates.js
│   └── src/pages/updates/
└── rcfi-support/        ← COPY of support (two services)
    ├── Back-end/        ← :7000
    └── support-frontend/← :9090
```

## Links

| From | To | How |
|------|----|-----|
| Contact form | Support tickets | `POST /api/contact` → `SUPPORT_API_URL/api/support/contact` |
| Interest select | Ticket category | same slug (certysign, elano, demo, support…) |
| Admin Website Posts | `/updates` page | `GET /api/updates` → published posts |
| Staff login | Support queue | `NEXT_PUBLIC_SUPPORT_PORTAL_URL` (:9090) |

## Env (`website-v2/.env.local`)

```
SUPPORT_API_URL=http://localhost:7000
NEXT_PUBLIC_SUPPORT_PORTAL_URL=http://localhost:9090
```
