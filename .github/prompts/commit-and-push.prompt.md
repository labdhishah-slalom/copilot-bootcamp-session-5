---
description: "Analyze changes, generate commit message, and push to feature branch"
tools: ["read", "execute", "todo"]
---

Analyze the current changes, generate a descriptive commit message, and push to the specified branch.

## Instructions

1. **Get branch name**: Use `${input:branch-name}` — if not provided, ask the user for the branch name before proceeding.

2. **Analyze changes**:
   ```bash
   git diff
   git diff --staged
   git status
   ```

3. **Generate a commit message** using conventional commit format from project instructions:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `chore:` for tooling, config, or maintenance
   - `docs:` for documentation changes
   - Make the message descriptive and specific to what changed

4. **Prepare the branch**:
   - If the branch doesn't exist: `git checkout -b <branch-name>`
   - If the branch exists: `git checkout <branch-name>`

5. **Stage and commit**:
   ```bash
   git add .
   git commit -m "<generated-message>"
   ```

6. **Push to the specified branch**:
   ```bash
   git push origin <branch-name>
   ```

7. Confirm the push was successful and show the commit summary.

## Important Constraints

- **ONLY** commit to the user-provided branch name
- **DO NOT** commit to `main` or any other branch
- Always use `git add .` to stage all changes before committing
