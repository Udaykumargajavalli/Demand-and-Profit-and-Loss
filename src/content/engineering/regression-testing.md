---
title: "Regression Testing"
description: "Repeatable baseline comparisons that protect demand and P&L forecasting behavior."
category: "Engineering & Implementation"
order: 42
status: "completed"
lastUpdated: "2026-11-21"
tags:
  - testing
  - regression
---

## Objective

Regression testing ensures that pipeline, feature, model, configuration, or retraining changes do not introduce unintended differences in demand and P&L results. Monthly refresh validation is especially important because models and inputs change over time.

## Baseline Comparisons

| Area | Comparison | Validation |
|---|---|---|
| Input data | Schema and record counts | Required columns, row counts, nulls, and duplicates remain consistent |
| Preprocessing | Outlier and imputation outputs | Transformed datasets remain consistent unless the change is intentionally approved |
| Feature engineering | Feature values and schema | Expected names, types, lag values, and rolling averages remain stable |
| Data leakage | Future-data controls | Code changes do not introduce future actuals into historical features |
| Model output | Demand forecasts | Baseline and updated forecasts are compared using approved tolerances |
| Model accuracy | MAE, RMSE, MAPE, and WAPE | Accuracy does not deteriorate beyond the approved threshold |
| Model reproducibility | Deterministic inputs and settings | Unchanged inputs and model settings produce consistent results |
| Forecast horizon | Required future periods | Forecast periods and business combinations remain complete |
| P&L calculations | Gross Turnover, Net Revenue, and Marginal Contribution | Approved formulas and reconciliation relationships remain valid |
| Per-HL calculations | Per-HL and reconstructed totals | Volume and P&L conversions remain mathematically consistent |
| Top-down forecasting | Beer and NAB forecasts | Aggregated regional changes are explainable and within tolerance |
| Bottom-up forecasting | SKU, brand, and regional forecasts | Hierarchy aggregation and forecast coverage remain valid |
| Pipeline behavior | Training, scoring, and retraining | Code changes preserve approved pipeline behavior |
| Configuration | Configuration values | Configuration changes do not affect unrelated pipeline stages |
| MLflow | Model artifacts and metadata | Approved model versions, parameters, metrics, and artifacts remain available |
| Output | Schema and forecast records | Output keys, record completeness, schemas, and values remain controlled |

## Baseline Data

Maintain an approved baseline containing:

- Historical input datasets.
- Transformed and feature-engineered datasets.
- Demand forecasts.
- P&L forecasts.
- Model parameters and artifact metadata.
- Historical accuracy and evaluation metrics.
