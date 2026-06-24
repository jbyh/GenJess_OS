create table if not exists jobs (
  id text primary key,
  workflow text not null,
  status text not null,
  source text not null,
  requester_id text,
  channel_id text,
  thread_ts text,
  input jsonb not null,
  idempotency_key text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists job_events (
  id text primary key,
  job_id text not null references jobs(id),
  event_type text not null,
  actor text not null,
  payload jsonb not null,
  created_at timestamptz not null default now()
);
