---
title: "Model Selection"
description: "Model portfolio and ensemble approach used for demand and P&L forecasting."
category: "Data & Machine Learning"
order: 26
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - model-selection
  - ensemble
  - forecasting
---

## Model Portfolio

### Regression and Machine Learning

- Log-log regression.
- Random Forest.
- XGBoost.

### Statistical Time-Series

- ARIMA.
- ETS.
- Exponential Smoothing.

### Deep Learning

- Long Short-Term Memory networks.

## Univariate Models

Univariate models used the historical behavior of the target and were effective for stable series with strong trend and seasonality.

For Beer and NAB, the time-series models could capture recurring monthly and seasonal consumption patterns before external variables were considered.

## Multivariate Models

Multivariate models incorporated country, product and retail pricing, discount and promotion indicators, macroeconomic indicators, CPI, inflation, temperature and weather variables, industry signals, calendar seasonality, and exceptional-event flags.

## Ensemble Strategy

A custom ensemble combined regression and time-series forecasts, balancing long-term trends, recurring seasonality, recent movements, nonlinear relationships, and broader economic changes.
