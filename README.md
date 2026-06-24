# GenJess OS

GenJess OS is the operating repo for AI-assisted outbound website work.

The current goal is not to automate everything first. The current goal is to make the repo usable by an agent with GitHub access that receives a simple instruction such as:

```text
Check this repo and build a website for the target.
```

That agent should be able to answer:

1. What am I allowed to do?
2. Where do I save work?
3. Which skills or references do I use?
4. How do I qualify the prospect?
5. How do I build the site?
6. How do I audit the site?
7. What output proves the work is done?

## What exists now

- `AGENTS.md` — primary instructions for coding/build agents.
- `docs/agent-operating-manual.md` — step-by-step manual agent flow.
- `docs/folder-map.md` — where files belong.
- `docs/skills/skill-router.md` — which skill/reference to use for each task.
- `docs/gates/prospect_qualification.md` — prospect qualification gate.
- `docs/gates/design_audit.md` — design quality gate.
- `docs/gates/site_audit.md` — site completion audit gate.
- `docs/workflows/manual-website-build.md` — manual website build workflow.
- `docs/build-tickets/` — implementation tickets, separated from operating instructions.
- `sites/` — generated or hand-built website workspaces.
- `clients/` — client/prospect-specific context, notes, and handoff artifacts.

## Current operating principle

Manual first. Durable structure first. Automation later.

Before building Slack integrations, job ledgers, prospect scrapers, or website builders, this repo must be understandable to a capable coding agent reading from the repository.

## Do not do yet

- Do not add mock prospects.
- Do not create fake lead data.
- Do not claim a prospect is qualified without evidence.
- Do not build an automated website builder until the manual workflow works.
- Do not treat Slack/job-ledger work as the actual agency workflow.

## Minimum useful manual run

```text
1. Read AGENTS.md.
2. Read docs/agent-operating-manual.md.
3. Read docs/workflows/manual-website-build.md.
4. Create a prospect folder under clients/<prospect-slug>/.
5. Create a site workspace under sites/<prospect-slug>/.
6. Save source notes, design decisions, page files, and audit results in those folders.
7. Report exactly what was built, where it was saved, what was audited, and what remains missing.
```
