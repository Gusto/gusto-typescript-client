# PaySchedulePreview

Preview of pay schedule dates for the next 18 months. Use this to show partners expected pay dates, pay period boundaries, and payroll deadlines before they create or change a pay schedule. See [Preview pay schedule dates](https://docs.gusto.com/embedded-payroll/reference/get-v1-companies-company_id-pay_schedules-preview) for usage.

- **pay_periods**: One entry per pay period in the range; each includes check_date, start_date, end_date, and run_payroll_by.
- **holidays**: Observed bank holidays (ISO date strings) that may affect payroll timing.


## Example Usage

```typescript
import { PaySchedulePreview } from "@gusto/embedded-api-v2025-06-15/models/components/payschedulepreview.js";

let value: PaySchedulePreview = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `payPeriods`                                                                                       | [components.PaySchedulePreviewPayPeriod](../../models/components/payschedulepreviewpayperiod.md)[] | :heavy_minus_sign:                                                                                 | Pay periods in the preview range (default 18 months from today, or up to end_date if provided).    |
| `holidays`                                                                                         | [RFCDate](../../types/rfcdate.md)[]                                                                | :heavy_minus_sign:                                                                                 | Observed bank holidays (ISO date strings) in the preview range; may affect payroll processing.     |