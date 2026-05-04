# PaySchedulePreviewPayPeriod

A single pay period in a pay schedule preview, with check date, period boundaries, and payroll deadline.

## Example Usage

```typescript
import { PaySchedulePreviewPayPeriod } from "@gusto/embedded-api/models/components/payschedulepreviewpayperiod.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

let value: PaySchedulePreviewPayPeriod = {
  checkDate: new RFCDate("2024-09-27"),
  startDate: new RFCDate("2024-02-26"),
  runPayrollBy: new RFCDate("2024-06-30"),
  endDate: new RFCDate("2025-04-26"),
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `checkDate`                                                       | [RFCDate](../../types/rfcdate.md)                                 | :heavy_check_mark:                                                | The payment date, "Check date", for the pay period.               |
| `startDate`                                                       | [RFCDate](../../types/rfcdate.md)                                 | :heavy_check_mark:                                                | The first day of the pay period.                                  |
| `runPayrollBy`                                                    | [RFCDate](../../types/rfcdate.md)                                 | :heavy_check_mark:                                                | The deadline to run payroll for direct deposit on the check date. |
| `endDate`                                                         | [RFCDate](../../types/rfcdate.md)                                 | :heavy_check_mark:                                                | The last day of the pay period.                                   |