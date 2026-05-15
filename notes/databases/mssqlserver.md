# MS SQL Server

> Microsoft's enterprise relational database — the backbone of corporate data infrastructure for 30+ years.

## What is it?

Microsoft SQL Server (MSSQL) is a relational database management system developed by Microsoft, first released in 1989. It is built on SQL with Microsoft's proprietary extensions called **T-SQL (Transact-SQL)**, which add procedural programming constructs: variables, conditionals, loops, stored procedures, and triggers.

SQL Server is dominant in corporate and enterprise environments, especially in Microsoft-heavy technology stacks (Windows Server, .NET, Azure).

## Why it matters

SQL Server offers enterprise features that go beyond basic database storage:

- **SQL Server Integration Services (SSIS)** — built-in ETL tool for data migration and transformation
- **SQL Server Reporting Services (SSRS)** — report generation and distribution
- **SQL Server Analysis Services (SSAS)** — OLAP cubes and data mining
- **Always On Availability Groups** — high-availability and disaster recovery
- **In-memory OLTP** — Hekaton engine for ultra-fast transaction processing
- **Azure SQL** — SQL Server as a fully managed cloud service on Azure

Many large organizations standardize on SQL Server because of its integration with the Microsoft ecosystem (Active Directory, Power BI, Azure).

## Key Concepts

- **T-SQL** — Microsoft's SQL dialect; adds `TOP`, `BEGIN...END`, `TRY...CATCH`, `MERGE`, `OUTPUT` clauses
- **Stored procedures** — precompiled SQL code stored in the database; called with `EXEC`
- **Triggers** — code that automatically fires on `INSERT`, `UPDATE`, or `DELETE` events
- **Views** — virtual tables defined by a `SELECT` query; simplify complex queries
- **CTEs (Common Table Expressions)** — `WITH` clause that defines temporary named result sets; great for recursive queries
- **Execution plan** — a visual tree showing how SQL Server will execute a query; essential for performance tuning
- **Schemas** — namespaces within a database: `dbo.users`, `hr.employees`
- **SQL Server Management Studio (SSMS)** — the primary GUI tool for administering SQL Server

## Quick Example

```sql
-- T-SQL: CTE + window function for running totals
WITH monthly_projects AS (
    SELECT
        FORMAT(created_at, 'yyyy-MM') AS month,
        COUNT(*) AS project_count
    FROM projects
    GROUP BY FORMAT(created_at, 'yyyy-MM')
)
SELECT
    month,
    project_count,
    SUM(project_count) OVER (ORDER BY month) AS running_total
FROM monthly_projects
ORDER BY month;

-- Stored procedure with error handling
CREATE PROCEDURE CreateProject
    @Title NVARCHAR(200),
    @UserId INT
AS
BEGIN
    BEGIN TRY
        INSERT INTO projects (title, user_id) VALUES (@Title, @UserId);
    END TRY
    BEGIN CATCH
        THROW;
    END CATCH
END;
```

## Related Technologies

Azure SQL · Power BI · SSIS · Entity Framework (.NET) · SSMS · T-SQL · C#
