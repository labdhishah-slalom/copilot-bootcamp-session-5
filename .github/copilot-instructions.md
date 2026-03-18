# Copilot Instructions for TODO Application

## Project Context
- Full-stack TODO application with React frontend and Express backend.
- Focus on iterative, feedback-driven development.
- Current phase: Backend stabilization and frontend feature completion.

## Documentation References
Use these project documents to ground implementation decisions and align with existing standards:
- [Project Overview](../docs/project-overview.md) - Architecture, tech stack, and structure.
- [Testing Guidelines](../docs/testing-guidelines.md) - Test patterns and standards.
- [Workflow Patterns](../docs/workflow-patterns.md) - Development workflow guidance.

## Development Principles
- **Test-Driven Development**: Follow the Red-Green-Refactor cycle.
- **Incremental Changes**: Prefer small, testable modifications over large rewrites.
- **Systematic Debugging**: Use failing tests and error output as the primary guide.
- **Validation Before Commit**: Ensure all tests pass and there are no lint errors.

## Testing Scope
This project uses **unit tests** and **integration tests only**.

- Backend: Jest + Supertest for API testing.
- Frontend: React Testing Library for component unit/integration tests.
- Use manual browser testing for full UI verification.
- Do **not** suggest or implement end-to-end frameworks (Playwright, Cypress, Selenium).
- Do **not** suggest browser automation tools.
- Reason: Keep the lab focused on unit/integration testing without e2e complexity.

### Testing Approach by Context
- **Backend API changes**: Write Jest tests **first**, then implement (Red-Green-Refactor).
- **Frontend component features**: Write React Testing Library tests **first** for component behavior, then implement (Red-Green-Refactor). Follow with manual browser testing for full UI flows.
- This is true TDD: test first, then write code to pass the test.

## Workflow Patterns
Follow these workflows consistently:

1. **TDD Workflow**: Write/fix tests -> Run -> Fail -> Implement -> Pass -> Refactor.
2. **Code Quality Workflow**: Run lint -> Categorize issues -> Fix systematically -> Re-validate.
3. **Integration Workflow**: Identify issue -> Debug -> Test -> Fix -> Verify end-to-end.

## Agent Usage
Use specialized agents based on task type:

- **tdd-developer**: For test-related work and Red-Green-Refactor cycles.
- **code-reviewer**: For addressing lint errors and code quality improvements.

## Memory System
- Persistent Memory: This file (`.github/copilot-instructions.md`) contains foundational principles and workflows.
- Working Memory: `.github/memory/` directory contains discoveries and patterns.
- During active development, take notes in `.github/memory/scratch/working-notes.md` (not committed).
- At end of session, summarize key findings into `.github/memory/session-notes.md` (committed).
- Document recurring code patterns in `.github/memory/patterns-discovered.md` (committed).
- Reference these files when providing context-aware suggestions.

## Workflow Utilities
Use GitHub CLI commands for workflow automation (available to all modes):

- List open issues: `gh issue list --state open`
- Get issue details: `gh issue view <issue-number>`
- Get issue with comments: `gh issue view <issue-number> --comments`
- The main exercise issue will have "Exercise:" in the title.
- Steps are posted as comments on the main issue.
- Use these commands when `/execute-step` or `/validate-step` prompts are invoked.

## Git Workflow
Follow these Git standards:

- Use conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, etc.
- Use feature branches: `feature/<descriptive-name>`.
- Always stage all changes before committing: `git add .`
- Push to the correct branch: `git push origin <branch-name>`
