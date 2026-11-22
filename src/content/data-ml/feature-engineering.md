---
title: "Feature Engineering"
description: "Features used to explain demand and P&L behavior."
category: "Data & Machine Learning"
order: 24
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - features
  - seasonality
  - external-indicators
---

## Feature Categories

### Country and Market

- Country: Argentina.
- Country: Chile.
- Country: Peru.
- Country: Uruguay.
- Country-specific CPI and inflation.
- Country-specific market and hierarchy effects.

### Historical Behavior

- Previous-month values.
- Moving averages.
- Rolling growth rates.
- Lagged volume and financial metrics.
- Historical volatility.
- Category and SKU demand history for Beer and NAB.

### Pricing and Commercial

- Product price.
- Price contribution.
- Discount rate.
- Promotional indicators.
- Product and channel mix.
- Retail price and price-to-retailer (PTR) information.
- Gross Turnover and commercial deduction relationships.

### Economic and Industry

- Macroeconomic indicators.
- Consumer Price Index (CPI).
- Inflation rate.
- Consumer or industry indices.
- Beverage-category indicators.
- Market-level economic signals.
- Consumer and industry-level macroeconomic variables.
- Economic indicators used only when future-period values are available for scoring.

### Weather

- Average temperature.
- Temperature trends and deviations from seasonal norms.
- Seasonal weather patterns.
- Country- or region-level climate variables.

### Calendar

- Month indicators.
- Working-day counts.
- Holidays.
- Seasonal periods.
- High-sales-event flags.
- Month-of-year and recurring seasonal indicators.

### Exceptional Events

- COVID impact flags.
- Structural-break indicators.
- One-time business events.

## Monthly Synthetic Feature Data

**Synthetic Example - For Demonstration Only**

Each row represents one monthly snapshot. The table is horizontally scrollable on smaller screens.

| DateKey | YearMonth | Country | Beer Demand (HL) | NAB Demand (HL) | Lag 1 Month Demand (HL) | 3-Month Moving Average (HL) | PTR | Discount Rate | Avg Temperature (C) | Temperature Deviation (C) | Macro Index | CPI | Inflation Rate | Consumer Confidence | Industry Index | Working Days | Holiday Indicator | Promotion Indicator | Exceptional Event Indicator | Gross Turnover per HL | VIC per HL | VLC per HL |
|---:|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 20260131 | 2026-01 | Argentina | 100000 | 22000 | 97000 | 99400 | 3.80 | 5.50% | 12.0 | -1.20 | 100.2 | 116.2 | 5.80% | 99.0 | 101.5 | 22 | 0 | 0 | 0 | 82.40 | 31.20 | 18.50 |
| 20260228 | 2026-02 | Chile | 103000 | 22500 | 100000 | 100600 | 3.82 | 5.60% | 14.0 | -0.80 | 100.6 | 117.0 | 3.10% | 99.4 | 102.0 | 20 | 0 | 1 | 0 | 82.80 | 31.25 | 18.55 |
| 20260331 | 2026-03 | Peru | 108000 | 23000 | 103000 | 103667 | 3.85 | 5.70% | 17.5 | 0.10 | 101.1 | 112.5 | 2.60% | 100.1 | 102.8 | 22 | 1 | 1 | 0 | 83.10 | 31.30 | 18.60 |
| 20260430 | 2026-04 | Uruguay | 112000 | 23500 | 108000 | 107667 | 3.88 | 5.80% | 20.5 | 0.60 | 101.7 | 115.8 | 4.80% | 100.8 | 103.5 | 22 | 0 | 1 | 0 | 83.50 | 31.35 | 18.65 |
| 20260531 | 2026-05 | Argentina | 119000 | 24800 | 112000 | 113000 | 3.92 | 6.00% | 23.0 | 1.10 | 102.2 | 118.1 | 7.20% | 101.3 | 104.2 | 21 | 1 | 1 | 0 | 84.00 | 31.40 | 18.70 |
| 20260630 | 2026-06 | Chile | 128000 | 26000 | 119000 | 119667 | 3.96 | 6.20% | 26.5 | 1.80 | 102.8 | 118.4 | 3.40% | 102.0 | 105.0 | 22 | 0 | 1 | 0 | 84.60 | 31.45 | 18.75 |
| 20260731 | 2026-07 | Peru | 132000 | 26800 | 128000 | 126333 | 4.00 | 6.50% | 29.5 | 2.20 | 103.1 | 113.2 | 2.80% | 102.5 | 105.8 | 23 | 0 | 1 | 0 | 85.20 | 31.50 | 18.80 |
| 20260831 | 2026-08 | Uruguay | 130000 | 26500 | 132000 | 130000 | 4.02 | 6.40% | 28.5 | 1.70 | 103.4 | 116.5 | 5.10% | 102.8 | 106.1 | 21 | 1 | 1 | 0 | 85.00 | 31.55 | 18.85 |
| 20260930 | 2026-09 | Argentina | 118000 | 25000 | 130000 | 126667 | 3.98 | 6.10% | 24.0 | 0.90 | 102.9 | 120.0 | 8.10% | 102.2 | 105.5 | 22 | 0 | 1 | 0 | 84.30 | 31.50 | 18.80 |
| 20261031 | 2026-10 | Chile | 111000 | 24000 | 118000 | 119667 | 3.94 | 5.90% | 20.0 | 0.40 | 102.5 | 119.0 | 3.60% | 101.8 | 104.8 | 22 | 1 | 0 | 0 | 83.80 | 31.45 | 18.75 |
