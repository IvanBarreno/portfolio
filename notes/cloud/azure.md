# Azure (Microsoft Azure)

> Microsoft's cloud platform — the enterprise's cloud of choice, with deep integration into the Microsoft ecosystem.

## What is it?

Microsoft Azure is a cloud computing platform launched by Microsoft in 2010. It is the second-largest cloud provider after AWS and the dominant choice in enterprise and corporate environments, thanks to its deep integration with Microsoft products: Windows Server, Active Directory, Office 365, SQL Server, Visual Studio, and .NET.

Azure offers 200+ services across compute, storage, networking, databases, AI/ML, DevOps, and security — mirroring AWS's breadth but with a distinctly Microsoft flavor.

## Why it matters

Azure's strength comes from integration. Organizations already running Microsoft infrastructure (Active Directory, Exchange, SQL Server) find Azure the natural cloud extension — single sign-on, familiar tools, and hybrid cloud scenarios where on-premise and cloud work seamlessly together.

Key differentiators:
- **Azure Active Directory (now Entra ID)** — cloud identity platform used by most enterprises; integrates with Office 365
- **Azure DevOps** — complete CI/CD pipeline platform (formerly VSTS)
- **Azure SQL** — fully managed SQL Server in the cloud; lift-and-shift from on-premise
- **Hybrid cloud** — Azure Arc and Azure Stack allow managing on-premise servers through Azure
- **ML ecosystem** — Azure Machine Learning is a top-tier ML platform

## Core Services

| Category | Key Services |
|---|---|
| **Compute** | Virtual Machines, App Service (PaaS), Azure Functions (serverless), AKS (Kubernetes) |
| **Storage** | Blob Storage (like S3), Azure Files, Disk Storage |
| **Databases** | Azure SQL, Cosmos DB (NoSQL), Azure Database for PostgreSQL/MySQL |
| **Identity** | Azure Active Directory (Entra ID), B2C, Managed Identity |
| **DevOps** | Azure DevOps, GitHub Actions integration, Azure Pipelines |
| **AI/ML** | Azure ML, Cognitive Services, OpenAI Service |
| **Networking** | Virtual Network, Application Gateway, Azure CDN, DNS |

## Key Concepts

- **Resource Groups** — logical containers that group related Azure resources for management and billing
- **Azure Resource Manager (ARM)** — the management layer for deploying and managing resources; Infrastructure as Code via ARM templates or Bicep
- **App Service** — PaaS for deploying web apps without managing VMs; supports Node.js, Python, PHP, .NET, Java
- **Azure Functions** — serverless compute triggered by HTTP, timers, queue messages, or events
- **Cosmos DB** — globally distributed NoSQL database with multiple consistency levels; supports MongoDB, SQL, Cassandra APIs
- **Managed Identity** — lets Azure services authenticate to other Azure services without credentials in code
- **Azure Monitor + Log Analytics** — centralized logging, metrics, and alerting

## Quick Example

```bash
# Deploy a Node.js API to Azure App Service
az login
az group create --name portfolio-rg --location eastus

az appservice plan create \
  --name portfolio-plan \
  --resource-group portfolio-rg \
  --sku F1  # Free tier

az webapp create \
  --name my-portfolio-api \
  --resource-group portfolio-rg \
  --plan portfolio-plan \
  --runtime "NODE:18-lts"

az webapp deployment source config-zip \
  --resource-group portfolio-rg \
  --name my-portfolio-api \
  --src app.zip
```

## Related Technologies

AWS · GCP · Docker · Kubernetes · GitHub Actions · Terraform · .NET · SQL Server
