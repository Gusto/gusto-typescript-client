# PayScheduleUpdateRequestFrequency

The frequency that employees on this pay schedule are paid with Gusto. Only weekly, bi-weekly, twice per month, and monthly are supported on create and update.

- `Every week`: Weekly pay.
- `Every other week`: Biweekly pay.
- `Twice per month`: Two pay dates per month; require day_1 and day_2 (use 31 for last day of month).
- `Monthly`: One pay date per month; require day_1 (1-31).


## Example Usage

```typescript
import { PayScheduleUpdateRequestFrequency } from "@gusto/embedded-api/models/components/payscheduleupdaterequest.js";

let value: PayScheduleUpdateRequestFrequency = "Twice per month";
```

## Values

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly"
```