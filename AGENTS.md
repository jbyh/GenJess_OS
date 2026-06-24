# Agent Instructions

You are operating inside GenJess OS.

This repo is not empty. It already has an agent skill library, an Outbound Studio frontend, an API server, and artifact workspaces. Do not create a parallel project structure unless a build ticket explicitly asks for one.

## First rule

Inspect before adding.

Before creating new files, check whether the existing structure already has a place for the work.

## Required orientation

Read these first:

1. `README.md`
2. `ARCHITECTURE.md`
3. `.agents/skills/find-skills/SKILL.md`

Then select task-specific skills from `.agents/skills/`.

## Existing skill library

Use `.agents/skills/` as the canonical skill location.

Relevant existing skills include:

```text
.agents/skills/outbound-studio/
.agents/skills/frontend-design/
.agents/skills/responsive-design/
.agents/skills/web-design-guidelines/
.agents/skills/ui-ux-pro-max/
.agents/skills/audit-website/
.agents/skills/seo-audit/
.agents/skills/wcag-audit-patterns/
.agents/skills/firecrawl/
.agents/skills/agent-tools/
.agents/skills/architecture-patterns/
```

Do not use `docs/skills/` as the canonical skill system.

## Existing app/artifact structure

Use the existing app surfaces before creating new ones:

```text
artifacts/outbound-studio/      Main frontend/admin surface
artifacts/api-server/           Backend/API routes for leads, runs, pipeline, Slack
artifacts/mockup-sandbox/       Mockup and preview sandbox
lib/                            Shared API, DB, Zod, and client libraries
```

## Website/outbound work

For outbound website work:

1. Use `.agents/skills/outbound-studio/` for agency workflow context.
2. Use design and audit skills under `.agents/skills/`.
3. Inspect `artifacts/outbound-studio/` for UI/admin behavior.
4. Inspect `artifacts/api-server/` for backend/API behavior.
5. Inspect `artifacts/mockup-sandbox/` for preview/mockup behavior.
6. Only create new destination folders if the existing architecture does not already define where the work belongs.

## Build tickets

`docs/build-tickets/` contains infrastructure implementation tickets.

A build ticket is not the agency workflow. It is not automatically the next product step.

## Evidence rule

Do not invent facts about a business.

If a fact is not provided by the user or verified from a source, label it as an assumption or placeholder.

No mock prospects.

## Completion report

When done, report only:

1. Files changed
2. Existing folders/skills used
3. What was verified
4. What remains missing
5. How to run or preview, if applicable

## Stop conditions

Stop and report instead of continuing if:

- There is no target.
- The existing destination for the work is unclear.
- Required source context is missing.
- A requested action would create fake business/prospect data.
- The repo instructions conflict with the user instruction.
