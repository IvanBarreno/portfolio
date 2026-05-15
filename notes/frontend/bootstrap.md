# Bootstrap

> The world's most popular CSS framework — responsive, consistent, and fast to prototype with.

## What is it?

Bootstrap is an open-source CSS framework originally developed at Twitter by Mark Otto and Jacob Thornton, released in 2011. It provides a collection of pre-built CSS components (buttons, cards, modals, navbars, forms) and a responsive 12-column grid system, allowing developers to build consistent, mobile-friendly UIs without writing CSS from scratch.

Bootstrap 5 (released 2021) dropped the jQuery dependency and modernized the codebase with CSS custom properties and improved utilities.

## Why it matters

Bootstrap democratized frontend development. Before it, building a responsive, cross-browser-consistent interface from scratch required deep CSS expertise. Bootstrap gave developers — especially backend developers — a way to build decent UIs quickly.

Use cases:
- **Rapid prototyping** — get a working UI in hours, not days
- **Admin panels and dashboards** — consistent, professional look without design skills
- **Internal tools** — where speed matters more than originality
- **Learning frontend** — understanding Bootstrap's grid system teaches responsive design fundamentals

## Key Concepts

- **12-column grid** — the page is divided into 12 invisible columns; you place content by declaring how many columns it spans at each breakpoint
- **Breakpoints** — `xs` (< 576px), `sm` (≥ 576px), `md` (≥ 768px), `lg` (≥ 992px), `xl` (≥ 1200px), `xxl` (≥ 1400px)
- **Utility classes** — margin, padding, color, flex, text alignment — all controlled through classes like `mt-3`, `d-flex`, `text-center`
- **Components** — pre-built, styled HTML patterns: Navbar, Card, Modal, Accordion, Toast, Dropdown, etc.
- **JavaScript plugins** — Bootstrap's JS handles modals, tooltips, dropdowns — no custom JS needed
- **Customization** — override Bootstrap's Sass variables to change colors, spacing, fonts across the whole framework

## Quick Example

```html
<!-- Responsive card grid — 1 col on mobile, 3 on desktop -->
<div class="container">
  <div class="row g-4">
    <div class="col-12 col-md-4">
      <div class="card bg-dark text-white border-secondary">
        <div class="card-body">
          <h5 class="card-title">Project Title</h5>
          <p class="card-text">Short description of the project.</p>
          <a href="#" class="btn btn-outline-info">View Repo</a>
        </div>
      </div>
    </div>
    <!-- more cols... -->
  </div>
</div>
```

## Related Technologies

HTML · CSS · Sass · Tailwind CSS (modern alternative) · jQuery (older versions)
