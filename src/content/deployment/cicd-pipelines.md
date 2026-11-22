---
title: "Azure Databricks Pipeline"
description: "Azure Databricks workflow for forecasting configuration, execution, training, scoring, and publishing."
category: "Deployment & Operations"
order: 45
status: "completed"
lastUpdated: "2026-11-21"
tags:
  - cicd
  - delivery
---

## Azure Databricks Git-Based CI/CD

All forecasting pipelines are scheduled in Databricks.

![Azure Databricks Git-based CI/CD architecture](/images/colorified-databricks-git-cicd.png)

### Development Process

1. Developers work directly in Azure Databricks Git folders.
2. Each developer uses a separate feature branch.
3. Changes are committed and pushed through the Databricks Git interface.
4. After review, the feature branch is merged into the main branch.
5. Development, QA, and production Git folders synchronize with their assigned branches.

### Environment Strategy

| Environment | Git Branch | Deployment |
|---|---|---|
| Development | `develop` | Automatically synchronized and tested |
| Production | `main` | Controlled production deployment |

### Databricks Components

- **Databricks Git folders:** Source control and branch management.
- **Databricks Asset Bundles:** Environment-specific jobs, pipelines, clusters, variables, and permissions.
- **Databricks Workflows:** Testing, deployment, scheduling, retries, and notifications.
- **MLflow Model Registry:** Model versioning and promotion.
- **Unity Catalog:** Access control, lineage, and environment isolation.
- **Azure Key Vault:** Secure credentials and secrets.

Databricks Git folders provide source control; Asset Bundles and Databricks Workflows provide deployment and execution, without Azure DevOps Pipelines.
