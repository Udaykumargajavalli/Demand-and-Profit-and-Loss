---
title: "End-to-End Data Flow"
description: "Data movement from source ingestion through forecast publication."
category: "Architecture & Design"
order: 12
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - data-flow
  - pipeline
---

## Overview

Data is sourced from SQL Server and flat-file inputs, standardized at a monthly grain, enriched with engineered features, modeled, converted to financial outputs, validated, and published.

## Architecture

![End-to-end sequence architecture for demand and P&L forecasting](/images/colorified-sequence-architecture.png)
