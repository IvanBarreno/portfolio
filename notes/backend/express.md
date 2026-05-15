# Express

> The minimal, unopinionated Node.js web framework — the building block of most Node.js APIs.

## What is it?

Express.js is a fast, minimalist web framework for Node.js, released in 2010. It provides a thin layer of fundamental web application features — routing, middleware, request/response handling — without dictating how you organize your code or which tools you use.

Express is the "E" in the **MEAN** and **MERN** stacks (MongoDB, Express, Angular/React, Node.js), and it remains the most downloaded Node.js framework on npm.

## Why it matters

Express popularized the **middleware pattern** for web servers: a pipeline of functions that process a request before it reaches the final handler. This pattern is so influential that virtually every Node.js framework that followed (Koa, Fastify, NestJS) is built around a similar concept.

Express is the right choice when:
- You want full control over your application structure
- You're building a small to medium API or microservice
- You're learning backend development with Node.js
- You need to add server-side logic to an existing project quickly

## Key Concepts

- **Routing** — map HTTP methods and URL paths to handler functions: `app.get('/users', handler)`
- **Middleware** — functions that receive `(req, res, next)` and either process the request, respond, or call `next()` to continue the chain
- **Route parameters** — `:id` in routes extracts dynamic path segments: `/users/:id`
- **Query strings** — `req.query` parses URL query parameters: `/search?q=node`
- **Request body** — `express.json()` middleware parses JSON request bodies into `req.body`
- **Router** — `express.Router()` creates modular route groups for organizing endpoints
- **Error handling** — middleware with four parameters `(err, req, res, next)` catches errors from the chain

## Quick Example

```javascript
import express from "express";
const app = express();

app.use(express.json()); // parse JSON bodies

// Route with parameter
app.get("/users/:id", async (req, res) => {
  const user = await db.findUser(req.params.id);
  if (!user) return res.status(404).json({ error: "Not found" });
  res.json(user);
});

// Error handling middleware (must be last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(3000);
```

## Related Technologies

Node.js · NestJS · TypeScript · MongoDB · JWT · Postman · Docker
