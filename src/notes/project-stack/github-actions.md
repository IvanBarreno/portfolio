# GitHub Actions

> CI/CD built into GitHub — automate your workflow on every push, PR, or schedule.

## What is it?

GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform built into GitHub, released in 2018. It allows you to automate any workflow — build, test, lint, deploy — triggered by GitHub events: pushing code, opening a pull request, creating a release, or on a schedule.

Workflows are defined as YAML files stored in `.github/workflows/`. When a trigger event occurs, GitHub runs the workflow on virtual machines (runners) provided by GitHub.

## Why it matters

Every software project needs automation. Without CI/CD:
- You forget to run tests before deploying
- You manually SSH into servers to deploy
- Code review is delayed waiting for "does it build?"
- Deployment steps are undocumented and error-prone

GitHub Actions solves this by running these steps automatically on every relevant event, in a fresh, reproducible environment.

Common use cases:
- **Run tests** on every push/PR — catch broken code before it merges
- **Deploy to GitHub Pages** on push to `main`
- **Lint and format checks** — enforce code quality automatically
- **Publish to npm** when a new version tag is pushed
- **Scheduled jobs** — run a script every night or every Monday

## Key Concepts

- **Workflow** — a YAML file in `.github/workflows/`; defines the automation
- **Trigger (`on`)** — the event that starts the workflow: `push`, `pull_request`, `schedule`, `workflow_dispatch` (manual)
- **Job** — a set of steps that run on the same runner; jobs run in parallel by default
- **Step** — a single task within a job; either a shell command (`run:`) or an action (`uses:`)
- **Action** — a reusable, packaged step from the GitHub Marketplace: `actions/checkout`, `actions/setup-node`, `peaceiris/actions-gh-pages`
- **Runner** — the virtual machine that executes the job; `ubuntu-latest`, `windows-latest`, `macos-latest`
- **`secrets`** — encrypted environment variables stored in the repo settings; accessed as `${{ secrets.MY_SECRET }}`
- **`GITHUB_TOKEN`** — an automatically generated token with permissions to interact with the repo (push, create releases, etc.)
- **Matrix builds** — run the same job across multiple configurations: test on Node 18, 20, and 22 simultaneously

## Quick Example

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Type check
        run: npx tsc --noEmit

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build

  deploy:
    needs: test  # only runs if test job passes
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'  # only on main branch

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Related Technologies

GitHub Pages · Docker · npm · Vite · ESLint · TypeScript · Vercel · Netlify
