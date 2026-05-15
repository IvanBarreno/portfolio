# SQLite

> The most widely deployed database in the world — serverless, zero-configuration, and contained in a single file.

## What is it?

SQLite is a self-contained, serverless, zero-configuration, transactional SQL database engine created by D. Richard Hipp in 2000. Unlike MySQL or PostgreSQL, SQLite does not run as a separate process — it is a **library** that your application links directly. The entire database lives in a single `.db` file on disk.

SQLite is shipped in every iOS and Android device, every Chrome and Firefox browser, every Python installation, and most operating systems. It is the most deployed piece of software in the world.

## Why it matters

SQLite's serverless nature makes it ideal for situations where you don't want the overhead of running a database server:

- **Development and testing** — run tests against a real SQL database with no setup
- **Mobile apps** — the default database for iOS and Android apps
- **Desktop apps** — Electron apps (VS Code, Discord, Slack) use SQLite for local storage
- **Embedded systems** — runs on everything from Raspberry Pi to smartwatches
- **Single-user applications** — tools, utilities, local data stores
- **Prototyping** — get a working SQL database with zero configuration

## Key Concepts

- **Serverless** — no server process; the library reads/writes directly to a file
- **Single file** — the entire database (schema + data) is stored in one `.db` or `.sqlite` file; easy to copy, backup, or version
- **ACID compliant** — full transaction support with rollback journaling
- **Dynamic typing** — SQLite's type system is more flexible than other SQL databases (a column declared as `INTEGER` can store text)
- **WAL mode (Write-Ahead Logging)** — improves concurrent read performance; `PRAGMA journal_mode=WAL`
- **In-memory databases** — `sqlite3:///` or `:memory:` creates a database entirely in RAM; perfect for tests
- **Limitations** — not suitable for high-concurrency write-heavy workloads; single writer at a time

## Quick Example

```python
# Using SQLite with Python's built-in sqlite3 module
import sqlite3

conn = sqlite3.connect("portfolio.db")  # creates file if not exists
cursor = conn.cursor()

cursor.execute("""
    CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        created_at TEXT DEFAULT (datetime('now'))
    )
""")

cursor.execute(
    "INSERT INTO projects (title, description) VALUES (?, ?)",
    ("My Portfolio", "A personal portfolio website")  # parameterized — safe from SQL injection
)

conn.commit()
```

## Related Technologies

Python · SQLAlchemy · Django (default test DB) · Flask · Prisma · Docker
