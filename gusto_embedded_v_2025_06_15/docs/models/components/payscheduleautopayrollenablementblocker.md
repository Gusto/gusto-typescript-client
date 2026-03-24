# PayScheduleAutoPayrollEnablementBlocker

A single blocker preventing Autopayroll enablement.

## Example Usage

```typescript
import { PayScheduleAutoPayrollEnablementBlocker } from "@gusto/embedded-api-v2025-06-15/models/components/payscheduleautopayrollenablementblocker.js";

let value: PayScheduleAutoPayrollEnablementBlocker = {};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                                                                | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | The blocker type (e.g. employees_not_on_direct_deposit, missing_funding_method, missing_state_tax_requirements, one_day_ach_speed_not_supported, company_suspended). |
| `metadata`                                                                                                                                                           | [components.PayScheduleAutoPayrollEnablementBlockerMetadata](../../models/components/payscheduleautopayrollenablementblockermetadata.md)                             | :heavy_minus_sign:                                                                                                                                                   | Blocker-specific metadata (e.g. employee_uuids, states).                                                                                                             |