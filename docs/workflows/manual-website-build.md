# Workflow: Manual Website Build

Purpose: give an agent a usable path to build one static website from a real target brief.

This is the current agency workflow. Slack/job-ledger work is control-plane infrastructure, not the website-building workflow.

## Required inputs

- Target name or brief
- Business category
- Location if local
- Any provided source links
- User's desired outcome

## Required folder setup

Create:

```text
clients/<prospect-slug>/
sites/<prospect-slug>/
```

## Step 1: Brief

Create:

```text
clients/<prospect-slug>/brief.md
```

Include:

- target,
- category,
- location,
- source links,
- user request,
- assumptions,
- constraints,
- non-goals.

## Step 2: Source notes

Create:

```text
clients/<prospect-slug>/source-notes.md
```

Separate:

```text
Verified facts
User-provided facts
Assumptions
Placeholder items
Missing information
```

## Step 3: Qualification

Run the prospect qualification gate.

Save:

```text
clients/<prospect-slug>/qualification.md
```

If qualification fails, do not build the site unless the user explicitly asks for a prototype anyway.

## Step 4: Site plan

Create:

```text
sites/<prospect-slug>/README.md
```

Include:

- site goal,
- audience,
- core offer,
- page sections,
- CTA,
- known placeholders.

## Step 5: Build static page

Create:

```text
sites/<prospect-slug>/index.html
```

Minimum page sections:

1. Hero
2. Problem or audience fit
3. Services/value
4. Trust/proof area
5. Process or differentiator
6. Contact/CTA
7. Footer

Rules:

- Use one HTML file unless there is a reason to split CSS/JS.
- No fake reviews.
- No fake businesses.
- No fake awards.
- Placeholder fields must be visibly labeled in code comments or copy.
- Mobile-first.

## Step 6: Audit

Run:

```text
docs/gates/design_audit.md
docs/gates/site_audit.md
```

Save:

```text
sites/<prospect-slug>/audit.md
```

## Step 7: Handoff

Create:

```text
clients/<prospect-slug>/handoff.md
```

Include:

- files changed,
- how to preview,
- what was verified,
- what is placeholder,
- audit result,
- recommended next action.

## Done means

A different agent can open the repo, read the files, preview the site, understand the assumptions, and know the next action without asking where anything is saved.
