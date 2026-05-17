# MongoDB

> A document database — store JSON-like data with flexible schemas and scale horizontally.

## What is it?

MongoDB is an open-source, document-oriented NoSQL database developed by MongoDB Inc. and released in 2009. Instead of tables and rows, MongoDB stores data as **BSON documents** (Binary JSON) in **collections**. Documents can have different fields from each other — there is no fixed schema.

MongoDB is the most popular NoSQL database and the "M" in the MEAN/MERN stack.

## Why it matters

Relational databases require you to define a rigid schema upfront. In early-stage applications or domains with highly variable data, this is a constraint. MongoDB lets you start storing data immediately and evolve the structure as your understanding grows.

Best use cases:
- **Content management** — articles, profiles, product catalogs with varying attributes
- **Real-time analytics** — aggregation pipeline for fast data analysis
- **Event logs** — high write throughput with schemaless events
- **Prototyping** — iterate on data models quickly without migrations
- **Hierarchical data** — nested documents naturally represent trees and graphs

## Key Concepts

- **Document** — a JSON-like object (BSON) that is the basic unit of data; equivalent to a row
- **Collection** — a group of documents; equivalent to a table but with no enforced schema
- **`_id`** — every document has a unique `_id` field; MongoDB generates an `ObjectId` if not specified
- **Schema flexibility** — documents in the same collection can have different fields
- **Embedded documents** — store related data directly inside a document instead of joining across tables
- **References** — store a foreign `_id` to link documents across collections (manual join via `$lookup`)
- **Aggregation pipeline** — a sequence of stages (`$match`, `$group`, `$sort`, `$lookup`, `$project`) for data transformation
- **Indexes** — single field, compound, text, geospatial — critical for query performance
- **Mongoose** — the most popular Node.js ODM (Object Document Mapper) for MongoDB, adds schemas and validation

## Quick Example

```javascript
// Mongoose schema and model
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  tags: [String],              // array of strings
  author: {                    // embedded document
    name: String,
    email: String,
  },
  createdAt: { type: Date, default: Date.now },
});

const Project = mongoose.model("Project", projectSchema);

// Aggregation pipeline — count projects by tag
const tagCounts = await Project.aggregate([
  { $unwind: "$tags" },
  { $group: { _id: "$tags", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
]);
```

## Related Technologies

Node.js · Mongoose · Express · Atlas (cloud) · Redis · Docker
