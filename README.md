## WashLink — Dev Setup

### Prereqs
- Node 18+, pnpm 9+, Docker

### Steps
1. `cp .env.example .env` and set tokens/keys (or keep defaults for local dev).
2. `pnpm install`
3. Start infra: `pnpm compose:up`
4. Push DB + seed: `pnpm db:push && pnpm db:seed`
5. Run API: `pnpm -C packages/api dev`
6. Run Web: `pnpm -C apps/web dev`
7. Run Mobile: `pnpm -C apps/mobile start` (set `EXPO_PUBLIC_API=http://localhost:4000` in `apps/mobile/app.json` or `.env`)

### Test flow
- Open `http://localhost:3000` (web)
- Call `GET http://localhost:4000/marts/nearby?lat=6.4541&lng=3.3942&radiusKm=5`
- Verify seeded marts show in the mobile app.
