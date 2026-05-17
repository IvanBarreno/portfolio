# JavaScript

> The language of the web — the only language that runs natively in every browser.

## What is it?

JavaScript (JS) is a lightweight, interpreted, dynamically typed programming language originally created by Brendan Eich in 1995 in just 10 days. It was designed to add interactivity to web pages — and it succeeded far beyond its original scope.

Today JavaScript runs not just in browsers but also on servers (Node.js), mobile devices (React Native), desktop apps (Electron), and embedded systems. It is the most widely deployed programming language in the world.

## Why it matters

JavaScript is unavoidable in web development. Even if you use TypeScript, React, or any other frontend tool — it all compiles down to JavaScript. Understanding JS at the core level is essential to debugging, performance tuning, and understanding how modern frameworks actually work.

Key use cases:
- **Frontend interactivity** — DOM manipulation, event handling, animations
- **Single Page Applications (SPAs)** — React, Vue, Angular are all JS frameworks
- **Server-side** — Node.js brings JS to the backend
- **Real-time apps** — WebSockets, chat applications, live dashboards
- **Browser APIs** — fetch, localStorage, geolocation, notifications

## Key Concepts

- **Event loop** — JavaScript is single-threaded but handles concurrency through an event loop and a callback queue
- **Asynchronous programming** — `callbacks → Promises → async/await` — the evolution of handling async operations
- **Closures** — a function that retains access to its outer scope even after that scope has closed
- **Prototype chain** — JS objects inherit properties through a prototype chain, not classical inheritance
- **Hoisting** — `var` declarations and function declarations are moved to the top of their scope at compile time
- **ES6+** — modern JavaScript: arrow functions, destructuring, spread operator, modules, optional chaining

## Quick Example

```javascript
// Async/await — clean way to handle asynchronous operations
async function fetchUser(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}

// Destructuring + spread
const { name, ...rest } = { name: "Alice", age: 30, role: "dev" };
// name = "Alice", rest = { age: 30, role: "dev" }
```

## Related Technologies

TypeScript · Node.js · React · Angular · Express · Vite · npm
