# Folder Map

This file defines where work belongs.

## Root folders

```text
AGENTS.md                     Primary instructions for agents
README.md                     Human overview and quick start
docs/                         Operating docs, gates, workflows, and build tickets
clients/                      Target-specific context and handoff files
sites/                        Built website workspaces
skills/                       Reusable skill docs or imported skill references
apps/                         Product/app/service code
runtime/                      Runtime primitives such as job ledger
integrations/                 External integration helpers
workflows/                    Workflow manifests
```

## Client folders

Every target gets:

```text
clients/<prospect-slug>/
```

Required files:

```text
brief.md
source-notes.md
qualification.md
handoff.md
```

Use this folder for context, evidence, qualification, and delivery notes.

## Site folders

Every target site gets:

```text
sites/<prospect-slug>/
```

Required files:

```text
README.md
index.html
audit.md
```

Optional files:

```text
styles.css
script.js
assets/
components/
notes.md
```

## Build tickets

Build tickets live in:

```text
docs/build-tickets/
```

Build tickets are for repo/product implementation work. They are not the same thing as client website work.

## Gates

Gates live in:

```text
docs/gates/
```

A gate is a quality or decision checkpoint an agent must pass before moving forward.

## Skills

Skill routing lives in:

```text
docs/skills/skill-router.md
```

Imported or authored skills should live in:

```text
skills/
```

Do not reference a skill that does not exist unless the output clearly marks it as missing.
