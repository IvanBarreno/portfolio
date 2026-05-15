# ETL (Extract, Transform, Load)

> The process of moving data from where it lives to where it's needed — in a usable form.

## What is it?

ETL stands for **Extract, Transform, Load** — the three phases of a data pipeline that moves data from one or more source systems into a target destination (data warehouse, database, data lake, or analytics platform).

ETL is a foundational concept in data engineering and business intelligence. Every organization that wants to analyze its data across multiple systems needs ETL pipelines.

## The Three Phases

### Extract
Retrieve data from source systems. Sources can be:
- Relational databases (MySQL, PostgreSQL, SQL Server)
- APIs (REST, SOAP)
- Flat files (CSV, Excel, JSON, XML)
- Cloud storage (S3, Azure Blob)
- Streaming systems (Kafka, Kinesis)
- Web scraping

Extraction can be **full** (pull everything) or **incremental** (pull only what changed since the last run, based on timestamps or change logs).

### Transform
Clean, reshape, and enrich the data:
- **Cleaning** — fix nulls, remove duplicates, standardize formats
- **Type conversion** — parse dates, cast strings to numbers
- **Normalization/Denormalization** — restructure for the target schema
- **Aggregation** — sum, count, average by dimensions
- **Enrichment** — join with reference data (country codes, product names)
- **Business logic** — apply rules: calculate margins, categorize customers

### Load
Write the transformed data to the destination:
- **Full load** — truncate and reload every run
- **Incremental load** — append new records, update existing ones (upsert)
- **Slowly Changing Dimensions (SCD)** — strategies for tracking historical changes in reference data

## Key Concepts

- **Data pipeline** — a series of processing steps that move and transform data
- **ELT** — a modern variant: Extract, Load, Transform — load raw data first, then transform in the warehouse (enabled by powerful cloud DWs like BigQuery, Snowflake, Redshift)
- **Idempotency** — running the same pipeline twice should not create duplicates; critical for reliable pipelines
- **Lineage** — tracking where data came from and how it was transformed; important for debugging and compliance
- **Orchestration** — scheduling and managing pipeline dependencies; Apache Airflow, Prefect, dbt, Azure Data Factory
- **Data quality** — validate data at each stage; catch bad data early before it propagates

## Tools in the Ecosystem

| Category | Tools |
|---|---|
| ETL/ELT platforms | Pentaho, Talend, SSIS, Airbyte, Fivetran |
| Orchestration | Apache Airflow, Prefect, dbt, Dagster |
| Cloud DWH | BigQuery, Snowflake, Redshift, Azure Synapse |
| Code-based | Python + Pandas, PySpark, SQLAlchemy |

## Related Technologies

Pentaho · Pandas · Apache Spark · Apache Airflow · SQL · Power BI · BigQuery
