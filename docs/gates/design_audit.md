# Gate: Design Audit

Purpose: check whether a built site looks intentional, credible, and production-worthy before handoff.

## Audit scale

Use:

```text
PASS
NEEDS REVISION
FAIL
```

## Required checks

| Check | Question |
| --- | --- |
| First impression | Does the page look credible within 3 seconds? |
| Visual hierarchy | Is it obvious what matters first, second, and third? |
| Above the fold | Is the offer clear without scrolling? |
| CTA clarity | Is the next action obvious? |
| Typography | Is text readable, consistent, and not cramped? |
| Spacing | Does the layout breathe on mobile and desktop? |
| Color | Is contrast strong and brand feeling coherent? |
| Mobile | Does the layout work on a phone-width viewport? |
| Trust | Does the page include believable trust/proof sections without fake claims? |
| Specificity | Does the site feel built for this target/category, not generic? |

## Automatic fail conditions

Fail if the site contains:

- fake testimonials,
- fake client logos,
- fake awards,
- fake review counts,
- broken primary CTA,
- unreadable mobile layout,
- or obvious generic template residue.

## Required output

Add a section to:

```text
sites/<prospect-slug>/audit.md
```

Use this format:

```markdown
## Design Audit

Decision: PASS / NEEDS REVISION / FAIL

| Check | Result | Notes |
| --- | --- | --- |

### Required revisions

### Design assumptions
```
