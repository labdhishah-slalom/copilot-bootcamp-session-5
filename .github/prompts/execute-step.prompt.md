---
description: "Execute instructions from the current GitHub Issue step"
agent: tdd-developer
tools: ["search", "read", "edit", "execute", "web", "todo"]
---

Execute the instructions for the current exercise step from GitHub Issues.

## Instructions

1. If `${input:issue-number}` is not provided, use the GitHub CLI to find the main exercise issue:
   ```bash
   gh issue list --state open
   ```
   Look for the issue with "Exercise:" in the title.

2. Get the full issue content with comments:
   ```bash
   gh issue view <issue-number> --comments
   ```

3. Parse the **latest step comment** — find the most recent comment that contains a step heading (e.g., `## Step 5-1:`).

4. Execute each `:keyboard: Activity:` section systematically:
   - Read the activity instructions carefully
   - Complete each activity in order
   - Verify each activity is complete before moving to the next

5. **DO NOT commit or push changes** — committing is handled by `/commit-and-push`.

6. After completing all activities, inform the user:
   - What was completed
   - Any issues encountered
   - To run `/validate-step <step-number>` to verify completion

## Important Constraints

- Follow testing scope from project instructions — **NO e2e frameworks** (no Playwright, Cypress, Selenium)
- Use only Jest + Supertest for backend tests, React Testing Library for frontend tests
- Write tests FIRST before implementing features (TDD principle)
- Do not address lint errors unless they cause test failures (that is the code-reviewer's job)
