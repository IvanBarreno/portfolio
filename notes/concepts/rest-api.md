# REST API

> An architectural style for networked applications — the standard language of the modern web.

## What is it?

REST (Representational State Transfer) is an architectural style for designing networked applications, defined by Roy Fielding in his 2000 doctoral dissertation. A REST API is a web service that follows these constraints to expose data and operations over HTTP in a predictable, stateless way.

REST is not a protocol or a standard — it is a set of principles. When an API follows these principles consistently, it becomes intuitive to use without reading extensive documentation.

## Why it matters

REST APIs are the glue of the modern internet. Every time a mobile app loads data, a frontend calls a backend, or two services communicate — there is almost certainly a REST API in the middle. Every web developer, regardless of specialization, interacts with REST APIs daily.

Understanding REST means understanding:
- How frontend and backend communicate
- How to design APIs that others can use intuitively
- How to consume third-party APIs (weather, payments, maps, auth)

## REST Constraints (the 6 principles)

1. **Client-Server** — the client (frontend) and server (backend) are independent; they communicate only through the API interface
2. **Stateless** — each request contains all information needed to process it; the server stores no client state between requests
3. **Cacheable** — responses should declare whether they can be cached
4. **Uniform Interface** — consistent conventions across the API (HTTP verbs, resource naming, status codes)
5. **Layered System** — the client doesn't know if it's talking to a server, a load balancer, or a cache
6. **Code on Demand** (optional) — servers can send executable code to clients

## Key Concepts

- **Resources** — the nouns of your API; represented as URL paths: `/users`, `/projects`, `/notes`
- **HTTP verbs** — the actions: `GET` (read), `POST` (create), `PUT/PATCH` (update), `DELETE` (delete)
- **HTTP status codes** — communicate the result: `200 OK`, `201 Created`, `400 Bad Request`, `401 Unauthorized`, `404 Not Found`, `500 Internal Server Error`
- **JSON** — the de facto data format for REST APIs
- **Idempotency** — `GET`, `PUT`, `DELETE` are idempotent (same result regardless of how many times called); `POST` is not
- **URL design** — resources are nouns, not verbs: `/projects` not `/getProjects`; nested resources: `/users/:id/projects`
- **Versioning** — `/api/v1/users` allows breaking changes without affecting existing clients

## Quick Example

```
# RESTful API for a portfolio
GET    /api/v1/projects          → list all projects
GET    /api/v1/projects/:id      → get one project
POST   /api/v1/projects          → create a project
PUT    /api/v1/projects/:id      → replace a project
PATCH  /api/v1/projects/:id      → partially update a project
DELETE /api/v1/projects/:id      → delete a project

# Response example (GET /api/v1/projects/42)
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 42,
  "title": "Portfolio Website",
  "tags": ["React", "TypeScript"],
  "createdAt": "2025-01-15T10:30:00Z"
}

# Error example
HTTP/1.1 404 Not Found
{ "error": "Project not found", "code": "PROJECT_NOT_FOUND" }
```

## Related Technologies

HTTP · JSON · JWT · Swagger/OpenAPI · Postman · Express · FastAPI · Django REST Framework
