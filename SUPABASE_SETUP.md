-- Promote a user to admin (run in SQL editor after user sign up; substitute the user's UUID):
update profiles set is_admin = true where id = 'user-uuid-here';

-- Extra: If you want email-based invites, you can create a server-only function to call the 'invite' magic link flow. For initial setup, set `is_admin = true` manually in the DB.

# Supabase Setup (Free tier) — Quick & Secure

This guide creates a Supabase project and database schema for the app. We store events as rows in an `events` table. Each row contains JSON arrays for `expenses`, `income`, `activities` to keep the schema simple.

Major steps:
1. Create a free Supabase account and project: https://supabase.com
2. In the project, go to SQL Editor → New query and run the SQL below.

SQL schema (paste into SQL editor):

-- Create profiles to store admin flag
create table profiles (
  id uuid primary key default auth.uid(),
  email text,
  is_admin boolean default false,
  created_at timestamptz default now()
);

-- Enable RLS for profiles and allow users to create/update their own profile only
alter table profiles enable row level security;
create policy "profile_insert_own" on profiles for insert using (auth.uid() = id) with check (auth.uid() = id);
create policy "profile_update_own" on profiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "profile_select_public" on profiles for select using (true);

-- Events table with JSONB for expenses/income/activities
create table events (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  year int,
  date date,
  description text,
  total_budget numeric,
  status text,
  venue text,
  expected_guests int,
  google_photos_link text,
  expenses jsonb default '[]',
  income jsonb default '[]',
  activities jsonb default '[]',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Keep read access public; writes only for authenticated admins
alter table events enable row level security;

-- policy: allow anyone to select (read)
create policy "public_read" on events for select using (true);

-- policy: allow insert/update/delete when user is admin
create policy "admin_write" on events for all using (
  exists (select 1 from profiles p where p.id = auth.uid() and p.is_admin)
) with check (
  exists (select 1 from profiles p where p.id = auth.uid() and p.is_admin)
);

-- Notes:
-- 1. After running this SQL, go to "Authentication" → "Users" and invite or sign up the admin users (email/password) and then set `is_admin=true` in `profiles` (you can use Postgres editor or SQL).
-- 2. This policy ensures only admin accounts (having `is_admin`) can write; guests can only read.

Optional: If you want to allow admin signup or a one-time secret key to create the first admin, we can do that. For now we recommend manually creating an admin and setting is_admin.

Configuration & client keys
- Once your project is ready, take the project URL and the anon/public API key from Project Settings → API.
- Add them to `supabase-config.js` (create it and DO NOT commit secrets). See example `supabase-config.example.js`.

Security notes
- The anon key is intentionally public; RLS policies protect write operations.
- Use server-side service role API key only for migrations and admin-only tasks, never client-side.

Next steps (I can do for you):
- Add `supabase-config.js` to `app.js` usage and wire the app to sign in with email/password.
- Implement realtime subscription so guests see updates as admins add new events.
- Keep localStorage fallback for local testing or when Supabase is not configured.

Tell me when your Supabase project is ready (share the Project URL + anon key) or I can guide you through creating it step-by-step.