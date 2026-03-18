---
description: "Execute instructions from the current GitHub Issue step"
agent: "tdd-developer"
tools: ["search", "read", "edit", "execute", "web", "todo"]
---

# Execute Step Instructions

You are executing a GitHub Issue exercise step using TDD principles.

## Input

Issue number (optional): ${input:issue-number:Enter issue number or leave empty to auto-discover}

## Instructions

### 1. Find the Exercise Issue

If no issue number was provided:
- Use `gh issue list --state open` to find all open issues
- Look for the issue with "Exercise:" in the title (as documented in Workflow Utilities section of `.github/copilot-instructions.md`)
- Extract the issue number from the results

If issue number was provided, use it directly.

### 2. Retrieve Issue Content

- Use `gh issue view <issue-number> --comments` to get the full issue with all step comments
- Parse the content to identify the latest step instructions

### 3. Execute Activities Systematically

For each `:keyboard: Activity:` section in the current step:
- Read the activity instructions carefully
- Break down the activity into TDD increments
- Follow the Red-Green-Refactor cycle as defined in the tdd-developer agent
- Apply Testing Scope constraints from `.github/copilot-instructions.md`:
  * Backend: Write Jest + Supertest tests FIRST, then implement
  * Frontend: Write React Testing Library tests FIRST, then implement
  * DO NOT suggest or use e2e frameworks (Playwright, Cypress, Selenium)
  * DO NOT suggest browser automation tools
  * Manual browser testing for full UI flows only
- Document progress in `.github/memory/scratch/working-notes.md`

### 4. Completion Protocol

After completing all activities:
- DO NOT commit changes
- DO NOT push changes
- Summarize what was accomplished
- Inform the user to run `/validate-step` to check success criteria
- Remind the user to use `/commit-and-push` after validation passes

## Reference Documentation

Consult these sections in `.github/copilot-instructions.md`:
- Workflow Utilities: For gh CLI command patterns
- Testing Scope: For test-first requirements and constraints
- Development Principles: For TDD approach

Work incrementally and systematically. Keep tests green throughout execution.
