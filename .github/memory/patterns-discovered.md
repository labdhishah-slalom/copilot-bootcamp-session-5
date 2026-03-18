# Patterns Discovered

Accumulated code patterns, anti-patterns, and solutions discovered during development. AI reads this file to avoid repeating past mistakes and to apply proven solutions.

---

## Pattern Template

```
## Pattern: [Name]

- **Context**: Where/when this pattern applies
- **Problem**: What issue or question arises
- **Solution**: The correct approach
- **Example**:
  ```js
  // code example
  ```
- **Related Files**: Which files are affected
```

---

## Pattern: Service Initialization — Empty Array vs Null

- **Context**: Backend service layer in Express TODO application
- **Problem**: Using `null` to initialize a list of todos causes downstream errors — `null` is not iterable, so `.map()`, `.filter()`, etc. throw
- **Solution**: Always initialize todo collections with an empty array `[]`, never `null`
- **Example**:
  ```js
  // ❌ Wrong — causes TypeError: Cannot read properties of null
  let todos = null;

  // ✅ Correct — safe to iterate even when empty
  let todos = [];
  ```
- **Related Files**: `packages/backend/src/app.js`, `packages/backend/__tests__/app.test.js`
