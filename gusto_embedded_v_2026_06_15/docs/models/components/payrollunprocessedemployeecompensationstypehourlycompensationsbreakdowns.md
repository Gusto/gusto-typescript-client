# PayrollUnprocessedEmployeeCompensationsTypeHourlyCompensationsBreakdowns

## Example Usage

```typescript
import { PayrollUnprocessedEmployeeCompensationsTypeHourlyCompensationsBreakdowns } from "@gusto/embedded-api-v-2026-06-15/models/components/payrollunprocessedemployeecompensationstype.js";

let value:
  PayrollUnprocessedEmployeeCompensationsTypeHourlyCompensationsBreakdowns = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `startDate`                                      | [RFCDate](../../types/rfcdate.md)                | :heavy_minus_sign:                               | The start date of the workweek.                  |
| `endDate`                                        | [RFCDate](../../types/rfcdate.md)                | :heavy_minus_sign:                               | The end date of the workweek.                    |
| `hours`                                          | *string*                                         | :heavy_minus_sign:                               | The number of hours worked during this workweek. |