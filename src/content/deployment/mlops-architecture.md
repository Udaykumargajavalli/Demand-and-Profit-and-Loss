---
title: "MLOps Architecture"
description: "Training, scoring, retraining, and model lifecycle in Azure Databricks."
category: "Deployment & Operations"
order: 46
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - mlops
  - databricks
  - mlflow
---

## Training Pipeline

- Prepare historical data.
- Generate features.
- Train candidate models.
- Evaluate validation performance.
- Log parameters, metrics, and artifacts.
- Select the production candidate.

## Scoring Pipeline

- Load approved models.
- Create scoring-period features.
- Generate forecasts.
- Apply financial formulas and business rules.
- Publish final outputs.

## Retraining Pipeline

- Add newly available actuals.
- Rebuild training datasets.
- Re-evaluate candidate models.
- Compare new models with the current champion.
- Promote a replacement only when validation criteria are met.

## Operational Schedule

- Monthly model and forecast refresh.
- Horizon from the current quarter through the end of the year.
- Top-down targets around Work Day 4.
- Bottom-up targets around Work Day 6.
- A future quarterly refresh cadence can be considered.
