---
title: "Unit Testing"
description: "Unit tests for forecasting functions, data transformations, feature engineering, and P&L calculations."
category: "Engineering & Implementation"
order: 40
status: "completed"
lastUpdated: "2026-11-21"
tags:
  - testing
  - unit
---

## Objective

Unit testing validates individual functions and transformations in isolation. It protects the data-quality rules, feature calculations, forecasting logic, P&L formulas, and configuration handling used by the Demand and P&L pipelines.

## Test Coverage

| Category | Test Area | Validation |
|---|---|---|
| Data ingestion | Schema and data types | Required columns exist and Volume, Revenue, Price, and Cost fields use valid types |
| Data ingestion | Null and duplicate handling | Critical columns do not contain unexpected nulls and duplicates follow the expected business granularity |
| Data preprocessing | Missing values | Missing values are handled by the approved rule |
| Data preprocessing | Z-score and IQR outliers | Extreme values are identified using configured thresholds |
| Data preprocessing | Isolation Forest | Anomaly predictions are mapped to the expected outlier flag |
| Data preprocessing | Mean imputation | Outliers are replaced using the intended historical mean |
| Data preprocessing | Negative values | Invalid negative demand values follow the documented handling rule |
| Feature engineering | Lag and rolling features | Lag periods and rolling-window calculations use the correct historical data |
| Feature engineering | Calendar and COVID flags | Month, high-sales, and configured COVID indicators are assigned correctly |
| Feature engineering | External features | Weather and macroeconomic indicators align with the correct monthly period |
| Feature engineering | Feature selection | VIF and feature-importance filtering follow configured thresholds |
| Feature engineering | Data leakage | Future actual values are not available to historical features |
| Demand forecasting | Model initialization | Hyperparameters match the approved configuration |
| Demand forecasting | Time-aware split | Historical training and validation periods remain separate |
| Demand forecasting | Prediction output | Prediction functions return the expected schema and forecast horizon |
| Demand forecasting | Negative forecasts | Invalid negative predictions follow the approved business rule |
| P&L calculations | Gross Turnover | Gross Turnover equals Volume × Retailer Price |
| P&L calculations | Net Revenue | Net Revenue equals Gross Turnover minus Excise and Discount |
| P&L calculations | Marginal Contribution | Marginal Contribution equals Net Revenue minus VIC and VLC |
| P&L calculations | Per-HL conversion | P&L components are divided by valid volume values |
| P&L calculations | Forecast reconstruction | Per-HL predictions are multiplied by forecast volume correctly |
| P&L calculations | Zero volume | Division by zero is handled safely |
| Forecast aggregation | Monthly and hierarchy aggregation | Monthly, regional, Beer, NAB, and SKU outputs aggregate correctly |
| Model evaluation | MAE, RMSE, MAPE, and WAPE | Metrics are calculated with zero-actual and edge-case handling |
| Configuration | Parameter parsing | Required, valid, and invalid configuration values behave as designed |
