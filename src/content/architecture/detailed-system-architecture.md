---
title: "Detailed System Architecture"
description: "Logical implementation stages of the forecasting platform."
category: "Architecture & Design"
order: 11
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - pipeline
  - databricks
  - mlflow
---

## Eight-Stage Pipeline

The implementation can be represented as eight operational stages.

### 1. Configuration and Runtime Initialization

- Load configuration files from Azure Storage.
- Resolve country, category, hierarchy, and forecast-period parameters.
- Validate mandatory configuration values.
- Initialize paths, logging, and run metadata.

### 2. Data Ingestion

- Extract source data from SQL Server.
- Read flat-file inputs from Azure Storage.
- Load economic, weather, pricing, and calendar information.
- Preserve run-specific input snapshots.

### 3. Data Validation and Transformation

- Validate schema and mandatory fields.
- Remove duplicates.
- Standardize dates, units, and business keys.
- Align source data to monthly periods.
- Apply missing-value and quality rules.

### 4. Feature Engineering

- Create lags and rolling statistics.
- Generate seasonal and calendar features.
- Add month, holiday, working-day, and high-sales calendar features.
- Add temperature and weather variables.
- Add product price, PTR, discount, and promotion details.
- Add macroeconomic and industry variables.
- Create exceptional-event indicators.
- Calculate per-hectoliter targets.

### 5. Model Training and Tuning

- Train univariate and multivariate candidates.
- Perform time-aware validation.
- Tune supported model parameters.
- Log experiments and artifacts with MLflow.

### 6. Model Selection and Forecast Generation

- Compare model performance.
- Select a champion model or ensemble.
- Generate demand and per-hectoliter forecasts.
- Apply post-processing rules.

### 7. Financial Calculations and Validation

- Convert per-hectoliter predictions to total values.
- Calculate Net Revenue and Marginal Contribution.
- Validate mathematical relationships.
- Check for missing, negative, or implausible outputs.

### 8. Publishing and Reporting

- Write forecasts to Azure Storage.
- Generate historical accuracy reports.
- Produce deviation and exception summaries.
- Store run metadata for reproducibility.
