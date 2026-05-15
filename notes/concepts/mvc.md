# MVC (Model-View-Controller)

> A design pattern that separates an application into three interconnected components.

## What is it?

MVC (Model-View-Controller) is a software architectural pattern that divides an application into three distinct layers, each with a clear responsibility. It was first described by Trygve Reenskaug in the 1970s for Smalltalk and has since become the dominant pattern in web frameworks worldwide.

Virtually every major web framework implements MVC or a close variant: Laravel, Django, Ruby on Rails, Spring MVC, Angular (MVVM), ASP.NET MVC.

## The Three Layers

### Model
The **data layer** — represents the application's data and business rules.
- Interacts with the database (queries, saves, updates)
- Contains validation logic and business rules
- Is completely independent of the UI — it doesn't know about views or controllers
- In an ORM context, Models are typically class representations of database tables

### View
The **presentation layer** — what the user sees.
- Renders data received from the controller
- Contains only display logic (templates, HTML, component markup)
- No business logic should live here
- In REST APIs, the "view" is often the JSON serializer/response

### Controller
The **coordination layer** — the intermediary between Model and View.
- Receives user input (HTTP requests)
- Calls the appropriate Model operations
- Passes data to the View for rendering
- Contains no business logic itself — it delegates to Models/Services

## Why it matters

MVC separates concerns so each layer can be developed, tested, and modified independently:
- Change the database schema → update the Model, controller and view are unaffected
- Redesign the UI → update the View, no business logic changes
- Change how a request is handled → update the Controller

This separation makes codebases maintainable at scale and enables teams to work in parallel.

## The Request Flow

```
User makes HTTP request
        ↓
    Router → Controller
        ↓
    Controller → Model (fetch/save data)
        ↓
    Controller → View (pass data to template)
        ↓
    View renders → HTTP Response → User
```

## Quick Example (Laravel MVC)

```php
// Model — data layer
class Project extends Model {
    protected $fillable = ['title', 'description', 'user_id'];

    public function isPublished(): bool {
        return $this->status === 'published';
    }
}

// Controller — coordination layer
class ProjectController extends Controller {
    public function index() {
        $projects = Project::where('status', 'published')
                           ->orderByDesc('created_at')
                           ->get();
        return view('projects.index', compact('projects')); // pass to view
    }
}

// View (Blade template) — presentation layer
@foreach($projects as $project)
    <div class="card">
        <h2>{{ $project->title }}</h2>
    </div>
@endforeach
```

## Variations

- **MVP (Model-View-Presenter)** — the Presenter handles all UI logic; the View is passive
- **MVVM (Model-View-ViewModel)** — the ViewModel exposes data streams that the View binds to; used in Angular, Vue, WPF
- **MVT (Model-View-Template)** — Django's variant; the "View" is more like a controller; the template is the actual view

## Related Technologies

Laravel · Django · Spring MVC · Angular · Ruby on Rails · OOP · SOLID
