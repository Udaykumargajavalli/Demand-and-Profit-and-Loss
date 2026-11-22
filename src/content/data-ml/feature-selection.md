---
title: "Feature Selection"
description: "Feature-reduction and relevance techniques used in multivariate models."
category: "Data & Machine Learning"
order: 25
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - vif
  - feature-importance
  - selection
---

## Overview

The platform used multivariate feature selection to identify redundant predictors and retain the most useful variables.

## Methods

- Variance Inflation Factor analysis for correlated predictors.
- Model-based feature importance.
- Stability across hierarchy levels and validation periods.
- Removal of features that would not be available at future scoring time.
- Removal of features that introduced target leakage.

Future external features should be included only when their availability for the forecast horizon is reliable.
