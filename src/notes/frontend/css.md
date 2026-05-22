# CSS

> The language of style — what transforms raw HTML structure into a visual experience.

## What is it?

CSS (Cascading Style Sheets) is the language used to describe how HTML elements should be displayed. Created by Håkon Wium Lie in 1994, CSS separates content (HTML) from presentation (styles), which made web pages dramatically easier to maintain and redesign.

Modern CSS (CSS3 and beyond) is a powerful layout and animation system — it can handle complex multi-column layouts, smooth animations, responsive design, and even basic logic with custom properties (variables).

## Why it matters

CSS is often underestimated. A developer who truly understands CSS can build any visual design without reaching for JavaScript. The gap between a good-looking site and an average one is almost entirely CSS.

Modern CSS has eliminated the need for many JavaScript solutions:
- Smooth animations → `transition`, `animation`, `@keyframes`
- Sticky headers → `position: sticky`
- Centering anything → Flexbox, Grid
- Dark mode → `prefers-color-scheme` media query
- Custom themes → CSS custom properties (variables)

## Key Concepts

- **The Cascade** — when multiple rules target the same element, the cascade determines which wins, based on specificity, origin, and order
- **Specificity** — inline styles > IDs > classes > elements; understanding this prevents "why isn't my style applying?" issues
- **Box model** — every element is a box: content → padding → border → margin
- **Flexbox** — one-dimensional layout (row or column); excellent for navigation bars, card rows, centering
- **CSS Grid** — two-dimensional layout (rows and columns); perfect for page-level layouts and complex grids
- **Media queries** — apply styles conditionally based on screen size, orientation, or user preferences
- **Custom properties (variables)** — `--primary-color: #22d3ee;` — reusable values across the stylesheet
- **Pseudo-classes & pseudo-elements** — `:hover`, `:focus`, `::before`, `::after` — style states and virtual elements

## Quick Example

```css
/* CSS custom properties for theming */
:root {
  --bg: #0f172a;
  --text: #e2e8f0;
  --accent: #22d3ee;
}

/* Flexbox centering */
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--bg);
  color: var(--text);
}

/* Responsive grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Smooth hover transition */
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}
```

## Related Technologies

HTML · Tailwind CSS · Bootstrap · Sass/SCSS · CSS Modules · Framer Motion
