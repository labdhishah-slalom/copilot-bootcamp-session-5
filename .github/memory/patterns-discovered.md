# Patterns Discovered

Use this file to capture reusable code patterns and decisions discovered over time.

## Pattern Template

### Pattern Name
- 

### Context
- 

### Problem
- 

### Solution
- 

### Example
```js
// Add a short, concrete example here.
```

### Related Files
- 

## Example Pattern: Service Initialization (Empty Array vs Null)

### Pattern Name
- Service initialization with empty collections

### Context
- Service modules that hold in-memory lists for TODO items or cached records.

### Problem
- Initializing a collection as `null` forces null checks everywhere and can cause runtime errors when array methods are called before initialization.

### Solution
- Initialize collection state as an empty array `[]` so list operations are always safe and code paths stay consistent.

### Example
```js
// Preferred: initialized and immediately iterable
let todos = [];

function addTodo(todo) {
  todos.push(todo);
}

function getTodos() {
  return todos;
}
```

### Related Files
- `packages/backend/src/app.js`
- `packages/backend/__tests__/app.test.js`

Keep adding new patterns as they are validated in real work so this file becomes a reliable implementation guide.
