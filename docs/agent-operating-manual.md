# Agent Operating Manual

This file explains how an agent should move through GenJess OS when asked to build or prepare a website for a target.

## The problem this repo solves

A Slack message or chat instruction alone is not enough. The repo must tell an agent:

- what to read,
- what to build,
- where to save it,
- how to audit it,
- and what proof to return.

## Manual operating flow

### 1. Intake

Identify the target.

A valid target should include at least one of:

- business name,
- website URL,
- Google Business Profile URL,
- location plus business category,
- user-provided brief.

If no target exists, do not build.

### 2. Create folders

Create:

```text
clients/<prospect-slug>/
sites/<prospect-slug>/
```

### 3. Save the brief

Create:

```text
clients/<prospect-slug>/brief.md
```

Include:

- target name,
- location,
- category,
- source links provided,
- user request,
- assumptions,
- non-goals.

### 4. Save source notes

Create:

```text
clients/<prospect-slug>/source-notes.md
```

Use it to separate verified facts from assumptions.

### 5. Qualify the prospect

Use:

```text
docs/gates/prospect_qualification.md
```

Save result to:

```text
clients/<prospect-slug>/qualification.md
```

### 6. Build the site

Use:

```text
docs/workflows/manual-website-build.md
```

Save site work to:

```text
sites/<prospect-slug>/
```

Minimum files:

```text
sites/<prospect-slug>/README.md
sites/<prospect-slug>/index.html
```

### 7. Audit the site

Use:

```text
docs/gates/design_audit.md
docs/gates/site_audit.md
```

Save result to:

```text
sites/<prospect-slug>/audit.md
```

### 8. Handoff

Create:

```text
clients/<prospect-slug>/handoff.md
```

Include:

- what was built,
- where it is saved,
- what was verified,
- what is placeholder,
- how to preview,
- next recommended action.

## What not to do

Do not skip straight to automation.
Do not invent prospect data.
Do not create generic replica sites.
Do not bury final outputs in random folders.
Do not claim audit completion without saving audit notes.
