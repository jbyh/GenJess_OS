# V1 Build Ticket: Slack command → job ledger → status reply

## Objective

Build the first executable GenJess-OS vertical slice. Do **not** build the full agent agency yet. Ship one reliable path:

```text
Slack message → slack-ingress → orchestrator-api → Postgres/Supabase job ledger → Slack status reply
```

This becomes the foundation for Outbound Studio, Sentinel audit, deploy runner, and approval gates.

## Why this first

The current Slack process already tries to run prospecting, building, auditing, outreach packaging, and consolidation inside Slack threads, but it lacks durable state, run IDs, status traceability, and objective handoff control. Before adding builders, verifiers, deployers, or outreach senders, GenJess-OS needs a real control-plane spine.

## Scope

Create or update these packages/files:

```text
apps/slack-ingress/
apps/orchestrator-api/
runtime/job-ledger/
integrations/slack/
workflows/slack-to-outbound-batch.yaml
.env.example
README.md or ARCHITECTURE.md update
```

## Required Slack command

Support this command shape:

```text
/run-outbound-batch vertical=coffee city=Houston count=3 mode=research-only
```

## Parsed payload contract

`slack-ingress` must validate the Slack request and extract this payload:

```json
{
  "source": "slack",
  "channel_id": "...",
  "thread_ts": "...",
  "user_id": "...",
  "command": "run-outbound-batch",
  "args": {
    "vertical": "coffee",
    "city": "Houston",
    "count": 3,
    "mode": "research-only"
  }
}
```

## Required behavior

1. `slack-ingress` validates Slack signature.
2. `slack-ingress` parses the command.
3. `slack-ingress` creates an idempotency key from Slack event/message timestamp plus `channel_id`.
4. `orchestrator-api` creates exactly one durable job.
5. `job-ledger` writes one `jobs` row.
6. `job-ledger` writes `job_events` row: `job.created`.
7. Slack reply is formatted and sent back to the same thread.
8. `job-ledger` writes `job_events` row: `slack.reply.sent`.

## Slack reply contract

Slack gets this reply in the same thread:

```text
GenJess-OS job created
job_id: job_...
workflow: slack-to-outbound-batch
status: queued
next_gate: prospect_qualification
```

## Database schema

Create migrations for:

```sql
create table jobs (
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

create table job_events (
  id text primary key,
  job_id text not null references jobs(id),
  event_type text not null,
  actor text not null,
  payload jsonb not null,
  created_at timestamptz not null default now()
);
```

## Required environment variables

Update `.env.example` with:

```bash
SLACK_BOT_TOKEN=
SLACK_SIGNING_SECRET=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
GENJESS_OS_ENV=local
```

## Acceptance criteria

- Running the Slack command creates exactly one `jobs` row.
- Replaying the same Slack event does not create a duplicate job.
- `job_events` includes `job.created` and `slack.reply.sent`.
- Slack response includes `job_id`, workflow, status, and next gate.
- Unit tests exist for command parsing.
- Unit tests exist for idempotency.
- Integration test exists for `create job → write event → format Slack reply`.
- No secrets are committed.
- `.env.example` includes required env vars.

## Non-goals

- Do not build the website builder yet.
- Do not build the verifier yet.
- Do not wire Vercel yet.
- Do not send outreach.
- Do not add fake or mock prospect data.
- Do not let any agent self-certify completion.

## Architecture rules

- Keep files small.
- No file over 400 lines unless unavoidable.
- Use boring infrastructure.
- This is the spine, not the brain.
- Completion means tests pass and the job ledger proves the handoff happened.

## Done means

A dev agent can run the test suite and demonstrate one local or real Slack event creating a durable job and posting back a status reply.

## Required implementer output

When done, comment or report only:

1. Files changed
2. How to run locally
3. Exact Slack command to test
4. Test results
5. Any missing env/config
