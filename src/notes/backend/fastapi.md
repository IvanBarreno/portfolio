# FastAPI

> The modern Python API framework — fast to run, fast to write, and fast to validate.

## What is it?

FastAPI is a modern Python web framework created by Sebastián Ramírez and released in 2018. It is built on top of **Starlette** (ASGI framework) and **Pydantic** (data validation), and designed from the ground up for building APIs with Python type hints.

FastAPI is one of the fastest Python frameworks available, benchmarking close to Node.js and Go — comparable to Flask and Django in developer experience, but dramatically faster at runtime due to its async-first architecture.

## Why it matters

FastAPI brought several ideas together in one framework:

- **Automatic OpenAPI/Swagger documentation** — define your models with Python types and FastAPI generates interactive API docs at `/docs` automatically
- **Data validation via Pydantic** — request bodies are validated and parsed automatically; no manual validation code
- **Async by default** — built on ASGI (Asynchronous Server Gateway Interface), supporting `async/await` natively
- **Type safety** — Python type hints drive both validation and editor autocompletion

FastAPI has become the go-to choice for ML model serving, data science APIs, and modern Python backends.

## Key Concepts

- **Path operations** — `@app.get()`, `@app.post()` decorators that define routes and their HTTP methods
- **Pydantic models** — Python classes with type annotations that serve as request/response schemas; automatic validation
- **Dependency injection** — `Depends()` injects shared logic (database sessions, auth, config) into route functions
- **ASGI** — FastAPI is an ASGI app (vs Flask/Django's WSGI); supports WebSockets, server-sent events, and true async I/O
- **Path, Query, and Body parameters** — FastAPI infers parameter location from type annotations
- **Response models** — declare the response schema with `response_model=`; FastAPI filters the output automatically
- **Background tasks** — run non-blocking work after returning a response (sending emails, logging)

## Quick Example

```python
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel

app = FastAPI()

class ProjectCreate(BaseModel):
    title: str
    description: str
    tags: list[str] = []

class ProjectResponse(ProjectCreate):
    id: int

@app.post("/projects", response_model=ProjectResponse, status_code=201)
async def create_project(project: ProjectCreate, db: Session = Depends(get_db)):
    # project is already validated and typed — no manual validation needed
    db_project = ProjectModel(**project.dict())
    db.add(db_project)
    db.commit()
    return db_project

# Docs available at http://localhost:8000/docs (Swagger UI) automatically
```

## Related Technologies

Python · Pydantic · SQLAlchemy · Uvicorn · Docker · JWT · OpenAPI · Starlette
