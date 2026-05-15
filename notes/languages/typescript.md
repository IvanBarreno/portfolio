# TypeScript

> JavaScript with types — catch errors at compile time, not at 3 AM in production.

## What is it?

TypeScript is a statically typed superset of JavaScript developed by Microsoft and released in 2012. Any valid JavaScript is also valid TypeScript — you can adopt it gradually. TypeScript adds a type system that is checked at compile time, then compiles ("transpiles") to plain JavaScript that any browser or Node.js can run.

It has become the default choice for large JavaScript codebases and is now the standard in frameworks like Angular and increasingly in React projects.

## Why it matters

JavaScript's dynamic typing is flexible but dangerous at scale. A typo in a property name, a wrong function argument, or a null reference won't surface until runtime — sometimes in production. TypeScript catches these mistakes during development, before the code ever runs.

Benefits:
- **Early error detection** — type errors caught at compile time
- **Better IDE support** — autocompletion, inline documentation, refactoring tools all work better with types
- **Self-documenting code** — function signatures describe their contracts
- **Safer refactoring** — changing a type propagates errors everywhere it's used, so nothing is silently broken
- **Team scalability** — large teams can work on shared codebases without constantly guessing what shape a value has

## Key Concepts

- **Type inference** — TypeScript can often figure out the type without you declaring it explicitly
- **Interfaces & types** — describe the shape of objects; `interface` is extensible, `type` is more flexible
- **Generics** — write functions and types that work over a range of types while staying type-safe
- **Enums** — named sets of constants
- **Union types** — a value can be one of several types: `string | number | null`
- **Type narrowing** — TypeScript tracks control flow (if statements, typeof checks) to narrow types
- **`strict` mode** — enables the full set of strict checks (recommended for all projects)

## Quick Example

```typescript
// Interface defining the shape of a User object
interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "guest"; // union type as literal
}

// Generic function — works for any type T
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

// TypeScript infers the return type as number | undefined
const num = first([1, 2, 3]);

// Type narrowing
function greet(value: string | null) {
  if (value === null) return "Hello, stranger";
  return `Hello, ${value.toUpperCase()}`; // safe — TS knows it's a string here
}
```

## Related Technologies

JavaScript · React · Angular · Node.js · Vite · ESLint
