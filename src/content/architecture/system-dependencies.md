---
title: "System Dependencies"
description: "Upstream data-team dependencies for demand and economic forecasting inputs."
category: "Architecture & Design"
order: 16
status: "completed"
lastUpdated: "2026-11-21"
tags:
  - dependencies
  - integration
---

## Overview

The forecasting platform depends on upstream data teams for approved external and historical inputs.

## Upstream Data Dependencies

| Dependency | Purpose | Criticality | Required Cadence |
|---|---|---|---|
| Macroeconomic data | Support CPI, inflation, economic, and industry indicators used in multivariate forecasting | High | Monthly or as scheduled for future forecast periods |
| Historical demand and volume data | Provide Beer and NAB demand history, lag features, moving averages, and per-hectoliter target calculations | High | Monthly |
