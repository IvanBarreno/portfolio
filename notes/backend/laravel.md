# Laravel

> The PHP framework for web artisans — elegant syntax, powerful tools, and a world-class ecosystem.

## What is it?

Laravel is a PHP web framework created by Taylor Otwell and released in 2011. It follows the **Model-View-Controller (MVC)** pattern and provides tools for routing, authentication, ORM (Eloquent), migrations, queuing, caching, mailing, testing, and much more — all with an expressive, elegant API.

Laravel transformed the PHP ecosystem. Before it, PHP development was often messy, inconsistent, and painful. Laravel showed that PHP could be as pleasant to work with as Ruby on Rails or Django.

## Why it matters

Laravel is consistently one of the most popular backend frameworks in the world. It combines:

- **Developer happiness** — the most expressive, readable API in PHP
- **Full-stack capability** — REST APIs, server-rendered UIs (Blade), real-time (Laravel Echo + Pusher), background jobs (Queues)
- **Ecosystem depth** — Laravel Sanctum (API auth), Passport (OAuth), Breeze/Jetstream (authentication scaffolding), Horizon (queue monitoring), Telescope (debugging)
- **Artisan CLI** — `php artisan make:model`, `make:controller`, `make:migration` — scaffolding at your fingertips

## Key Concepts

- **Eloquent ORM** — ActiveRecord ORM where each table has a corresponding Model class; `User::where('age', '>=', 18)->get()`
- **Migrations** — database schema version control; `Schema::create`, `Schema::table` define changes as code
- **Blade templates** — Laravel's templating engine; `@foreach`, `@if`, `{{ $variable }}` — compiled to PHP and cached
- **Artisan** — the CLI tool for generating files, running migrations, clearing caches, and running commands
- **Service container** — Laravel's powerful DI container; binds interfaces to implementations, resolved automatically
- **Middleware** — filter HTTP requests (authentication, rate limiting, CORS)
- **Queues & Jobs** — offload slow tasks (emails, image processing) to background workers
- **Collections** — a powerful array wrapper with 100+ chainable methods: `->filter()`, `->map()`, `->groupBy()`

## Quick Example

```php
// Eloquent relationships
class Project extends Model {
    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function tags(): BelongsToMany {
        return $this->belongsToMany(Tag::class);
    }
}

// Expressive queries with Eloquent
$projects = Project::with('tags')
    ->where('user_id', auth()->id())
    ->orderByDesc('created_at')
    ->paginate(10);

// Route definition
Route::apiResource('projects', ProjectController::class)->middleware('auth:sanctum');
```

## Related Technologies

PHP · MySQL · Composer · Docker · JWT · Redis · Vue.js · Inertia.js
