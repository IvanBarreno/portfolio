# Node.js

> JavaScript on the server — the runtime that unified frontend and backend under a single language.

## What is it?

Node.js is a JavaScript runtime built on Chrome's V8 engine, created by Ryan Dahl in 2009. It allows JavaScript to run outside the browser — on servers, in the terminal, as build tools, and in desktop apps.

Node.js uses an **event-driven, non-blocking I/O model**, which makes it lightweight and efficient for I/O-intensive operations like handling many simultaneous network requests.

## Why it matters

Before Node.js, JavaScript developers had to switch to a different language (PHP, Python, Ruby, Java) for backend work. Node.js created a unified full-stack development experience and spawned an enormous ecosystem — **npm** is the world's largest package registry with over 2 million packages.

Best use cases:
- **REST APIs** — fast, lightweight API servers
- **Real-time applications** — chat apps, live notifications, collaborative tools (WebSockets)
- **Microservices** — small, independent services that communicate over HTTP
- **BFF (Backend for Frontend)** — a thin backend layer that aggregates data for the frontend
- **Build tools** — Vite, webpack, ESLint, Prettier all run on Node.js

## Key Concepts

- **Event loop** — Node.js processes I/O operations asynchronously; while waiting for a database or file, it handles other requests
- **Non-blocking I/O** — operations like reading files or querying a database don't block the thread; a callback/promise is used when they complete
- **npm / package.json** — Node's package manager; `package.json` defines dependencies and scripts
- **CommonJS vs ESM** — two module systems; `require()` (older) vs `import/export` (modern)
- **Streams** — handle large data (files, network) in chunks rather than loading everything into memory
- **Worker Threads** — Node.js is single-threaded by default, but Worker Threads allow CPU-intensive work in parallel
- **`process` object** — provides access to environment variables (`process.env`), command-line args, and runtime info

## Quick Example

```javascript
// Minimal HTTP server — no framework needed
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/health" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

## Related Technologies

Express · NestJS · npm · TypeScript · WebSockets · Docker
