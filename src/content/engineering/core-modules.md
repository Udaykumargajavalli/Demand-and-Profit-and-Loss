---
title: "Core Modules"
description: "Logical modules in the demand and P&L forecasting workflow."
category: "Engineering & Implementation"
order: 36
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - modules
  - pipeline
---

## Overview

The implementation is organized around repeatable forecasting stages.

| Module | Responsibility |
|---|---|
| Ingestion | Read SQL Server and flat-file inputs |
| Validation | Apply schema, quality, and hierarchy checks |
| Feature engineering | Generate lag, rolling, seasonal, and external features |
| Training | Train and tune candidate models |
| Selection | Compare performance and select an approved model or ensemble |
| Scoring | Generate demand and per-hectoliter forecasts |
| Reporting | Publish forecasts and accuracy reports |
