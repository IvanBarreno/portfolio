# Framer Motion

> A production-ready animation library for React — declarative, powerful, and easy.

## What is it?

Framer Motion is an open-source animation library for React created by Framer (the design tool company), released in 2019. It provides a declarative API for animations and gestures that integrates naturally with React's component model.

Instead of writing keyframes and managing animation states manually, Framer Motion lets you describe *what* you want animated, and handles the *how* — interpolation, physics-based spring animations, and hardware acceleration.

## Why it matters

CSS animations and transitions handle simple cases. But for complex, interactive animations — page transitions, drag-and-drop, coordinated multi-element sequences, exit animations — CSS becomes a maintenance nightmare.

Framer Motion solves this with:
- **Exit animations** — React doesn't give elements a chance to animate before removal; Framer Motion's `AnimatePresence` handles this elegantly
- **Shared layout animations** — elements that move between positions animate smoothly with `layoutId`
- **Orchestration** — stagger children, sequence animations, delay based on conditions
- **Gesture-driven animations** — drag with physics, tap, hover — all with simple props
- **Scroll-linked animations** — animate based on scroll position

## Key Concepts

- **`motion.div`** — a supercharged HTML element; any HTML/SVG element has a `motion.` equivalent with animation props
- **`initial`** — the starting state of the animation
- **`animate`** — the target state the element animates to
- **`exit`** — the animation to play when the element is removed from the DOM (requires `AnimatePresence`)
- **`transition`** — controls how the animation plays: duration, easing, spring physics, delay
- **`variants`** — named animation states defined outside the JSX; useful for complex orchestration
- **`AnimatePresence`** — wrapper that enables exit animations for components being removed
- **`whileHover` / `whileTap`** — animate on hover or tap gesture
- **`useScroll` / `useTransform`** — create scroll-linked animations

## Quick Example

```tsx
import { motion, AnimatePresence } from "framer-motion";

// Page transition
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

// Staggered list — children animate in sequence
const containerVariants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

function SkillList({ skills }: { skills: string[] }) {
  return (
    <motion.ul variants={containerVariants} initial="initial" animate="animate">
      {skills.map((skill) => (
        <motion.li key={skill} variants={itemVariants}>
          {skill}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

## Related Technologies

React · TypeScript · CSS animations · GSAP (alternative) · React Spring (alternative)
