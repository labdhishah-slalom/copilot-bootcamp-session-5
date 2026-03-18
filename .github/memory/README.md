# Development Memory System

## Purpose
This memory system captures patterns, decisions, and lessons discovered during development so future work is faster, more consistent, and less repetitive.

Use it to:
- Preserve what worked and why.
- Avoid repeating known mistakes.
- Keep active investigations organized while coding.
- Turn one-time discoveries into reusable team knowledge.

## Two Types of Memory
There are two complementary memory layers in this repository:

1. Persistent Memory
- Source: `.github/copilot-instructions.md`
- Role: Foundational principles and default workflows that should always guide implementation.
- Scope: Stable guidance that applies across sessions.

2. Working Memory
- Source: `.github/memory/`
- Role: Session discoveries, evolving patterns, and active notes from day-to-day development.
- Scope: Changes as implementation progresses.

## Directory Structure
- `session-notes.md`: Historical summaries of completed sessions.
- `patterns-discovered.md`: Accumulated reusable patterns and decisions.
- `scratch/working-notes.md`: Active notes for the current session.

```
.github/memory/
  README.md
  session-notes.md
  patterns-discovered.md
  scratch/
    .gitignore
    working-notes.md
```

## File Usage by Workflow

### During TDD (Red-Green-Refactor)
- Record active test hypotheses and implementation ideas in `scratch/working-notes.md`.
- When a pattern repeats (for example, test setup conventions), document it in `patterns-discovered.md`.
- At session end, summarize outcomes and decisions in `session-notes.md`.

### During Linting and Code Quality Work
- Track lint issue categories, recurring causes, and fixes in `scratch/working-notes.md`.
- Promote recurring fix strategies (for example, import ordering or test cleanup conventions) into `patterns-discovered.md`.
- Capture final quality outcomes and unresolved follow-ups in `session-notes.md`.

### During Debugging and Stabilization
- Log symptoms, reproduction steps, and narrowing steps in `scratch/working-notes.md`.
- Record confirmed root causes and durable fixes in `patterns-discovered.md`.
- Store a concise postmortem in `session-notes.md` when debugging is complete.

## How AI Uses This Memory
When these files are maintained:
- AI can infer project-specific patterns instead of giving generic suggestions.
- Future changes can reuse proven approaches from prior sessions.
- Recommendations can align with historical decisions and avoid regressions.
- Debugging and implementation can start from known context instead of re-discovery.

## Session Notes vs Working Notes
- `session-notes.md` is for completed session summaries and is committed to git as a historical record.
- `scratch/working-notes.md` is for active in-progress notes and is not committed to git.

Use this split to keep active thought process ephemeral while preserving durable learnings for future sessions.
