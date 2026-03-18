---
description: "Validate that all success criteria for the current step are met"
agent: code-reviewer
tools: ["search", "read", "execute", "web", "todo"]
---

Validate that all success criteria for step `${input:step-number}` have been met.

## Instructions

1. **Find the exercise issue** using the GitHub CLI:
   ```bash
   gh issue list --state open
   ```
   Look for the issue with "Exercise:" in the title and get its number.

2. **Get the full issue with comments**:
   ```bash
   gh issue view <issue-number> --comments
   ```

3. **Find the step**: Search through the issue and comments for a section matching `# Step ${input:step-number}:` or `## Step ${input:step-number}`.

4. **Extract the Success Criteria section** from that step — look for a heading like `## Success Criteria` or `## ✅ Success Criteria`.

5. **Check each criterion** against the current workspace state:
   - For file existence criteria: check if the file exists on disk
   - For content criteria: read the file and verify the required content is present
   - For branch/git criteria: run `git branch`, `git log`, `git status`
   - For test criteria: run the relevant tests

6. **Report completion status**:
   - Use ✅ for each criterion that passes
   - Use ❌ for each criterion that fails, with specific guidance on what is missing
   - Provide an overall summary: PASS (all ✅) or NEEDS WORK (any ❌)

## The step number is required

If `${input:step-number}` is not provided, ask the user: "Which step number would you like to validate? (e.g., 5-0, 5-1, 5-2)"
