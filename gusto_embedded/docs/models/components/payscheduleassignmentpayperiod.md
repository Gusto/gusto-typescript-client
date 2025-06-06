# PayScheduleAssignmentPayPeriod

Pay schedule assignment first pay period information.

## Example Usage

```typescript
import { PayScheduleAssignmentPayPeriod } from "@gusto/embedded-api/models/components/payscheduleassignmentpayperiod.js";

let value: PayScheduleAssignmentPayPeriod = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `payScheduleUuid`      | *string*               | :heavy_minus_sign:     | The pay schedule UUID. |
| `startDate`            | *string*               | :heavy_minus_sign:     | Pay period start date. |
| `endDate`              | *string*               | :heavy_minus_sign:     | Pay period end date.   |
| `checkDate`            | *string*               | :heavy_minus_sign:     | Pay period check date. |