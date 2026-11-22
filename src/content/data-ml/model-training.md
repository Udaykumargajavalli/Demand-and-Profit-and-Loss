---
title: "Model Training"
description: "Repeatable training workflow for demand and P&L forecasts."
category: "Data & Machine Learning"
order: 27
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - training
  - databricks
  - mlflow
---

## Training Workflow

1. Define the forecasting grain and target.
2. Prepare the historical training dataset.
3. Apply data-quality and outlier rules.
4. Generate time-series and external features, including seasonality and calendar variables.
   Include temperature, pricing, macroeconomic, and industry inputs only when they are available for the forecast horizon.
5. Split the data using time-aware validation.
6. Train candidate models.
7. Evaluate models at the appropriate hierarchy levels.
8. Select the best model or ensemble.
9. Register the approved model and metadata.
10. Score the required forecast horizon.
11. Convert per-hectoliter outputs to total values.
12. Calculate Net Revenue and Marginal Contribution.
13. Validate outputs against business rules.
14. Publish forecasts and accuracy reports.

Random train-test splitting was avoided because future observations can introduce leakage into time-series training.
