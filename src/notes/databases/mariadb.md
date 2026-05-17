# MariaDB

> A community-driven, fully open-source fork of MySQL — same SQL, more features, no Oracle.

## What is it?

MariaDB is a community-developed relational database system created in 2009 by Michael "Monty" Widenius — the original creator of MySQL — after Oracle acquired MySQL as part of the Sun Microsystems deal. The name comes from his daughter Maria (MySQL was named after his daughter My).

MariaDB is a **drop-in replacement for MySQL**: same SQL syntax, same client libraries, same configuration format. Applications built for MySQL run on MariaDB without modification. MariaDB is the default MySQL replacement in most Linux distributions (Debian, Fedora, Arch Linux).

## Why it matters

MariaDB's creation was driven by concern that Oracle might commercialize or restrict MySQL. The fork kept the database fully open-source under the GPL and pushed development forward faster than MySQL.

Advantages over MySQL:
- **Fully open-source** — no proprietary plugins or features locked behind a commercial license
- **More storage engines** — Aria, ColumnStore, Spider, TokuDB, and more
- **Better performance** in many benchmarks for read-heavy workloads
- **More SQL features** — window functions, JSON support, and temporal tables were added earlier than MySQL
- **Active community** — faster release cycle, more responsive to community needs

## Key Concepts

Since MariaDB is a MySQL fork, all MySQL concepts apply directly:

- **GTID replication** — Global Transaction Identifiers make replication more reliable and easier to manage
- **Galera Cluster** — MariaDB's built-in multi-master synchronous replication for high availability
- **Aria storage engine** — a crash-safe replacement for MyISAM, used for internal tables
- **ColumnStore** — a columnar storage engine for analytical workloads (OLAP), runs alongside InnoDB for OLTP
- **Binary logs (binlog)** — record all changes to the database; used for replication and point-in-time recovery
- **`SHOW ENGINE INNODB STATUS`** — useful diagnostic for understanding lock contention and transaction state

## Quick Example

```sql
-- MariaDB supports the same SQL as MySQL
-- Example: window function (available in MariaDB 10.2+)
SELECT
    title,
    created_at,
    ROW_NUMBER() OVER (ORDER BY created_at DESC) AS rn,
    COUNT(*) OVER () AS total_projects
FROM projects;

-- JSON support
SELECT title, JSON_EXTRACT(metadata, '$.category') AS category
FROM projects
WHERE JSON_CONTAINS(metadata, '"web"', '$.tags');
```

## Related Technologies

MySQL · PostgreSQL · Docker · Laravel · phpMyAdmin · Galera Cluster
