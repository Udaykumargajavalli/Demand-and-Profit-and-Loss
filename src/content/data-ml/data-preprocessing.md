---
title: "Data Preprocessing"
description: "Preparation of operational and financial data for forecasting."
category: "Data & Machine Learning"
order: 21
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - preprocessing
  - missing-values
  - normalization
---

## Overview

The data preparation process transformed raw operational and financial data into model-ready datasets.

## Core Activities

- Standardize data types and column names.
- Align all inputs to a monthly time grain.
- Join demand, pricing, financial, weather, and economic data.
- Validate business hierarchies.
- Handle missing records and duplicate observations.
- Create lagged and rolling-window features.
- Generate monthly seasonality indicators.
- Generate calendar features for month, holiday, working-day count, and seasonal periods.
- Add temperature and weather observations aligned to the forecast market and monthly period.
- Standardize Beer and NAB product, channel, and hierarchy keys.
- Prevent future-unavailable pricing or macroeconomic values from entering training data.
- Create exceptional-event and high-sales flags.
- Normalize P&L targets by volume.
- Prevent target leakage.
- Separate training, validation, and scoring periods.
