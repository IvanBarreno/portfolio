# AWS (Amazon Web Services)

> The world's largest cloud platform — if you can imagine it, AWS probably has a service for it.

## What is it?

Amazon Web Services (AWS) is a cloud computing platform provided by Amazon, launched publicly in 2006. It was the first major public cloud and remains the market leader with over 200 fully featured services spanning compute, storage, networking, databases, machine learning, security, IoT, and more.

AWS operates on a **pay-as-you-go** model — you pay only for the resources you consume, with no upfront investment in hardware.

## Why it matters

AWS changed what it means to start a tech company. Before the cloud, launching a product required purchasing servers, building data centers, and a months-long infrastructure project. AWS reduced that to minutes and an API call.

Today, the vast majority of internet infrastructure runs on AWS — Netflix, Airbnb, Pinterest, NASA, the CIA, and millions of startups all run on AWS. Understanding AWS is a foundational skill for any developer who deploys software.

## Core Service Categories

| Category | Key Services |
|---|---|
| **Compute** | EC2 (virtual machines), Lambda (serverless functions), ECS/EKS (containers) |
| **Storage** | S3 (object storage), EBS (block storage), EFS (file system) |
| **Databases** | RDS (managed SQL), DynamoDB (NoSQL), ElastiCache (Redis/Memcached) |
| **Networking** | VPC (virtual network), CloudFront (CDN), Route 53 (DNS), ALB (load balancer) |
| **Security** | IAM (identity & access management), Cognito (auth), Secrets Manager |
| **ML/AI** | SageMaker (ML platform), Rekognition (vision), Polly (text-to-speech) |
| **DevOps** | CodePipeline, CodeDeploy, CloudFormation (IaC), CDK |

## Key Concepts

- **Regions & Availability Zones** — AWS operates in geographic regions (us-east-1, eu-west-1); each region has multiple isolated data centers (AZs) for redundancy
- **IAM (Identity and Access Management)** — controls who can do what on AWS; always follow the principle of least privilege
- **S3** — object storage for any file type; websites, backups, data lakes; buckets are globally unique
- **EC2** — virtual machines in the cloud; choose CPU, RAM, OS; you manage the OS
- **Lambda** — serverless compute; run a function in response to an event without managing servers
- **VPC** — your private network inside AWS; subnets, security groups, route tables
- **The Shared Responsibility Model** — AWS secures the infrastructure; you secure what you run on it

## Quick Example

```bash
# Deploy a static website to S3 (like GitHub Pages but on AWS)
aws s3 mb s3://my-portfolio-bucket
aws s3 sync ./dist s3://my-portfolio-bucket --delete
aws s3 website s3://my-portfolio-bucket \
  --index-document index.html \
  --error-document index.html

# Set public read policy
aws s3api put-bucket-policy \
  --bucket my-portfolio-bucket \
  --policy file://public-read-policy.json
```

## Related Technologies

Azure · GCP · Docker · Terraform · GitHub Actions · Kubernetes · Serverless Framework
