---
title: "Data Quality"
description: "Validation and abnormal-observation treatment."
category: "Data & Machine Learning"
order: 22
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - data-quality
  - outliers
---

## Overview

The platform validated schemas, mandatory fields, duplicates, monthly alignment, hierarchies, missing values, and abnormal observations.

## Outlier Detection

Bottom-up forecasting and P&L modeling included:

- Z-score detection.
- Interquartile Range rules.
- Isolation Forest.
- Historical mean-based imputation.

Where appropriate, abnormal observations were replaced using statistics derived from the preceding 12 months.

## Business-Aware Treatment

Outliers were not automatically treated as errors. The process distinguished:

- Data-quality problems.
- One-time events.
- Genuine business peaks.
- Promotion-driven increases.
- Structural changes in demand.

Valid business events were retained or represented through explicit flags.
