# PayrollUpdateEmployeeCompensationsBreakdowns

## Example Usage

```typescript
import { PayrollUpdateEmployeeCompensationsBreakdowns } from "@gusto/embedded-api/models/components/payrollupdate.js";

let value: PayrollUpdateEmployeeCompensationsBreakdowns = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `startDate`                                      | [RFCDate](../../types/rfcdate.md)                | :heavy_minus_sign:                               | The start date of the workweek.                  |
| `endDate`                                        | [RFCDate](../../types/rfcdate.md)                | :heavy_minus_sign:                               | The end date of the workweek.                    |
| `hours`                                          | *string*                                         | :heavy_minus_sign:                               | The number of hours worked during this workweek. |