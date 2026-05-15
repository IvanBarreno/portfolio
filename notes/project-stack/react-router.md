# React Router

> The standard routing library for React — map URLs to components and navigate without page reloads.

## What is it?

React Router is the most widely used routing library for React applications, created by Ryan Florence and Michael Jackson, first released in 2014. It enables client-side routing — navigating between views in a React app without making a full HTTP request to the server.

React Router v6 (released 2021) was a major redesign that improved on v5 with better nested routing, relative paths, and a hooks-first API.

## Why it matters

React renders a single `index.html` page — there is no server generating different HTML for `/about` vs `/projects`. React Router intercepts browser navigation events and swaps out which React components are rendered, while updating the URL in the address bar.

This gives users:
- **Bookmarkable URLs** — `/projects` and `/notes/jwt` are real addresses
- **Browser history** — back/forward buttons work as expected
- **Deep links** — someone can share a link to a specific page
- **SEO-friendly URLs** — each page has a distinct URL (with proper server configuration)

## Key Concepts

- **`<BrowserRouter>`** — the top-level context provider; wraps the entire app; uses the HTML5 History API
- **`<Routes>` + `<Route>`** — defines the mapping between URL paths and components
- **`<Outlet>`** — renders the matched child route; enables nested layouts
- **`<Link>`** — replaces `<a href>` for internal navigation; no page reload
- **`<NavLink>`** — like `<Link>` but adds an `active` class when the URL matches; perfect for navigation menus
- **`useNavigate()`** — programmatic navigation: `navigate("/projects")` or `navigate(-1)` (go back)
- **`useParams()`** — access URL parameters: `const { slug } = useParams()` for `/notes/:slug`
- **`useLocation()`** — access the current URL, pathname, search params, and state
- **Nested routes** — a route renders a parent layout; child routes render inside the `<Outlet>`

## Quick Example

```tsx
// App.tsx — router setup
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root layout with Navbar and Footer */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="notes" element={<Notes />} />
          <Route path="notes/:slug" element={<NoteDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// RootLayout.tsx — renders Navbar, then child page, then Footer
function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* child route renders here */}
      </main>
      <Footer />
    </>
  );
}

// Navigate programmatically
const navigate = useNavigate();
navigate(`/notes/${note.slug}`);
```

## Related Technologies

React · TypeScript · Vite · TanStack Router (alternative) · Next.js (has built-in routing)
