# GenJess OS

GenJess OS is an AI-assisted outbound website operating system.

This repo already contains an app surface, API server, agent skills, and artifact workspaces. Do not treat it as an empty harness repo.

## Start here

Agents should read:

1. `AGENTS.md`
2. `ARCHITECTURE.md`
3. `.agents/skills/find-skills/SKILL.md`
4. The task-relevant skill files under `.agents/skills/`
5. The relevant artifact/app folder before adding new files

## Actual repo structure

```text
.agents/skills/                 Agent skill library
artifacts/outbound-studio/      Main Outbound Studio frontend/admin surface
artifacts/api-server/           API server with leads, runs, pipeline, Slack routes
artifacts/mockup-sandbox/       Mockup/site preview sandbox
artifacts/ios-launch-plan/      iOS launch planning artifact
apps/                           New/experimental app packages
lib/                            Shared API, DB, Zod, and React client libraries
scripts/                        Repo scripts
docs/build-tickets/             Infrastructure implementation tickets
runtime/                        Runtime primitives
integrations/                   Integration helpers
attached_assets/                Uploaded/reference assets
```

## Important distinction

`docs/build-tickets/` is for infrastructure work.

The agency workflow lives through:

```text
.agents/skills/
artifacts/outbound-studio/
artifacts/api-server/
artifacts/mockup-sandbox/
```

Do not create a second docs-only workflow when a real skill or artifact surface already exists.

## Current useful path

For an agent asked to build or evaluate a site:

```text
1. Read AGENTS.md.
2. Use .agents/skills/find-skills/SKILL.md to select the right skill.
3. Use .agents/skills/outbound-studio/SKILL.md if the task is about the agency workflow.
4. Use .agents/skills/frontend-design/SKILL.md, responsive-design, web-design-guidelines, UI/UX, SEO, and audit skills as needed.
5. Inspect artifacts/outbound-studio before changing product/UI behavior.
6. Inspect artifacts/api-server before changing backend/API behavior.
7. Use artifacts/mockup-sandbox for preview/mockup work unless the existing app defines a better destination.
8. Save final work where the existing artifact/app architecture expects it.
```

## Do not do

- Do not add mock prospects.
- Do not invent business data.
- Do not create parallel folders when an existing app/artifact/skill folder should be used.
- Do not treat Slack/job-ledger infrastructure as the core agency workflow.
- Do not build the website builder until the existing frontend, API, skill, and artifact structure is reconciled.
