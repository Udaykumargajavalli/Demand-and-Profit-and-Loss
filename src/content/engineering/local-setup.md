---
title: "Local Setup"
description: "Development setup principles for the forecasting implementation."
category: "Engineering & Implementation"
order: 34
status: "completed"
lastUpdated: "2026-11-20"
tags:
  - setup
  - python
  - databricks
---

## Overview

The implementation used Python and PySpark on Azure Databricks.

## Development Setup

- Use a managed Python environment aligned to the Databricks runtime.
- Install project dependencies through a managed package process.
- Store approved data and configuration paths outside source code.
- Use separate development and production workspaces or environments.
- Test notebooks and jobs with representative synthetic or approved datasets.
- Keep secrets in a centralized secrets service rather than configuration files.
