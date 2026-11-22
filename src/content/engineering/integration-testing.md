---
title: "Integration Testing"
description: "Validation of the end-to-end Demand and P&L forecasting pipeline across Azure and MLflow components."
category: "Engineering & Implementation"
order: 41
status: "completed"
lastUpdated: "2026-11-21"
tags:
  - testing
  - integration
---

## Objective

Integration testing verifies that pipeline stages and external components work together. It covers Azure Databricks, Azure Blob Storage, SQL Server, MLflow, data preparation, model training, scoring, retraining, and output publication.

## Pipeline Integration Coverage

| Category | Test Area | Validation |
|---|---|---|
| Data ingestion | SQL Server to Databricks | Source data is extracted and loaded successfully |
| Data ingestion | Azure Storage to Databricks | Configuration and flat-file inputs are read correctly |
| Data ingestion | Configuration integration | Excel configuration values are applied across pipeline stages |
| Data ingestion | Schema compatibility | Source schemas remain compatible with downstream transformations |
| Data processing | Ingestion to preprocessing | Ingested data reaches preprocessing with the expected structure |
| Data processing | Preprocessing to feature engineering | Cleaned data generates complete forecasting features |
| Data processing | Feature engineering to training | Feature names, types, and values match model requirements |
| Data processing | Historical joins | Demand, pricing, weather, and macroeconomic data join at the expected grain |
| Model training | Training pipeline execution | The complete training workflow runs successfully |
| Model training | Model artifact storage | Trained models and supporting artifacts are saved |
| Model training | MLflow integration | Parameters, metrics, and artifacts are logged correctly |
| Model scoring | Feature engineering to scoring | Scoring features match the trained model schema |
| Model scoring | Model inference | The loaded model generates predictions for the configured horizon |
| Model scoring | Model version selection | Scoring loads the intended model version |
| Top-down forecasting | Beer and NAB pipelines | Beer and NAB demand and P&L stages execute together |
| Top-down forecasting | Regional aggregation | Country forecasts aggregate correctly to zone-level views |
| Bottom-up forecasting | Granular forecast generation | Forecasts are generated at Region × Channel × Brand × SKU |
| Bottom-up forecasting | Hierarchy aggregation | SKU forecasts aggregate consistently to brand and regional levels |
| Bottom-up forecasting | Missing SKU handling | Missing or discontinued SKUs follow the configured rule |
| Pipeline orchestration | Eight-stage sequence | Pipeline stages execute in the correct order |
| Pipeline orchestration | Stage dependencies | Each stage receives the required outputs from previous stages |
| Pipeline orchestration | Retraining integration | Retraining produces artifacts that scoring can consume |
| Pipeline orchestration | Failure handling | Failures are captured and propagated consistently |
| Output integration | Databricks to Azure Storage | Final forecasts and reports are published successfully |
| Output integration | Output schema | Required columns and data types are present |
| Output integration | Forecast completeness | Expected months and business combinations are included |
