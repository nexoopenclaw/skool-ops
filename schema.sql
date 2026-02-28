-- Skool Ops MVP schema + seed data
create table if not exists members (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text unique not null,
  status text not null check (status in ('active','at_risk','paused')),
  plan text not null check (plan in ('monthly','annual')),
  joined_at date not null default now(),
  last_seen_days int not null default 0,
  progress_pct int not null default 0,
  mrr_contribution numeric(10,2) not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists content_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  stage text not null check (stage in ('ideation','production','published')),
  completion_pct int not null default 0,
  due_date date,
  owner text,
  created_at timestamptz not null default now()
);

create table if not exists action_tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  owner text not null,
  due_at timestamptz,
  priority text not null check (priority in ('high','medium','low')),
  status text not null check (status in ('todo','in_progress','done')),
  member_id uuid references members(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists revenue_events (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references members(id) on delete cascade,
  event_type text not null check (event_type in ('new_sale','renewal','upgrade','downgrade','churn')),
  amount numeric(10,2) not null,
  happened_at timestamptz not null default now()
);

insert into members (full_name, email, status, plan, joined_at, last_seen_days, progress_pct, mrr_contribution)
values
('Ava Ruiz', 'ava@creator.com', 'active', 'annual', '2025-10-14', 1, 82, 119),
('Leo Park', 'leo@agency.io', 'at_risk', 'monthly', '2025-11-02', 12, 34, 49),
('Mina Costa', 'mina@studio.co', 'active', 'monthly', '2026-01-09', 3, 66, 49)
on conflict (email) do nothing;

insert into content_items (title, stage, completion_pct, due_date, owner)
values
('Skool Onboarding Sprint', 'production', 72, '2026-03-04', 'Ops Team'),
('Annual Upgrade Playbook', 'production', 58, '2026-03-10', 'Growth'),
('Retention Automation Templates', 'ideation', 23, '2026-03-17', 'CS');
