---
title: "Monitoring & Logging"
description: "Databricks, MLflow, data, model, pipeline, and business monitoring for the forecasting platform."
category: "Deployment & Operations"
order: 50
status: "completed"
lastUpdated: "2026-11-21"
tags:
  - monitoring
  - logging
  - controls
---

> **Note:** All alerts are triggered to the respective teams through Outlook for failures, successes, and other important forecast or pipeline events.

## Data Monitoring

- Source freshness.
- Missing records.
- Schema changes.
- Volume anomalies.
- Hierarchy mismatches.
- Late-arriving data.

## Model Monitoring

- Accuracy by period and hierarchy.
- Forecast bias.
- Feature and target drift.
- Champion-versus-challenger performance.
- Degradation across forecast horizons.

## Pipeline Monitoring

- Run status and duration.
- Databricks notebook and job logs.
- Failed notebooks or jobs.
- Retry counts.
- Input and output row counts.
- SLA adherence.
- Output publication status.

## Notification Events

| Event | Outlook Notification |
|---|---|
| Pipeline success | Success summary to the responsible forecasting team |
| Pipeline failure | Failure details and escalation notification to the responsible team |
| Forecast accuracy degradation | Accuracy alert to ML leadership and the model team |
| Output or data-quality issue | Data-quality or reconciliation alert to the data and zone teams |
| Important model or pipeline event | Relevant operational or business notification |

## Business Monitoring

- Variance from business forecasts.
- Large forecast movements.
- Implausible P&L relationships.
- Manual adjustments.
- Deviations requiring stakeholder review.
