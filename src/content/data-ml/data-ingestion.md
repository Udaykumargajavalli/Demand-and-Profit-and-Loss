---
title: "Data Ingestion"
description: "Ingestion process for database, flat-file, and external forecasting inputs."
category: "Data & Machine Learning"
order: 20
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - ingestion
  - sql-server
  - azure-storage
---

## Overview

The ingestion stage collected source data for a run-specific monthly forecasting snapshot.

## Processing

- Extract source data from SQL Server.
- Read flat-file inputs from Azure Storage.
- Load economic, weather, pricing, calendar, and industry information.
- Preserve run-specific input snapshots.
- Standardize dates, units, and business keys.
- Validate mandatory fields and schemas.
- Remove duplicates.
- Align data to monthly periods.
