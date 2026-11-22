---
title: "Design Decisions"
description: "Key forecasting architecture and modeling decisions."
category: "Architecture & Design"
order: 15
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - decisions
  - per-hectoliter
  - ensemble
---

## Per-Hectoliter Targets

Absolute financial values are strongly influenced by sales volume. The platform normalized monetary targets by hectoliters:

```text
Metric per HL = Total Metric Value / Volume in HL
```

Forecast totals were reconstructed using forecast volume:

```text
Forecast Total Metric = Forecast Metric per HL × Forecast Volume in HL
```

This reduced volume-driven distortion, improved cross-market comparability, and separated volume effects from price, tax, discount, and cost-rate effects.

## Top-Down and Bottom-Up Forecasting

Top-down forecasts support regional and country-level planning. Bottom-up forecasts support detailed channel, brand, and SKU visibility.

A reconciliation layer should compare both views, quantify differences, apply approved allocation rules, preserve hierarchy consistency, and record overrides. This capability is a recommended enhancement unless formally implemented.
