# Bruno

> An open-source, offline-first API client that stores collections as plain files in your Git repo.

## What is it?

Bruno is an open-source API client created by Anoop M D, released in 2022. It is a direct alternative to Postman and Insomnia, but with one key philosophical difference: **collections are stored as plain files on disk**, not in the cloud.

Each request in Bruno is a `.bru` file — a human-readable text file using Bruno's own markup language. These files live in your project repository, version-controlled with Git alongside your code.

## Why it matters

Postman's 2023 decision to remove offline capabilities and force cloud sync pushed many developers to look for alternatives. Bruno's approach — local files, no account required, no cloud sync — resonated strongly with developers who value:

- **Privacy** — API requests and credentials never leave your machine
- **Version control** — collections evolve with your code in the same Git repo
- **Team collaboration** — share collections via Git PRs, not Postman accounts
- **Offline use** — works completely without an internet connection
- **No subscription** — fully free and open-source (MIT license)

## Key Concepts

- **`.bru` files** — plain text files defining requests; readable and diffable in Git
- **Bru language** — Bruno's own simple DSL for defining requests (not JSON or YAML)
- **Environments** — variable sets (`.env` files in the collection folder); `.gitignore` secrets
- **Scripts** — pre-request and post-response JavaScript, like Postman
- **Assertions** — built-in test syntax without writing JavaScript: `res.status: 200`
- **CLI (`@usebruno/cli`)** — run Bruno collections in CI/CD pipelines: `bru run collection/`
- **No account required** — open immediately, no sign-up, no cloud

## Quick Example (`.bru` file)

```
meta {
  name: Create Project
  type: http
  seq: 1
}

post {
  url: {{base_url}}/api/projects
  body: json
  auth: bearer
}

auth:bearer {
  token: {{auth_token}}
}

body:json {
  {
    "title": "Portfolio Website",
    "description": "My personal portfolio",
    "tags": ["React", "TypeScript"]
  }
}

assert {
  res.status: eq 201
  res.body.id: isDefined
}
```

## Related Technologies

Postman · Insomnia · REST API · Git · curl · OpenAPI
