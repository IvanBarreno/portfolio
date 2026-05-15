# GCP (Google Cloud Platform)

> Google's cloud — built on the same infrastructure that runs Search, Gmail, and YouTube.

## What is it?

Google Cloud Platform (GCP) is Google's suite of cloud computing services, launched publicly in 2011. GCP runs on the same global infrastructure that powers Google's own products — Google Search, Gmail, YouTube, and Google Maps — giving it arguably the most advanced networking and data infrastructure of any cloud provider.

GCP is the third major cloud provider after AWS and Azure, and is particularly strong in **data analytics**, **machine learning**, **Kubernetes** (which Google invented), and **globally distributed applications**.

## Why it matters

GCP offers unique advantages that come from Google's engineering heritage:

- **Kubernetes** — Google invented Kubernetes and GKE (Google Kubernetes Engine) is the best-managed Kubernetes offering
- **BigQuery** — serverless, petabyte-scale data warehouse; run SQL on massive datasets in seconds
- **Vertex AI** — a unified ML platform that leverages Google's AI research (the company that created TensorFlow)
- **Global networking** — Google's private fiber network connects all regions; traffic stays on Google's infrastructure, not the public internet
- **Firebase** — Google's mobile/web platform (realtime database, auth, hosting, Cloud Functions)

## Core Services

| Category | Key Services |
|---|---|
| **Compute** | Compute Engine (VMs), Cloud Run (serverless containers), GKE (Kubernetes), Cloud Functions |
| **Storage** | Cloud Storage (like S3), Persistent Disk, Filestore |
| **Databases** | Cloud SQL (PostgreSQL/MySQL), Firestore (NoSQL), Bigtable, Spanner (global SQL) |
| **Analytics** | BigQuery, Looker, Dataflow (Apache Beam), Pub/Sub |
| **AI/ML** | Vertex AI, AutoML, Gemini API, Vision AI, Natural Language API |
| **DevOps** | Cloud Build, Artifact Registry, Cloud Deploy |
| **Networking** | VPC, Cloud CDN, Cloud Load Balancing, Cloud DNS |

## Key Concepts

- **Projects** — the fundamental organizing unit in GCP; all resources belong to a project; billing is per project
- **Cloud Run** — run containerized applications without managing infrastructure; scales to zero; pay per request
- **BigQuery** — columnar, serverless data warehouse; SQL queries on terabytes in seconds; no indexes, no tuning
- **Pub/Sub** — global message queue for decoupling services; similar to AWS SNS/SQS
- **Cloud Storage buckets** — object storage; fine-grained IAM, lifecycle policies, multi-region redundancy
- **Service accounts** — non-human identities for applications and services to authenticate with GCP APIs
- **IAM** — Identity and Access Management; roles and policies define who can do what

## Quick Example

```bash
# Deploy a containerized app to Cloud Run (zero-config serverless)
gcloud run deploy portfolio-api \
  --image gcr.io/my-project/portfolio-api:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars DATABASE_URL=$DATABASE_URL

# Query BigQuery from the CLI
bq query --use_legacy_sql=false \
  'SELECT author, COUNT(*) as quote_count
   FROM `myproject.quotes.raw`
   GROUP BY author
   ORDER BY quote_count DESC
   LIMIT 10'
```

## Related Technologies

AWS · Azure · Docker · Kubernetes · TensorFlow · Firebase · Terraform · BigQuery
