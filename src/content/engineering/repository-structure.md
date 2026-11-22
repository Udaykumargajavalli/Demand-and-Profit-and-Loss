---
title: "Repository Structure"
description: "Notebook and utility structure for the Demand and P&L forecasting workflows."
category: "Engineering & Implementation"
order: 32
status: "completed"
lastUpdated: "2026-11-21"
tags:
  - repository
  - structure
---

## Overview

The repository uses separate forecast-workflow folders for Demand and P&L. Both workflows follow the same stage structure for ingestion, feature preparation, training, inference, utilities, and execution.

## Demand Structure

```text
Demand/
  Data_Ingestion/
    Data.ipynb
  Feature_Engineering/
    Model_Train_data.ipynb
    Prediction_data.ipynb
  Train/
    Model_Train.ipynb
    Model_Retrain.ipynb
  Inference/
    Prediction.ipynb
  utils/
    config.py
  main/
    run.ipynb
```

## P&L Structure

The P&L workflow uses the same structure and stage responsibilities as the Demand workflow.

```text
P&L/
  Data_Ingestion/
    Data.ipynb
  Feature_Engineering/
    Model_Train_data.ipynb
    Prediction_data.ipynb
  Train/
    Model_Train.ipynb
    Model_Retrain.ipynb
  Inference/
    Prediction.ipynb
  utils/
    config.py
  main/
    run.ipynb
```
