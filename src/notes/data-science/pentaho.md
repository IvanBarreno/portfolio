# Pentaho

> An open-source business intelligence and ETL platform — visual data integration without writing code.

## What is it?

Pentaho is an open-source business intelligence suite developed by Pentaho Corporation (acquired by Hitachi Vantara in 2015). It provides a comprehensive set of tools for ETL (data integration), reporting, OLAP analysis, dashboards, and data mining.

The two core components are:
- **Pentaho Data Integration (PDI)** — also called **Kettle** — the ETL tool; visual pipeline builder
- **Pentaho Business Analytics** — reporting, dashboards, and OLAP (now largely replaced by modern BI tools)

## Why it matters

Pentaho PDI (Kettle) allows you to build complex data pipelines visually without writing code. A transformation is built by dragging and dropping **steps** onto a canvas, connecting them with hops, and configuring each step's behavior.

This makes ETL accessible to people who aren't programmers and dramatically speeds up development for those who are. A pipeline that would take days to build in custom code can be built in hours in Kettle.

Pentaho is widely used in:
- **Enterprise data warehousing** — moving data from operational systems to DWHs
- **Data migration** — migrating legacy databases to new systems
- **Reporting pipelines** — preparing data for BI tools
- **Data quality** — cleansing and standardizing data from multiple sources

## Key Concepts

- **Transformation** — the basic unit; a data flow from input step(s) through processing steps to output step(s)
- **Job** — an orchestration of multiple transformations and tasks; controls execution order, error handling, and scheduling
- **Step** — a single operation in a transformation (Table Input, Sort Rows, Join, Excel Output, HTTP Client, etc.)
- **Hop** — a connection between steps that passes rows of data
- **Spoon** — the graphical designer IDE for building transformations and jobs
- **Pan** — the command-line tool for executing transformations
- **Kitchen** — the command-line tool for executing jobs
- **Metadata Injection** — dynamically configure a transformation at runtime from a parameter
- **Carte** — the PDI server for remote execution and scheduling

## Transformation Flow Example

```
[Table Input (MySQL)] 
        ↓
[Filter Rows: status = 'active']
        ↓
[Add Sequence: row_number]
        ↓
[Lookup: join with reference table]
        ↓
[Calculator: compute margin %]
        ↓
[Sort Rows: by date DESC]
        ↓
[Table Output (PostgreSQL DWH)]
```

## Related Technologies

ETL · MySQL · PostgreSQL · SQL Server · Apache Hop (spiritual successor) · Power BI · Talend
