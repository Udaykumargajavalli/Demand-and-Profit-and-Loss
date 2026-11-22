---
title: "Key Features"
description: "Forecast outputs and financial metrics produced by the platform."
category: "Project Overview"
order: 7
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - features
  - pnl
  - forecasting
---

## Forecasted Financial Metrics

The solution forecasted five primary P&L components.

| Metric | Business Definition |
|---|---|
| Gross Turnover | Revenue before deductions, calculated from volume and price charged to retailers |
| Excise | Excise duties, taxes, and associated statutory charges |
| Discount | Discounts and commercial deductions provided to retailers |
| Variable Industrial Cost | Variable production costs, including raw-material-related expenditure |
| Variable Logistics Cost | Variable costs associated with distribution and logistics |

## Derived Metrics

Two additional financial metrics were derived rather than independently forecast.

```text
Net Revenue =
Gross Turnover − Excise − Discount
```

```text
Marginal Contribution =
Net Revenue − Variable Industrial Cost − Variable Logistics Cost
```

Calculating these measures from their components preserves P&L relationships and reduces the risk of internally inconsistent forecasts.

## Process of Forecasting

The forecasting process connects volume and price information to Gross Turnover, deducts excise duties and commercial discounts, and then combines Net Revenue with variable industrial and logistics costs to derive Marginal Contribution and EBIT-related outputs.

![P&L forecasting metrics and GAC scope](/images/pnl-forecasting-metrics-gac-scope.png)
