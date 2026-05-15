# Swagger / OpenAPI

> A standard for describing REST APIs — machine-readable documentation that generates interactive UIs, clients, and server stubs.

## What is it?

**OpenAPI** (formerly Swagger) is a specification for describing REST APIs in a standardized, machine-readable format (YAML or JSON). It defines every endpoint, its parameters, request bodies, response schemas, and authentication methods in a structured document.

**Swagger** refers to the tooling ecosystem built around the OpenAPI specification:
- **Swagger UI** — a web interface that renders the OpenAPI spec as interactive documentation
- **Swagger Editor** — a browser-based editor for writing OpenAPI specs
- **Swagger Codegen** — generates client SDKs and server stubs from a spec

The OpenAPI Specification (OAS) is maintained by the OpenAPI Initiative, a Linux Foundation project.

## Why it matters

API documentation is notoriously hard to keep up to date. Developers write it once and forget to update it when the API changes. OpenAPI solves this by making the spec the **single source of truth** — generate docs, client libraries, and mock servers all from the same file.

Benefits:
- **Interactive docs** — Swagger UI lets API consumers try requests directly in the browser
- **Client generation** — generate typed client SDKs in any language from the spec
- **Contract-first development** — design the API spec before writing code; frontend and backend teams work in parallel
- **Automatic generation** — FastAPI, NestJS, and Spring Boot generate the OpenAPI spec from your code automatically
- **Validation** — validate that requests/responses conform to the defined schema

## Quick Example (OpenAPI 3.0 YAML)

```yaml
openapi: "3.0.3"
info:
  title: Portfolio API
  version: "1.0"

paths:
  /projects:
    get:
      summary: List all projects
      responses:
        "200":
          description: A list of projects
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Project"

    post:
      summary: Create a project
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/CreateProject"
      responses:
        "201":
          description: Created

components:
  schemas:
    Project:
      type: object
      properties:
        id: { type: integer }
        title: { type: string }
        tags:
          type: array
          items: { type: string }

    CreateProject:
      type: object
      required: [title]
      properties:
        title: { type: string }
        description: { type: string }
```

## Related Technologies

REST API · FastAPI (auto-generates) · NestJS (auto-generates) · Postman · Bruno · OpenAPI Generator
