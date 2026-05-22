# Flask

> A lightweight Python microframework — start with just what you need and add only what you use.

## What is it?

Flask is a minimalist Python web framework created by Armin Ronacher and released in 2010. It was originally built as an April Fool's joke — a "microframework" — but turned out to be so useful that it became one of the most popular Python frameworks.

Unlike Django, Flask provides only the essentials: routing, request/response handling, and a templating engine (Jinja2). Everything else — ORM, authentication, form validation, caching — is added through extensions or custom code.

## Why it matters

Flask's simplicity makes it perfect for:
- **Microservices** — a single-purpose service that does one thing
- **REST APIs** — especially with Flask-RESTful or Flask-RESTX
- **Machine learning model serving** — many ML models are deployed as Flask APIs
- **Prototypes** — get an API running in under 20 lines
- **Learning** — the codebase is small enough to understand entirely, making it great for learning how web frameworks work

## Key Concepts

- **Application factory pattern** — `create_app()` function that initializes the app; allows multiple configurations (testing, production)
- **Blueprints** — modular components that register routes and logic; equivalent to Express Routers
- **Request context** — Flask's `request`, `g`, and `current_app` objects are context-local; they are only valid during a request
- **`@app.route`** — decorator that binds a URL path to a function
- **Jinja2 templates** — Flask's built-in templating engine; `{{ variable }}` and `{% for item in list %}`
- **Flask extensions** — Flask-SQLAlchemy (ORM), Flask-JWT-Extended (JWT auth), Flask-Migrate (migrations), Flask-CORS (cross-origin)
- **WSGI** — Flask is a WSGI app; deployed with Gunicorn or uWSGI in production

## Quick Example

```python
from flask import Flask, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity

app = Flask(__name__)

@app.route("/api/projects", methods=["GET"])
def get_projects():
    projects = Project.query.all()
    return jsonify([p.to_dict() for p in projects])

@app.route("/api/projects", methods=["POST"])
@jwt_required()  # protected route
def create_project():
    data = request.get_json()
    project = Project(title=data["title"], description=data["description"])
    db.session.add(project)
    db.session.commit()
    return jsonify(project.to_dict()), 201
```

## Related Technologies

Python · Django · FastAPI · SQLAlchemy · Gunicorn · Docker · JWT
