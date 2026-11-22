---
title: "Alerting"
description: "Forecasting pipeline alerts and severity levels."
category: "Deployment & Operations"
order: 51
status: "completed"
lastUpdated: "2026-11-21"
tags:
  - alerting
  - operations
---

## Overview

The following alerts identify failures or threshold breaches across demand and P&L forecasting operations.

## Alert Rules

| Alert Name | Alert Condition | Severity |
|---|---|---|
| **Data Ingestion Failure** | Required input data is missing, delayed, or fails to load from source systems. | Critical |
| **Data Quality Alert** | Null values, duplicates, missing historical data, or outliers exceed defined thresholds. | High |
| **Pipeline Execution Failure** | Any Databricks pipeline stage fails or exceeds the expected execution time. | Critical |
| **Model Training/Scoring Failure** | Model training, retraining, or forecast generation fails. | Critical |
| **Forecast Accuracy Degradation** | Demand or P&L forecast accuracy falls below the defined threshold. | High |
| **Forecast Delivery SLA Breach** | Top-down forecasts are not delivered by Work Day 4 or bottom-up forecasts by Work Day 6. | Critical |
