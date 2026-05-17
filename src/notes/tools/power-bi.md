# Power BI

> Microsoft's business intelligence platform — turn raw data into interactive visual reports.

## What is it?

Power BI is a business analytics service developed by Microsoft, released in 2014. It allows users to connect to hundreds of data sources, transform and model the data, and build interactive dashboards and reports that can be shared across an organization.

Power BI is part of the Microsoft Power Platform alongside Power Apps, Power Automate, and Power Pages.

## Why it matters

Data means nothing if it can't be understood. Power BI bridges the gap between raw data in databases/spreadsheets and the business decisions that data should inform. It enables:

- **Self-service BI** — business users can build their own reports without waiting for IT
- **Real-time dashboards** — connect to live data sources for up-to-the-minute metrics
- **Data storytelling** — combine charts, filters, maps, and KPIs in a single interactive canvas
- **Shareable reports** — publish to Power BI Service and share across the organization
- **Embedded analytics** — embed Power BI reports inside custom applications

Power BI is the dominant tool in the Microsoft ecosystem for business intelligence, used by hundreds of thousands of companies.

## Key Concepts

- **Dataset** — the data model; tables, relationships, calculated columns, and measures
- **Report** — visualizations built on top of a dataset; charts, tables, maps, slicers
- **Dashboard** — a collection of pinned visuals from one or more reports; real-time snapshot
- **DAX (Data Analysis Expressions)** — Power BI's formula language for calculated columns and measures; similar to Excel formulas but designed for relational data
- **Power Query (M)** — the ETL layer inside Power BI; connects, transforms, and cleans data before it reaches the model
- **Relationships** — links between tables (like foreign keys in SQL); enable cross-table analysis
- **DirectQuery vs Import** — Import loads data into Power BI's in-memory engine; DirectQuery queries the source live
- **Row-Level Security (RLS)** — restrict what data each user sees in the same report

## DAX Example

```
// Calculated measure — revenue growth vs previous month
Revenue Growth % =
VAR CurrentRevenue = [Total Revenue]
VAR PreviousRevenue = CALCULATE([Total Revenue], PREVIOUSMONTH('Date'[Date]))
RETURN
    DIVIDE(CurrentRevenue - PreviousRevenue, PreviousRevenue, BLANK())
```

## Related Technologies

Excel · Power Automate · Azure · SQL Server · DAX · Power Query · Tableau
