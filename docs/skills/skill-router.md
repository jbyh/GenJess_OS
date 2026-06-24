# Skill Router

This file tells an agent which skill or reference to use for each kind of work.

## Important current state

This repo does not yet contain a complete skill library.

If a required skill is missing, the agent must say it is missing and continue only with a clearly labeled best-effort manual approach.

## Routing table

| Task | Use | Required output |
| --- | --- | --- |
| Understand repo rules | `AGENTS.md`, `README.md` | Confirm operating path |
| Find save locations | `docs/folder-map.md` | Client and site folders |
| Qualify a prospect | `docs/gates/prospect_qualification.md` | `clients/<slug>/qualification.md` |
| Build a static website | `docs/workflows/manual-website-build.md` | `sites/<slug>/index.html` |
| Audit visual/design quality | `docs/gates/design_audit.md` | Design section in `sites/<slug>/audit.md` |
| Audit site completeness | `docs/gates/site_audit.md` | Completion section in `sites/<slug>/audit.md` |
| Package handoff | `docs/agent-operating-manual.md` | `clients/<slug>/handoff.md` |

## Website skill expectations

Until dedicated skills are added under `skills/`, the manual website builder must follow these minimum rules:

- Mobile-first layout.
- Clear hero section.
- Clear offer.
- Clear call to action.
- Trust section.
- Service or value section.
- Contact section.
- No fake testimonials.
- No fake awards.
- Placeholder copy must be labeled.

## Missing skills backlog

These should be added later as real reusable skill files:

```text
skills/design-foundation.md
skills/local-business-landing-page.md
skills/conversion-copy.md
skills/accessibility-audit.md
skills/mobile-responsive-audit.md
skills/local-seo.md
skills/ai-search-optimization.md
skills/outreach-handoff.md
```

Do not pretend these exist before they are added.
