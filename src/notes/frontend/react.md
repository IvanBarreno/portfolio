# React

> A JavaScript library for building user interfaces through composable, reusable components.

## What is it?

React is an open-source JavaScript library created by Facebook (Meta) and released in 2013. It introduced a component-based model for building UIs and a concept called the **Virtual DOM** that made UI updates efficient and predictable.

React is not a full framework — it handles the view layer only. Routing, state management, data fetching, and other concerns are handled by the ecosystem around it (React Router, Zustand, TanStack Query, etc.).

## Why it matters

React fundamentally changed how frontend development works. Before React, developers manipulated the DOM directly with jQuery, which quickly became unmanageable at scale. React's declarative model — *describe what the UI should look like, not how to update it* — made complex UIs maintainable.

Today React is the most widely used frontend library, used by Meta, Netflix, Airbnb, Twitter, and millions of other projects.

## Key Concepts

- **Components** — the building blocks of a React app; functions (or classes) that return JSX describing a piece of the UI
- **JSX** — a syntax extension that lets you write HTML-like markup inside JavaScript
- **Virtual DOM** — React keeps a lightweight copy of the DOM in memory; when state changes, it diffs the old and new virtual DOM and applies only the minimal real DOM updates
- **Props** — data passed from a parent component to a child; read-only
- **State** — data that a component manages internally; when state changes, the component re-renders
- **Hooks** — functions prefixed with `use` that let functional components tap into React features (`useState`, `useEffect`, `useContext`, `useRef`, etc.)
- **Reconciliation** — the algorithm React uses to diff component trees and decide what to update
- **React 18** — concurrent mode, automatic batching, `useTransition`, Suspense improvements

## Quick Example

```tsx
import { useState, useEffect } from "react";

interface Quote {
  content: string;
  author: string;
}

function QuoteCard() {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data));
  }, []); // [] = run once on mount

  if (!quote) return <p>Loading...</p>;

  return (
    <blockquote>
      <p>{quote.content}</p>
      <footer>— {quote.author}</footer>
    </blockquote>
  );
}
```

## Related Technologies

TypeScript · React Router · Vite · Framer Motion · TanStack Query · Zustand · Next.js
