# Python

> A general-purpose, high-level language built for readability and rapid development.

## What is it?

Python is an interpreted, dynamically typed programming language created by Guido van Rossum in 1991. Its philosophy emphasizes code readability — the language uses indentation instead of braces, which forces a clean, consistent style. Python runs on an interpreter, meaning you can execute code line by line without a compilation step.

It has become one of the most widely used languages in the world, powering everything from small automation scripts to large-scale machine learning systems.

## Why it matters

Python's strength is its versatility. The same language is used across radically different domains:

- **Web development** — Django, Flask, FastAPI
- **Data science & ML** — Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch
- **Automation & scripting** — file manipulation, web scraping, task automation
- **APIs** — building REST services quickly with minimal boilerplate
- **DevOps** — automation scripts, tooling, infrastructure management

Its extensive standard library and the PyPI ecosystem (over 500,000 packages) mean there is almost always a ready-made solution for any problem.

## Key Concepts

- **Interpreted** — code is executed line by line, no compile step needed
- **Dynamically typed** — variable types are determined at runtime, not declared in advance
- **Duck typing** — "if it walks like a duck and quacks like a duck, it's a duck" — objects are used based on their capabilities, not their type
- **GIL (Global Interpreter Lock)** — a mutex that allows only one thread to execute Python bytecode at a time; relevant for CPU-bound multithreading
- **Virtual environments** — isolated environments (`venv`, `conda`) that keep project dependencies separate
- **PEP 8** — the official style guide for Python code

## Quick Example

```python
# List comprehension — a Pythonic way to build lists
squares = [x**2 for x in range(10) if x % 2 == 0]
# [0, 4, 16, 36, 64]

# Decorators — a core Python pattern used heavily in frameworks
def log(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@log
def greet(name):
    return f"Hello, {name}"
```

## Related Technologies

Django · Flask · FastAPI · Pandas · NumPy · Scikit-learn · TensorFlow · PyTorch · Jupyter Notebook
