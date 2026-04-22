# PaySchedulePreviewPayPeriod

A single pay period in a pay schedule preview, with check date, period boundaries, and payroll deadline.

## Example Usage

```typescript
import { PaySchedulePreviewPayPeriod } from "@gusto/embedded-api-v-2025-11-15/models/components/payschedulepreviewpayperiod.js";
import { RFCDate } from "@gusto/embedded-api-v-2025-11-15/types/rfcdate.js";

let value: PaySchedulePreviewPayPeriod = {
  checkDate: new RFCDate("2024-09-27"),
  startDate: new RFCDate("2024-02-26"),
  runPayrollBy: new RFCDate("2024-06-30"),
  endDate: new RFCDate("2025-04-26"),
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `checkDate`                                                                         | [RFCDate](../../types/rfcdate.md)                                                   | :heavy_check_mark:                                                                  | The date employees will be paid (check date).                                       |
| `startDate`                                                                         | [RFCDate](../../types/rfcdate.md)                                                   | :heavy_check_mark:                                                                  | The first day of the pay period.                                                    |
| `runPayrollBy`                                                                      | [RFCDate](../../types/rfcdate.md)                                                   | :heavy_check_mark:                                                                  | The deadline by which payroll must be run for this period to be paid on check_date. |
| `endDate`                                                                           | [RFCDate](../../types/rfcdate.md)                                                   | :heavy_check_mark:                                                                  | The last day of the pay period.                                                     |