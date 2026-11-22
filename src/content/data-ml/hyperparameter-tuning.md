---
title: "Hyperparameter Tuning"
description: "Model parameter tuning and ensemble-weight considerations."
category: "Data & Machine Learning"
order: 28
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - tuning
  - validation
  - ensemble
---

## Overview

Supported model parameters were tuned using time-aware validation within the Databricks training workflow.

## Tuning Principles

- Preserve chronological train-validation boundaries.
- Tune parameters against the target hierarchy.
- Use validation windows that represent the forecast horizon.
- Record parameters and metrics with MLflow.
- Avoid tuning to the final reporting period.
- Re-evaluate ensemble weights using validation performance rather than subjective assignments.
