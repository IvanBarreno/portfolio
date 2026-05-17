# Postman

> The industry-standard tool for building, testing, and documenting APIs.

## What is it?

Postman is an API platform founded in 2012 by Abhinav Asthana. It started as a Chrome extension for making HTTP requests and has evolved into a full API development platform used by over 25 million developers and 500,000 companies.

Postman provides a graphical interface for crafting and sending HTTP requests (GET, POST, PUT, PATCH, DELETE), inspecting responses, and organizing requests into collections.

## Why it matters

When building or consuming a REST API, you need a way to test it without building a full frontend first. Postman is the tool developers reach for to:

- **Test API endpoints** before integrating them into a frontend
- **Debug responses** — inspect headers, status codes, and body in a readable format
- **Share API collections** with teammates — everyone uses the same requests with the same configuration
- **Write automated API tests** — assertions on response status, body fields, and response time
- **Generate documentation** — Postman can publish interactive API docs from your collections
- **Mock servers** — create a fake API that returns pre-defined responses while the backend is being built

## Key Concepts

- **Request** — an HTTP call with a method, URL, headers, and optional body; the core unit
- **Collection** — an organized folder of related requests; share with teammates or export to file
- **Environment** — a set of variables (`{{base_url}}`, `{{token}}`) that change depending on context (dev, staging, prod)
- **Pre-request scripts** — JavaScript code that runs before a request (generate timestamps, sign requests)
- **Test scripts** — JavaScript code that runs after a request to assert expected behavior
- **Variables** — `{{variableName}}` syntax used anywhere in a request; scoped to collection, environment, or globally
- **Authorization** — built-in support for Bearer tokens, API keys, Basic auth, OAuth 2.0

## Quick Example

```javascript
// Test script — runs after a request in Postman
pm.test("Status code is 201", () => {
    pm.response.to.have.status(201);
});

pm.test("Response has project id", () => {
    const json = pm.response.json();
    pm.expect(json).to.have.property("id");
    pm.expect(json.id).to.be.a("number");
});

// Save token from login response for subsequent requests
const token = pm.response.json().access_token;
pm.environment.set("auth_token", token);
```

## Related Technologies

Bruno · REST API · Swagger/OpenAPI · Insomnia · curl · Express · FastAPI
