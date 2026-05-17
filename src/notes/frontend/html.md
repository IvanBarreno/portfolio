# HTML

> The skeleton of every webpage — the language that defines structure and meaning on the web.

## What is it?

HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages. It was created by Tim Berners-Lee in 1991 as part of his proposal for the World Wide Web. HTML is not a programming language — it has no logic, no loops, no variables. It describes *what* things are, not *how* they behave.

The current version, **HTML5**, introduced semantic elements, native video/audio support, the Canvas API, local storage, and many other modern web capabilities.

## Why it matters

HTML is the foundation of everything on the web. CSS makes it beautiful, JavaScript makes it interactive — but without HTML, neither has anything to work with. Understanding semantic HTML is also critical for:

- **Accessibility** — screen readers rely on proper HTML semantics
- **SEO** — search engines parse HTML to understand page content
- **Performance** — well-structured HTML reduces reliance on JavaScript for structure

## Key Concepts

- **Semantic elements** — tags that describe meaning: `<header>`, `<main>`, `<article>`, `<section>`, `<nav>`, `<footer>`, `<aside>` — use these instead of `<div>` everywhere
- **Accessibility (a11y)** — `alt` attributes on images, proper `<label>` for form fields, ARIA roles for dynamic content
- **The DOM (Document Object Model)** — when a browser parses HTML, it builds a tree of nodes in memory; this is what JavaScript and CSS interact with
- **Metadata** — `<meta>` tags in `<head>` control charset, viewport, SEO description, and Open Graph social previews
- **Forms** — `<input>`, `<select>`, `<textarea>`, `<button>` — the built-in form elements with native validation
- **Void elements** — elements with no closing tag: `<br>`, `<img>`, `<input>`, `<meta>`, `<link>`
- **Data attributes** — `data-*` attributes store custom data on elements without hacking existing attributes

## Quick Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Portfolio of a Full Stack Developer" />
    <title>My Portfolio</title>
  </head>
  <body>
    <header>
      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
      </nav>
    </header>

    <main>
      <article>
        <h1>Hello, I'm a developer</h1>
        <p>This is semantic HTML — each element describes its purpose.</p>
      </article>
    </main>

    <footer>
      <p>&copy; 2025</p>
    </footer>
  </body>
</html>
```

## Related Technologies

CSS · JavaScript · ARIA · React (JSX compiles to HTML) · SEO · Accessibility
