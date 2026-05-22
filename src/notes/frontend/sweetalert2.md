# SweetAlert2

> Beautiful, accessible, customizable replacement for the browser's default alert, confirm, and prompt dialogs.

## What is it?

SweetAlert2 is a lightweight JavaScript library that replaces the browser's built-in `alert()`, `confirm()`, and `prompt()` dialogs with fully customizable, animated, accessible modal popups. It requires no external dependencies and works in any framework.

The original SweetAlert was created by Tristan Edwards; SweetAlert2 is an independent fork with better accessibility, more features, and active maintenance.

## Why it matters

The browser's default dialogs (`alert`, `confirm`, `prompt`) are:
- Visually unstyled — they look different on every OS and browser
- Blocking — they freeze the JavaScript thread
- Not customizable — no way to match your app's design
- Inaccessible — poor screen reader support

SweetAlert2 solves all of these problems with a Promise-based API that integrates naturally with async/await.

## Key Concepts

- **Promise-based** — all SweetAlert2 calls return a Promise, making them compatible with `async/await`
- **Result object** — the resolved value tells you what the user did: `{ isConfirmed, isDismissed, isDenied, value }`
- **Toast mode** — lightweight notifications in a corner of the screen
- **Input types** — text, email, password, number, textarea, select, radio, checkbox, file — all built in
- **Custom HTML** — pass arbitrary HTML to the `html` option for complex dialog content
- **Theming** — fully customizable via CSS variables or by overriding classes
- **Queue** — chain multiple dialogs in sequence

## Quick Example

```javascript
import Swal from "sweetalert2";

// Confirmation dialog
const result = await Swal.fire({
  title: "Delete project?",
  text: "This action cannot be undone.",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete",
  cancelButtonText: "Cancel",
  background: "#1e293b",
  color: "#e2e8f0",
  confirmButtonColor: "#ef4444",
});

if (result.isConfirmed) {
  await deleteProject(projectId);
  Swal.fire({
    title: "Deleted",
    icon: "success",
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
  });
}
```

## Related Technologies

JavaScript · React · Bootstrap · Tailwind CSS
