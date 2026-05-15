# PHP

> The language that powers 77% of the web — including WordPress, Facebook (originally), and Wikipedia.

## What is it?

PHP (Hypertext Preprocessor) is a server-side scripting language created by Rasmus Lerdorf in 1994, originally designed specifically for web development. Unlike JavaScript which runs in the browser, PHP runs on the server and generates HTML that is sent to the client.

PHP is embedded directly into HTML files, which made it extremely easy to get started with in the early days of the web. Despite its reputation for messy legacy code, modern PHP (7.x, 8.x) is a completely different language from the PHP of 2005 — it has strict types, named arguments, match expressions, fibers, and strong OOP support.

## Why it matters

- **Market share** — PHP runs on roughly 77% of all websites with a known server-side language (source: W3Techs)
- **WordPress** — the CMS that powers ~43% of all websites is built in PHP
- **Laravel** — one of the most developer-friendly web frameworks ever built runs on PHP
- **Hosting** — almost every cheap shared hosting provider supports PHP out of the box, making it the most accessible server-side option
- **Mature ecosystem** — Composer (PHP's package manager) and Packagist host over 350,000 packages

## Key Concepts

- **Server-side execution** — PHP code runs on the server, the browser only receives the HTML output
- **Superglobals** — built-in variables like `$_GET`, `$_POST`, `$_SESSION`, `$_COOKIE` that hold request data
- **Composer** — PHP's dependency manager, similar to npm for JavaScript
- **PSR standards** — PHP Standards Recommendations define coding style, autoloading, and interface contracts
- **PHP 8 features** — named arguments, union types, attributes, fibers (lightweight coroutines), match expressions, nullsafe operator

## Quick Example

```php
<?php
// PHP 8 features — named arguments, match, nullsafe operator

// Match expression (cleaner than switch)
$status = 404;
$message = match($status) {
    200 => "OK",
    404 => "Not Found",
    500 => "Server Error",
    default => "Unknown",
};

// Nullsafe operator — no more nested null checks
$city = $user?->getAddress()?->getCity();

// Named arguments — order doesn't matter
function createUser(string $name, int $age, string $role = "user") { ... }
createUser(age: 25, name: "Alice"); // works
?>
```

## Related Technologies

Laravel · Composer · MySQL · WordPress · Apache · Nginx
