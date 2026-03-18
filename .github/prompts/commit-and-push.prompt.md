---
description: "Analyze changes, generate commit message, and push to feature branch"
tools: ["read", "execute", "todo"]
---

# Commit and Push Changes

You are committing and pushing changes using Git best practices.

## Input

Branch name (REQUIRED): ${input:branch-name:Enter the feature branch name (e.g., feature/add-validation)}

## Instructions

### 1. Validate Branch Name

- Ensure a branch name was provided
- If missing, stop and ask the user to provide a branch name
- Verify the branch name follows the pattern documented in Git Workflow section of `.github/copilot-instructions.md` (e.g., `feature/<descriptive-name>`)

### 2. Analyze Changes

- Run `git status` to see modified files
- Run `git diff` to review changes
- Summarize the nature of the changes (feature, fix, refactor, etc.)

### 3. Generate Commit Message

Using the Git Workflow conventions from `.github/copilot-instructions.md`:
- Use conventional commit format: `feat:`, `fix:`, `chore:`, `docs:`, etc.
- Write a clear, descriptive message that explains WHAT changed
- Example formats:
  * `feat: add user input validation for TODO creation`
  * `fix: correct error handling in DELETE endpoint`
  * `test: add integration tests for validation logic`
  * `chore: remove unused imports and console logs`

### 4. Create or Switch to Branch

- Check if the branch exists: `git branch --list <branch-name>`
- If the branch does NOT exist:
  * Create it: `git checkout -b <branch-name>`
- If the branch exists:
  * Switch to it: `git checkout <branch-name>`
- NEVER commit directly to `main` or any branch other than the user-specified branch

### 5. Stage, Commit, and Push

Follow the Git Workflow from `.github/copilot-instructions.md`:
1. Stage all changes: `git add .`
2. Commit with the generated message: `git commit -m "<message>"`
3. Push to the specified branch: `git push origin <branch-name>`

### 6. Confirmation

After pushing:
- Confirm the branch and commit were pushed successfully
- Display the commit hash and message
- Provide the branch name for reference

## Reference Documentation

Consult these sections in `.github/copilot-instructions.md`:
- Git Workflow: For conventional commits and branch strategies

Do not modify any code. Focus only on Git operations.
