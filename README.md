# Skool Ops

Revenue-first operations dashboard for creators running Skool communities.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Supabase SSR/browser utilities (`@supabase/ssr`, `@supabase/supabase-js`)

## Modules
- Home Dashboard (KPIs)
- Members
- Content Pipeline
- Revenue
- Action Queue

## Local run
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build
```bash
npm run build
```

## Database
Apply `schema.sql` in Supabase SQL editor.
