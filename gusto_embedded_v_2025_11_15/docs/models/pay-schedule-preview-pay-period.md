# PaySchedulePreviewPayPeriod

A single pay period in a pay schedule preview, with check date, period boundaries, and payroll deadline.

## Example Usage

```typescript
import { PaySchedulePreviewPayPeriod } from "openapi/models";

let value: PaySchedulePreviewPayPeriod = {
  checkDate: new Date("2024-09-27"),
  startDate: new Date("2024-02-26"),
  runPayrollBy: new Date("2024-06-30"),
  endDate: new Date("2025-04-26"),
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `checkDate`                                                       | [Date](../types/rfcdate.md)                                       | :heavy_check_mark:                                                | The payment date, "Check date", for the pay period.               |
| `startDate`                                                       | [Date](../types/rfcdate.md)                                       | :heavy_check_mark:                                                | The first day of the pay period.                                  |
| `runPayrollBy`                                                    | [Date](../types/rfcdate.md)                                       | :heavy_check_mark:                                                | The deadline to run payroll for direct deposit on the check date. |
| `endDate`                                                         | [Date](../types/rfcdate.md)                                       | :heavy_check_mark:                                                | The last day of the pay period.                                   |