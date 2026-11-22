---
title: "Coding Standards"
description: "Coding and formatting standards used across Azure Databricks, Python, PySpark, and SQL."
category: "Engineering & Implementation"
order: 39
status: "completed"
lastUpdated: "2026-11-21"
tags:
  - standards
  - quality
---

## Overview

The forecasting implementation follows consistent formatting and coding conventions across Azure Databricks, Python, PySpark, and SQL to improve readability, reuse, testing, and maintenance.

## Azure Databricks

- Organize notebooks by stage: ingestion, feature engineering, training, retraining, scoring, and reporting.
- Keep one clear responsibility per notebook or reusable module.
- Separate configuration, credentials, and runtime parameters from implementation logic.
- Add run metadata, clear step names, and meaningful exception logs.
- Use controlled notebook output and avoid printing large datasets or sensitive values.
- Use Databricks jobs or workflows for repeatable orchestration.

## Python

- Follow PEP 8 formatting and use descriptive snake_case names.
- Add type hints for function inputs and outputs where practical.
- Keep functions small and focused on one transformation or rule.
- Use constants or configuration objects instead of repeated literals.
- Validate inputs and raise clear exceptions for invalid or missing data.
- Do not hard-code secrets, private paths, or personal data.

```python
def calculate_net_revenue(
    gross_turnover_per_hl: float,
    excise_per_hl: float,
    discount_per_hl: float,
) -> float:
    return gross_turnover_per_hl - excise_per_hl - discount_per_hl
```

## PySpark

- Define explicit schemas for source and intermediate datasets.
- Prefer DataFrame and Spark SQL operations over row-level Python loops.
- Use descriptive column and alias names consistently.
- Filter and select required columns early to reduce processing.
- Use broadcasting only for small lookup datasets.
- Cache or persist only when required and unpersist data after use.
- Test transformations on a small synthetic or approved dataset before scaling.

```python
forecast_df = (
    forecast_df
    .withColumn(
        "net_revenue_per_hl",
        col("gross_turnover_per_hl")
        - col("excise_per_hl")
        - col("discount_per_hl"),
    )
)
```

## SQL

- Use uppercase keywords and lowercase or snake_case identifiers consistently.
- Qualify columns when a query joins more than one table.
- Use clear table aliases and CTEs to break complex logic into readable stages.
- Avoid `SELECT *` in production transformations.
- Filter data as early as possible and use explicit data types in casts.
- Add comments only where the business rule or join logic is not self-explanatory.

```sql
SELECT
    country_code,
    date_key,
    gross_turnover_per_hl,
    excise_per_hl,
    discount_per_hl,
    gross_turnover_per_hl - excise_per_hl - discount_per_hl AS net_revenue_per_hl
FROM forecast_output
WHERE date_key = '2026-10-31';
```
