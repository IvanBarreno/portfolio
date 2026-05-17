# GitHub Pages

> Free static site hosting, directly from a GitHub repository — no server, no cost, no configuration.

## What is it?

GitHub Pages is a static site hosting service provided by GitHub, launched in 2008. It serves static files (HTML, CSS, JavaScript, images) directly from a GitHub repository to the web. The site is hosted at `https://<username>.github.io` or `https://<username>.github.io/<repo-name>`.

GitHub Pages is free for public repositories and has no bandwidth limitations for normal traffic, making it ideal for personal portfolios, project documentation, and landing pages.

## Why it matters

Hosting a static website normally requires a web server, a hosting account, and ongoing costs. GitHub Pages eliminates all of this:

- **Zero cost** — completely free for public repos
- **Zero server management** — GitHub handles infrastructure, uptime, TLS certificates
- **HTTPS by default** — automatic SSL certificate via Let's Encrypt
- **Custom domains** — point your own domain (or subdomain) to GitHub Pages for free
- **Git-based deployment** — push to a branch and the site updates automatically
- **CDN** — served from GitHub's global CDN for fast load times worldwide

## How It Works

GitHub Pages serves files from a specific source:
1. A branch (typically `gh-pages` or `main`)
2. A `/docs` folder in the repository

For a Vite/React project, the typical setup is:
1. Build the project → generates `dist/` folder
2. Push the contents of `dist/` to the `gh-pages` branch
3. GitHub Pages serves from `gh-pages`

This is automated with the `gh-pages` npm package or GitHub Actions.

## Key Concepts

- **User/Organization pages** — repo named `<username>.github.io` → served at `https://<username>.github.io`; must deploy from `main`
- **Project pages** — any other repo → served at `https://<username>.github.io/<repo-name>`; set `base` in `vite.config.ts`
- **Custom domain** — add a `CNAME` file to the deployment with your domain; configure DNS to point to GitHub's IP
- **`base` in Vite** — if deploying to `/portafolio/`, set `base: "/portafolio/"` in `vite.config.ts` so assets load correctly
- **SPA routing issue** — GitHub Pages serves 404 for direct URL access; solution: copy `index.html` to `404.html` with a redirect script

## Deployment Setup

```json
// package.json scripts
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

```yaml
# .github/workflows/deploy.yml — auto-deploy on push to main
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Related Technologies

GitHub Actions · Vite · React · gh-pages package · Custom Domains · Cloudflare (DNS/CDN)
