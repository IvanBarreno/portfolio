# MySQL

> The world's most popular open-source relational database — the backbone of countless web applications.

## What is it?

MySQL is an open-source relational database management system (RDBMS) originally developed by MySQL AB and released in 1995. It is now owned by Oracle Corporation. MySQL uses **Structured Query Language (SQL)** to create, read, update, and delete data stored in tables with predefined schemas.

MySQL is the "M" in the LAMP stack (Linux, Apache, MySQL, PHP) and has been the default database for web applications for over two decades.

## Why it matters

MySQL combines:
- **Reliability** — used by Facebook, Twitter, YouTube, Wikipedia
- **Performance** — optimized for read-heavy web workloads
- **Ubiquity** — available on every cloud platform, every hosting provider
- **Mature tooling** — MySQL Workbench, phpMyAdmin, extensive documentation

It is the first relational database most web developers learn, and understanding MySQL's concepts translates directly to every other relational database (PostgreSQL, MariaDB, MS SQL Server, SQLite).

## Key Concepts

- **Tables, rows, columns** — data is stored in tables; rows are records, columns are fields with defined types
- **Primary key** — a unique identifier for each row; typically an auto-increment integer or UUID
- **Foreign key** — a column that references the primary key of another table; enforces referential integrity
- **Indexes** — data structures that speed up queries at the cost of write performance and storage
- **Transactions** — a group of operations that succeed or fail together (ACID); `BEGIN`, `COMMIT`, `ROLLBACK`
- **ACID** — Atomicity, Consistency, Isolation, Durability — the guarantees a reliable database provides
- **Joins** — combine rows from multiple tables: `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`
- **Normalization** — organizing tables to reduce redundancy and improve data integrity
- **InnoDB** — MySQL's default storage engine; supports transactions and foreign keys

## Quick Example

```sql
-- Create a normalized schema
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- JOIN query with aggregation
SELECT u.name, COUNT(p.id) AS project_count
FROM users u
LEFT JOIN projects p ON u.id = p.user_id
GROUP BY u.id
ORDER BY project_count DESC;
```

## Related Technologies

MariaDB · PostgreSQL · SQLite · Laravel (Eloquent) · Django ORM · Docker · phpMyAdmin
