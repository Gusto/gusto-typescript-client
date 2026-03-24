# PaySchedule

The pay schedule object captures the details of when employees work and when they should be paid. A company can have multiple pay schedules.

Response includes frequency, anchor dates, optional day_1/day_2 for monthly/semi-monthly, auto_pilot (or auto_payroll for API version 2025-11-15 and later), and auto_payroll_enablement_blockers when Autopayroll is disabled.

**Webhooks:** Subscribe to [Pay Schedule Events](https://docs.gusto.com/embedded-payroll/docs/pay-schedule-events) to receive `pay_schedule.created` and `pay_schedule.updated` when pay schedules are created or updated.


## Example Usage

```typescript
import { PaySchedule } from "@gusto/embedded-api/models/components/payschedule.js";

let value: PaySchedule = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |