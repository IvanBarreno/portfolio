# Docker

> Package your application and everything it needs into a container — runs the same everywhere.

## What is it?

Docker is an open-source platform for building, shipping, and running applications in **containers**, released in 2013 by Solomon Hykes. A container is a lightweight, isolated environment that packages an application together with its runtime, libraries, and configuration — everything needed to run, regardless of the host machine's environment.

Containers are not virtual machines. VMs virtualize hardware and run a full OS. Containers share the host OS kernel and are therefore much lighter — they start in seconds and use megabytes of memory instead of gigabytes.

## Why it matters

The classic developer problem: *"It works on my machine."* Docker eliminates this by ensuring the application runs in exactly the same environment everywhere — development laptop, CI server, staging, production.

Docker enables:
- **Consistent environments** — same container in dev and prod; no "it worked locally" excuses
- **Isolated dependencies** — two projects can have conflicting dependency versions; each runs in its own container
- **Easy onboarding** — new developers run `docker compose up` and get a working stack in minutes
- **Microservices** — run multiple services (API, database, cache) as separate containers, connected through a virtual network
- **CI/CD** — build and test in identical environments on every commit

## Key Concepts

- **Image** — a read-only blueprint for creating containers; built from a `Dockerfile`; stored in registries (Docker Hub, ECR, GCR)
- **Container** — a running instance of an image; isolated process with its own filesystem, network, and process space
- **Dockerfile** — a text file with instructions for building an image (`FROM`, `RUN`, `COPY`, `CMD`)
- **Docker Compose** — tool for defining and running multi-container applications with a `docker-compose.yml` file
- **Registry** — a storage and distribution system for Docker images; Docker Hub is the default public registry
- **Volume** — persistent storage that survives container restarts; database data, file uploads
- **Network** — containers on the same Docker network can communicate by service name
- **Layer caching** — Docker caches each Dockerfile instruction; only changed layers are rebuilt

## Quick Example

```dockerfile
# Dockerfile for a Node.js API
FROM node:18-alpine          # start from official Node image

WORKDIR /app                 # set working directory

COPY package*.json ./        # copy dependency files first (for cache)
RUN npm ci --omit=dev        # install production dependencies

COPY . .                     # copy source code
RUN npm run build            # build TypeScript

EXPOSE 3000
CMD ["node", "dist/main.js"]
```

```yaml
# docker-compose.yml — run API + database together
services:
  api:
    build: .
    ports: ["3000:3000"]
    environment:
      DATABASE_URL: mysql://user:pass@db:3306/portfolio
    depends_on: [db]

  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: portfolio
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

## Related Technologies

Kubernetes · GitHub Actions · AWS ECS · Node.js · Python · Linux · CI/CD
