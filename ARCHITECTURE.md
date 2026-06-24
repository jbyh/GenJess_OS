# GenJess OS Architecture

This repo is an AI-assisted outbound website operating system.

It is not only a Slack command or job-ledger experiment. Slack/job-ledger work is infrastructure. The actual product surface already exists in the artifacts, API server, and agent skill library.

## Top-level architecture

```text
.agents/skills/                 Canonical agent skill library
artifacts/outbound-studio/      Main frontend/admin product surface
artifacts/api-server/           Backend/API service
artifacts/mockup-sandbox/       Mockup and website preview sandbox
artifacts/ios-launch-plan/      iOS launch planning artifact
apps/                           Experimental/new app packages
lib/                            Shared API, DB, Zod, and React client libraries
scripts/                        Repo scripts
docs/build-tickets/             Infrastructure implementation tickets
runtime/                        Runtime primitives
integrations/                   External integration helpers
attached_assets/                Uploaded/reference assets
```

## Agent skill layer

Canonical location:

```text
.agents/skills/
```

Important existing skills include:

```text
agent-tools
architecture-patterns
audit-website
find-skills
firecrawl
frontend-design
outbound-studio
responsive-design
seo-audit
tailwind-design-system
ui-ux-pro-max
wcag-audit-patterns
web-design-guidelines
```

Do not create a competing skill system under `docs/skills/`.

## Product/frontend layer

Main surface:

```text
artifacts/outbound-studio/
```

Known page areas from the repo tree:

```text
src/pages/dashboard.tsx
src/pages/leads/index.tsx
src/pages/leads/detail.tsx
src/pages/runs/index.tsx
src/pages/runs/detail.tsx
src/pages/agents/index.tsx
src/pages/skills/index.tsx
src/pages/skills/detail.tsx
src/pages/settings/index.tsx
```

This is where management/admin experience should be understood before adding new UI.

## Backend/API layer

Main backend artifact:

```text
artifacts/api-server/
```

Known route areas from the repo tree:

```text
src/routes/health.ts
src/routes/leads.ts
src/routes/pipeline.ts
src/routes/runs.ts
src/routes/slack.ts
src/slack.ts
```

This must be inspected before adding new Slack/API/server behavior.

## Mockup/site preview layer

Preview/sandbox surface:

```text
artifacts/mockup-sandbox/
```

Use this before inventing a new `sites/` model unless the task specifically requires static exported site files.

## Build tickets

Build tickets live in:

```text
docs/build-tickets/
```

They are implementation tickets for repo infrastructure. They are not the same thing as the outbound agency workflow.

## Recently added infrastructure slice

These paths are infrastructure-only and should not be mistaken for the product workflow:

```text
apps/slack-ingress/
apps/orchestrator/
runtime/job-ledger/
integrations/slack/
workflows/slack-to-outbound-batch.yaml
```

## Current architecture correction

The next useful work is reconciliation, not expansion:

1. Remove duplicate docs-only routing where it conflicts with `.agents/skills/`.
2. Route agents through the existing skill library.
3. Route frontend/product work through `artifacts/outbound-studio/`.
4. Route backend work through `artifacts/api-server/`.
5. Route preview/mockup work through `artifacts/mockup-sandbox/`.
6. Add only missing skills/personas/gates inside the existing `.agents/skills/` structure.
