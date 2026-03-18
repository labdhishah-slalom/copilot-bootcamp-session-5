---
description: "Validate that all success criteria for the current step are met"
agent: "code-reviewer"
tools: ["search", "read", "execute", "web", "todo"]
---

# Validate Step Success Criteria

You are validating completion of a GitHub Issue exercise step.

## Input

Step number (REQUIRED): ${input:step-number:Enter step number (e.g., 5-0, 5-1)}

## Instructions

### 1. Find the Main Exercise Issue

- Use `gh issue list --state open` to find all open issues
- Look for the issue with "Exercise:" in the title (as documented in Workflow Utilities section of `.github/copilot-instructions.md`)
- Extract the issue number

### 2. Retrieve Issue with Comments

- Use `gh issue view <issue-number> --comments` to get the complete issue
- This ensures you have all step instructions including those posted as comments

### 3. Locate the Specified Step

Search through the issue content to find:
- The heading `# Step ${step-number}:` (exact format with the step number provided)
- Example: If step-number is "5-1", search for `# Step 5-1:`

### 4. Extract Success Criteria

From the located step section:
- Find the "Success Criteria" or similar validation section
- Parse each criterion listed
- Identify what conditions must be met for the step to be considered complete

### 5. Validate Each Criterion

For each success criterion:
- Check the current workspace state (files, tests, code structure)
- Run tests if criteria mention test passing: `npm test` or workspace-specific test commands
- Run lint checks if criteria mention code quality: `npm run lint` or similar
- Verify file existence, content, or structure as specified
- Mark each criterion as ✅ Complete or ❌ Incomplete

### 6. Report Validation Results

Provide a structured report:
- **Step Number**: The step being validated
- **Total Criteria**: Count of success criteria
- **Passed**: Count of criteria that are met
- **Failed**: Count of criteria that are not met
- **Details**: For each criterion:
  * Criterion description
  * Status (✅ or ❌)
  * If incomplete, provide specific guidance on what's missing or needs correction

### 7. Next Steps Guidance

If all criteria pass:
- Congratulate the user on completing the step
- Suggest using `/commit-and-push` to save progress
- Mention moving to the next step if available

If any criteria fail:
- Provide actionable recommendations for each incomplete item
- Suggest using `/execute-step` again or manual fixes
- Prioritize fixes by impact (critical test failures first, then quality issues)

## Reference Documentation

Consult these sections in `.github/copilot-instructions.md`:
- Workflow Utilities: For gh CLI command patterns
- Development Principles: For validation standards

Be thorough and systematic. Provide clear, actionable feedback for any incomplete criteria.
