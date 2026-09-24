# PayrollEmployeeCompensationsTypeBreakdowns

## Example Usage

```typescript
import { PayrollEmployeeCompensationsTypeBreakdowns } from "@gusto/embedded-api-v-2025-11-15/models/components/payrollemployeecompensationstype.js";

let value: PayrollEmployeeCompensationsTypeBreakdowns = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `startDate`                                      | [RFCDate](../../types/rfcdate.md)                | :heavy_minus_sign:                               | The start date of the workweek.                  |
| `endDate`                                        | [RFCDate](../../types/rfcdate.md)                | :heavy_minus_sign:                               | The end date of the workweek.                    |
| `hours`                                          | *string*                                         | :heavy_minus_sign:                               | The number of hours worked during this workweek. |