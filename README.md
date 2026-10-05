# SupplySync

**Collaborative Stock Tracking & Verification System**

A multi-role purchase entry management platform built with Next.js 16, Supabase, and TypeScript.

---

## Roles

| Role | Access |
|------|--------|
| `admin` | Full access — manage suppliers, products, review/approve entries |
| `staff` | Same portal as admin, can review entries |
| `supplier` | Supplier portal — submit and track their own purchase entries |

---

## Tech Stack

- **Frontend**: Next.js 16 (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Next.js Server Actions (no separate API layer)
- **Database**: Supabase (PostgreSQL) with Row Level Security
- **Auth**: Supabase Auth (email/password)

---

## Getting Started

### Prerequisites

- Node.js 20+
- [Supabase CLI](https://supabase.com/docs/guides/cli)
- Docker (for local Supabase)

### 1. Clone & Install

```bash
git clone <repo-url>
cd supplysync
npm install
```

### 2. Set Up Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

Required variables:

```
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Start Local Supabase

```bash
npx supabase start
```

This runs migrations and seeds the database with demo data.

**Default seed credentials:**

| User | Email | Password |
|------|-------|----------|
| Admin | `admin@example.com` | `password123` |
| Staff | `staff@example.com` | `password123` |
| Supplier | `supplier1@example.com` | `password123` |

> ⚠️ **Change these credentials before any production deployment.**

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
  app/
    (admin)/      # Admin portal (admins & staff)
    (portal)/     # Supplier portal
    (auth)/       # Login page
    auth/         # Signout route handler
  components/     # Shared UI components
  lib/
    actions/      # Server Actions (auth, business logic)
    validation/   # Zod schemas
    supabase/     # Supabase client helpers + middleware
supabase/
  migrations/     # Database schema & RLS policies
  tests/          # RLS isolation tests
  seed.sql        # Demo seed data
```

---

## Security Notes

- All data access is protected by **Row Level Security (RLS)** at the database level.
- Server Actions re-verify the user's role on every mutation.
- Suppliers cannot access other suppliers' data.
- Suppliers cannot approve or reject entries.

---

## Production Deployment

1. Create a Supabase project at [supabase.com](https://supabase.com).
2. Push migrations: `npx supabase db push`
3. Set production environment variables in your hosting provider.
4. Deploy to Vercel or any Node.js host.

> **Never commit `.env.local` or any file containing real credentials.**
