---
title: "Development Environment"
description: "Databricks workspace and local tooling used to develop the forecasting platform."
category: "Engineering & Implementation"
order: 33
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - environment
  - databricks
  - python
---

## Development Workspace

The primary development environment is an Azure Databricks workspace. Forecasting notebooks and jobs are organized around configuration, ingestion, transformation, feature engineering, training, scoring, retraining, financial calculations, and reporting.

## Core Tools

| Tool | Purpose |
|---|---|
| Azure Databricks | Managed notebooks, jobs, clusters, and operational workflow execution |
| Python | Feature engineering, model development, evaluation, and post-processing |
| PySpark | Distributed data preparation and large-scale pipeline execution |
| MLflow | Experiment parameters, metrics, artifacts, and model lifecycle tracking |
| Azure Storage | Configuration, source snapshots, forecast outputs, and reporting datasets |
| SQL Server | Approved operational and financial source systems |
| VS Code | Website documentation and source editing |

## Workspace Organization

- Separate development, testing, and production workspaces or environments.
- Store reusable pipeline code outside individual notebooks where practical.
- Keep notebooks responsible for orchestration and readable stage execution.
- Use controlled configuration files to set countries, categories, forecast periods, targets, and hierarchy levels.
- Run approved synthetic or representative test datasets before promotion.
- Use centralized secret management and managed identities instead of hard-coded credentials.

## Runtime and Packages

The Databricks runtime should include compatible Python and PySpark dependencies required for data processing and supported model libraries. MLflow tracking and Azure Storage access should use approved workspace libraries and identities.
