# Build Tickets

Build tickets are for implementing GenJess OS infrastructure.

They are not the same thing as client website workflows.

## Difference

| Type | Purpose | Location |
| --- | --- | --- |
| Agency workflow | Tells an agent how to build/spec/audit a site | `docs/workflows/` |
| Gate | Tells an agent how to decide or audit quality | `docs/gates/` |
| Skill | Reusable method or capability reference | `docs/skills/` or `skills/` |
| Build ticket | Tells a dev agent what repo infrastructure to implement | `docs/build-tickets/` |

## Current ticket status

`001-slack-command-job-ledger-status-reply.md` is a control-plane infrastructure ticket.

It is not the website builder.
It is not the agency workflow.
It is not prospect qualification.
It is not the design audit.

Before adding more infrastructure tickets, the manual website workflow should be usable from repo docs alone.
