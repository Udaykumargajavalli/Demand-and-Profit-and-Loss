---
title: "High-Level Architecture"
description: "End-to-end architecture for the demand and P&L forecasting platform."
category: "Architecture & Design"
order: 10
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - architecture
  - azure-databricks
  - azure-storage
---

## Overview

The platform ingests operational and external data, transforms it into monthly model-ready features, trains and selects forecasting models, generates batch forecasts, calculates financial metrics, and publishes outputs and accuracy reports.

## Architecture

![ML pipeline architecture for demand and P&L forecasting](/images/colorified-ml-pipeline-architecture.png)

## Technology Stack

| Layer | Technology |
|---|---|
| Data processing | Azure Databricks |
| Programming | Python and PySpark |
| Storage | Azure Blob Storage |
| Source systems | SQL Server and flat files |
| Experiment tracking | MLflow |
| Model execution | Databricks training, scoring, and retraining pipelines |
| Configuration | Excel-based configuration files in Azure Storage |
| Output | Forecast and reporting datasets in Azure Storage |

## Architecture Principles

- Monthly forecasting with configuration-driven execution.
- Separate training, scoring, and retraining workflows.
- Top-down and bottom-up processing from a common data foundation.
- Repeatable experiment and model tracking with MLflow.
- Validated conversion from per-hectoliter targets back to total values.
