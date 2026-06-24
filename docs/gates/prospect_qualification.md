# Gate: Prospect Qualification

Purpose: decide whether a target is worth building a spec site for.

This gate does not scrape prospects and does not create fake prospect data. It evaluates a real target provided by the user or found through an approved research workflow.

## Required inputs

At least one must exist:

- Business name
- Existing website URL
- Google Business Profile URL
- Category plus city
- User-provided target brief

## Qualification checklist

Score each item as `yes`, `no`, or `unknown`.

| Check | Question |
| --- | --- |
| Real business | Is this a real business or target? |
| Local/commercial intent | Does the business sell a service/product where a better site can matter? |
| Website gap | Is the current web presence missing, weak, outdated, slow, unclear, or low-converting? |
| Contact path | Is there a clear phone, email, form, address, or booking path? |
| Offer clarity gap | Is the current offer hard to understand or poorly presented? |
| Trust gap | Are reviews, examples, credentials, or proof missing/poorly surfaced? |
| Local SEO gap | Is location/category positioning weak or unclear? |
| Build feasibility | Can a useful first-pass site be built from available facts without inventing business claims? |

## Pass condition

Pass if:

```text
real business = yes
commercial intent = yes
build feasibility = yes
and at least two gap checks = yes
```

## Fail condition

Fail if:

- the business is not real,
- there is not enough target context,
- the build would require inventing core claims,
- or the target is outside the allowed scope.

## Required output

Save to:

```text
clients/<prospect-slug>/qualification.md
```

Use this format:

```markdown
# Prospect Qualification

## Target

## Inputs reviewed

## Checklist

| Check | Result | Notes |
| --- | --- | --- |

## Decision

PASS / FAIL / NEEDS MORE CONTEXT

## Why

## What must not be invented
```
