# Django

> The "batteries-included" Python web framework — everything you need to build a web app, in one package.

## What is it?

Django is a high-level Python web framework created in 2003 by Adrian Holovaty and Simon Willison at a newspaper company (hence its strong support for content-heavy sites). It was released publicly in 2005 under the slogan **"The web framework for perfectionists with deadlines."**

Django follows the **Model-View-Template (MVT)** pattern and includes an ORM, authentication system, admin interface, form handling, URL routing, and templating engine — all built in, with sensible defaults.

## Why it matters

Django's "batteries-included" philosophy means you can go from zero to a working web application with user authentication, a database, and an admin panel in under an hour. This makes it exceptional for:

- **Rapid prototyping** — the admin interface alone saves days of work
- **Content-heavy sites** — news sites, blogs, social platforms
- **REST APIs** — Django REST Framework (DRF) is one of the best API toolkits available
- **Data-backed applications** — the ORM handles complex queries without raw SQL

## Key Concepts

- **MVT pattern** — Model (data layer, ORM), View (business logic, the equivalent of a controller), Template (HTML rendering)
- **ORM (Object-Relational Mapper)** — define Python classes and Django handles the SQL; `User.objects.filter(age__gte=18)`
- **Migrations** — `makemigrations` + `migrate` track database schema changes as version-controlled files
- **Django Admin** — auto-generated admin interface from your models; register a model and get full CRUD for free
- **URL dispatcher** — `urls.py` maps URL patterns to views
- **Middleware** — request/response processing pipeline (similar to Express middleware)
- **Django REST Framework (DRF)** — the standard library for building REST APIs with Django; adds serializers, viewsets, authentication, and browsable API
- **`settings.py`** — central configuration file for the entire project

## Quick Example

```python
# models.py — Django ORM model
from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    tags = models.JSONField(default=list)

    def __str__(self):
        return self.title

# views.py — Django REST Framework viewset
from rest_framework import viewsets
from .models import Project
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by("-created_at")
    serializer_class = ProjectSerializer
```

## Related Technologies

Python · Django REST Framework · PostgreSQL · Celery · Redis · Docker · JWT
