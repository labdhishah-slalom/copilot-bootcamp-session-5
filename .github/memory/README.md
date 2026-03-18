# Memory System

This directory contains AI working memory for the TODO application project. It enables GitHub Copilot to accumulate and apply knowledge across development sessions.

## Purpose

Track patterns, decisions, and lessons learned during development so that AI assistance improves over time. Instead of rediscovering the same issues, the memory system lets AI build on prior work.

## Two Types of Memory

| Type | Location | Purpose | Lifecycle |
|------|----------|---------|-----------|
| **Persistent** | `.github/copilot-instructions.md` | Foundational principles, project structure, workflows | Permanent — set once, always referenced |
| **Working** | `.github/memory/` | Discoveries, patterns, and session summaries | Evolves as you develop |

## Directory Structure

```
.github/memory/
├── README.md                    ← This file — explains the memory system
├── session-notes.md             ← Historical session summaries (committed)
├── patterns-discovered.md       ← Accumulated code patterns (committed)
└── scratch/
    ├── .gitignore               ← Ignores all files in scratch/ (ephemeral)
    └── working-notes.md         ← Active session notes (NOT committed)
```

### `session-notes.md` — Historical Session Summaries

- **Purpose**: Document what was accomplished each session for future reference
- **When to use**: At the end of each development session, summarize key findings
- **Committed**: Yes — this is a historical record visible to AI in future sessions
- **Example use**: "In session 5-1, discovered that the todo service initializes with `[]` not `null`"

### `patterns-discovered.md` — Accumulated Code Patterns

- **Purpose**: Record recurring patterns, anti-patterns, and solutions discovered during development
- **When to use**: When you notice a pattern that recurs or a solution that worked well
- **Committed**: Yes — AI reads this to avoid repeating past mistakes
- **Example use**: Documenting the empty array vs null initialization pattern

### `scratch/working-notes.md` — Active Session Notes

- **Purpose**: Capture real-time notes during an active development session
- **When to use**: Throughout a session to track current task, findings, blockers
- **Committed**: **No** — the `.gitignore` in `scratch/` prevents this from being committed
- **Workflow**: Write freely during session → summarize important parts into `session-notes.md` at the end

## When to Use Each File During Workflows

### TDD Workflow
- **Before**: Read `patterns-discovered.md` to see if similar tests/fixes have been done
- **During**: Note blockers and findings in `scratch/working-notes.md`
- **After**: Add any new patterns found to `patterns-discovered.md`
- **Session end**: Summarize into `session-notes.md`

### Linting Workflow
- **Before**: Check `patterns-discovered.md` for known lint patterns
- **During**: Track which lint categories are being fixed in `scratch/working-notes.md`
- **After**: Document any new lint patterns or idiomatic fixes

### Debugging Workflow
- **Before**: Scan `session-notes.md` for similar past issues
- **During**: Log your debug hypothesis and findings in `scratch/working-notes.md`
- **After**: Record the root cause and fix pattern in `patterns-discovered.md`

## How AI Reads and Applies These Patterns

1. At the start of a task, Copilot reads committed files (`session-notes.md`, `patterns-discovered.md`)
2. Patterns and past decisions inform current suggestions — avoiding known pitfalls
3. New discoveries update the memory files
4. Over time, the system accumulates project-specific knowledge

## The Learning Loop

```
Persistent Memory (copilot-instructions.md)
         ↓ foundational context
Active Work (scratch/working-notes.md)
         ↓ summarize at session end
Historical Memory (session-notes.md)
         ↓ extract recurring patterns
Accumulated Patterns (patterns-discovered.md)
         ↓ AI reads on next session
Persistent Memory (improved context)
```

> **Key Insight**: `scratch/working-notes.md` is ephemeral — it keeps active work lightweight and uncommitted. Only the distilled learnings get committed, keeping the memory system clean and focused.
