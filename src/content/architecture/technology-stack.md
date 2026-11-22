---
title: "Technology Stack"
description: "Core technologies used by the forecasting platform."
category: "Architecture & Design"
order: 14
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - technology
  - azure
  - databricks
---

## Technology Stack

| Area | Technology | Responsibility |
|---|---|---|
| Distributed processing | Azure Databricks | Transformation, training, scoring, retraining |
| Processing | PySpark | Scalable data preparation and pipeline execution |
| Modeling | Python | Feature engineering and model development |
| Experiment tracking | MLflow | Parameters, metrics, artifacts, and model lifecycle |
| Storage | Azure Blob Storage | Configuration, inputs, outputs, and reports |
| Source database | SQL Server | Operational and financial source data |
| External inputs | Flat files | Economic, weather, industry, and calendar information |
| Configuration | Excel configuration files | Market, hierarchy, target, and execution settings |
