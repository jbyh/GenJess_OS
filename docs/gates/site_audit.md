# Gate: Site Audit

Purpose: verify that the site is saved, reviewable, and not just a loose HTML artifact.

## Required files

```text
sites/<prospect-slug>/README.md
sites/<prospect-slug>/index.html
sites/<prospect-slug>/audit.md
clients/<prospect-slug>/brief.md
clients/<prospect-slug>/qualification.md
clients/<prospect-slug>/handoff.md
```

## Required checks

| Check | Question |
| --- | --- |
| Saved correctly | Is the site in `sites/<prospect-slug>/`? |
| Client context saved | Is target context in `clients/<prospect-slug>/`? |
| Runs locally | Can the HTML be opened directly or served locally? |
| No fake data | Are invented business facts avoided or labeled? |
| CTA present | Is there a clear next action? |
| Contact section | Is there a place for phone/email/form/location? |
| Mobile basics | Does it use responsive layout/meta viewport? |
| Accessibility basics | Are headings, labels, alt text, and contrast considered? |
| Handoff complete | Does `handoff.md` explain what changed and what is missing? |

## Required output

Save to:

```text
sites/<prospect-slug>/audit.md
```

Use this format:

```markdown
# Site Audit

## Summary

Decision: PASS / NEEDS REVISION / FAIL

## File checklist

| File | Exists | Notes |
| --- | --- | --- |

## Site checks

| Check | Result | Notes |
| --- | --- | --- |

## Missing or placeholder items

## Final decision
```
