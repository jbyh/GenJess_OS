# Agent Instructions

You are operating inside GenJess OS.

Your job is to turn a vague business instruction into a clean, saved, auditable artifact inside this repo.

## Default instruction shape

A user may say something as simple as:

```text
Check this repo and build a website for this target.
```

Do not assume hidden context. Read the repo instructions first.

## Required reading before website work

Read these files before creating or editing site files:

1. `README.md`
2. `docs/agent-operating-manual.md`
3. `docs/folder-map.md`
4. `docs/skills/skill-router.md`
5. `docs/workflows/manual-website-build.md`
6. `docs/gates/prospect_qualification.md`
7. `docs/gates/design_audit.md`
8. `docs/gates/site_audit.md`

## Core rule

Manual quality beats premature automation.

Do not build orchestration, job ledgers, agents, Slack apps, prospect scrapers, or website-builder automation unless a specific build ticket asks for that exact thing.

## Where to save work

For every target, create:

```text
clients/<prospect-slug>/
sites/<prospect-slug>/
```

Use lowercase kebab-case slugs.

Example:

```text
clients/austin-roofing-co/
sites/austin-roofing-co/
```

## Required target folder files

Create these files for each real target:

```text
clients/<prospect-slug>/brief.md
clients/<prospect-slug>/source-notes.md
clients/<prospect-slug>/qualification.md
clients/<prospect-slug>/handoff.md
sites/<prospect-slug>/README.md
sites/<prospect-slug>/index.html
sites/<prospect-slug>/audit.md
```

## Evidence rule

Do not invent facts about a business.

If a fact is not provided by the user or verified from a source, label it as an assumption or placeholder.

No mock prospects. Placeholder copy is allowed only when clearly labeled as placeholder copy inside the site workspace.

## Website build rule

A website build must include:

- A single clear business goal.
- A clear above-the-fold offer.
- Real or explicitly placeholder contact/action areas.
- Mobile-first layout.
- Basic accessibility checks.
- Saved audit notes.

## Completion report

When done, report only:

1. Target
2. Files changed
3. How to preview locally
4. What was verified
5. What is placeholder or missing
6. Audit result

## Stop conditions

Stop and report instead of continuing if:

- There is no target.
- There is no allowed folder destination.
- Required source context is missing.
- A requested action would create fake business/prospect data.
- The repo instructions conflict with a user instruction.
