# PayrollUpdateEmployeeCompensationsBreakdowns

## Example Usage

```typescript
import { PayrollUpdateEmployeeCompensationsBreakdowns } from "@gusto/embedded-api-v-2026-06-15/models/components/payrollupdate.js";

let value: PayrollUpdateEmployeeCompensationsBreakdowns = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `startDate`                                      | [Date](../../types/rfcdate.md)                   | :heavy_minus_sign:                               | The start date of the workweek.                  |
| `endDate`                                        | [Date](../../types/rfcdate.md)                   | :heavy_minus_sign:                               | The end date of the workweek.                    |
| `hours`                                          | *string*                                         | :heavy_minus_sign:                               | The number of hours worked during this workweek. |