# Pandas

> The Python data manipulation library — load, clean, transform, and analyze tabular data.

## What is it?

Pandas is an open-source Python library for data manipulation and analysis created by Wes McKinney in 2008. It provides two primary data structures — **DataFrame** (a 2D table) and **Series** (a 1D array with labels) — and an enormous toolkit for loading, cleaning, transforming, merging, and analyzing data.

Pandas is the first tool every data scientist or data engineer reaches for when working with structured (tabular) data.

## Why it matters

Data is rarely clean. Real-world datasets come with missing values, inconsistent formats, wrong types, duplicates, and messy structures. Before any analysis or ML model can happen, the data needs to be cleaned and shaped. That is Pandas' job.

Pandas handles:
- CSV, Excel, JSON, Parquet, SQL, HTML — read any format in one line
- Filtering, sorting, grouping, aggregating
- Handling missing data (`NaN`)
- Merging/joining multiple tables
- Time series operations
- Data type conversions

## Key Concepts

- **DataFrame** — a 2D labeled data structure; rows (index) and columns (with labels); think spreadsheet or SQL table
- **Series** — a 1D labeled array; a single column of a DataFrame
- **Index** — the row labels; can be integers, strings, dates, or any hashable type
- **`iloc` vs `loc`** — `iloc` selects by integer position; `loc` selects by label/boolean mask
- **Vectorized operations** — operations apply to the whole column at once, no Python loop needed; orders of magnitude faster
- **`groupby`** — split the data into groups, apply a function, combine results — the SQL `GROUP BY` equivalent
- **`merge`** — join two DataFrames like a SQL JOIN; supports inner, left, right, outer
- **Method chaining** — operations return DataFrames, enabling fluid `df.dropna().rename().sort_values()` chains
- **`apply`** — apply a function row-by-row or column-by-column when vectorized operations aren't enough

## Quick Example

```python
import pandas as pd

df = pd.read_csv("projects.csv")

# Basic exploration
print(df.head())          # first 5 rows
print(df.info())          # column types and nulls
print(df.describe())      # summary statistics

# Filter + select
web_projects = df[df["category"] == "web"][["title", "tags", "created_at"]]

# Group and aggregate
tag_counts = (
    df.assign(tags=df["tags"].str.split(","))  # split tag string to list
      .explode("tags")                          # one row per tag
      .groupby("tags")
      .size()
      .sort_values(ascending=False)
      .head(10)
)

# Handle missing values
df["description"] = df["description"].fillna("No description provided")
df = df.dropna(subset=["title"])  # drop rows where title is null
```

## Related Technologies

NumPy · Matplotlib · Seaborn · Scikit-learn · SQLAlchemy · Jupyter Notebook · Polars (modern alternative)
