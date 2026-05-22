# Tailwind CSS

> A utility-first CSS framework — compose designs directly in your HTML/JSX without leaving your markup.

## What is it?

Tailwind CSS is a utility-first CSS framework created by Adam Wathan and released in 2017. Instead of providing pre-built components like Bootstrap, Tailwind provides thousands of small, single-purpose utility classes — `flex`, `pt-4`, `text-gray-900`, `rounded-lg`, `hover:bg-blue-500` — that you compose directly in your markup.

The result looks different from traditional CSS: you write `className="flex items-center gap-4 p-6 bg-slate-800 rounded-xl hover:bg-slate-700"` instead of creating a custom `.card` class in a CSS file.

## Why it matters

The traditional CSS workflow creates a disconnect: you write HTML, then jump to a CSS file, name a class, write properties, and jump back. For every element. Over time this creates bloated, duplicated CSS that nobody wants to touch.

Tailwind's utility approach:
- **No naming paralysis** — you never have to invent class names like `.card-wrapper-inner-content`
- **No CSS growth** — unused utilities are purged at build time; final CSS bundle is tiny (typically 5–15 KB)
- **Consistent design system** — spacing, colors, fonts, and breakpoints are all defined in a design scale; no magic numbers
- **Co-location** — styles live next to the markup they style; no searching across files
- **Responsive by default** — `md:flex`, `lg:grid`, `sm:hidden` — responsive variants for every utility

## Key Concepts

- **Utility classes** — each class does one thing: `text-center`, `font-bold`, `w-full`, `opacity-50`
- **Responsive prefixes** — `sm:`, `md:`, `lg:`, `xl:`, `2xl:` apply a utility at a specific breakpoint
- **State variants** — `hover:`, `focus:`, `active:`, `disabled:`, `group-hover:` apply utilities on state
- **Dark mode** — `dark:` prefix applies utilities when dark mode is active: `dark:bg-slate-900`
- **`tailwind.config.ts`** — customize the design system: colors, fonts, spacing, and add custom utilities
- **`@apply`** — extract repeated utility combinations into a CSS class (use sparingly)
- **JIT (Just-In-Time) engine** — Tailwind generates CSS on-demand as it scans your code; no unused classes, supports arbitrary values like `w-[347px]`

## Quick Example

```tsx
// A card component using only Tailwind utilities
function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <div className="group bg-slate-800 border border-slate-700 rounded-xl p-6
                    hover:border-cyan-500/50 hover:bg-slate-750
                    transition-all duration-300">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-4 line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag}
                className="text-xs px-2 py-1 rounded-full
                           bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
```

## Related Technologies

CSS · React · Vite · Bootstrap (predecessor concept) · shadcn/ui · Headless UI · PostCSS
