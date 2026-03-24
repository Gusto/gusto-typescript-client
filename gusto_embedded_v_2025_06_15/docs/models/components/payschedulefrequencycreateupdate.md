# PayScheduleFrequencyCreateUpdate

Pay frequency when creating or updating a schedule. Only weekly, bi-weekly, twice per month, and monthly are supported via the API.

- `Every week`: Weekly pay.
- `Every other week`: Biweekly pay.
- `Twice per month`: Two pay dates per month; require day_1 and day_2 (use 31 for last day of month).
- `Monthly`: One pay date per month; require day_1 (1-31).


## Example Usage

```typescript
import { PayScheduleFrequencyCreateUpdate } from "@gusto/embedded-api-v2025-06-15/models/components/payschedulefrequencycreateupdate.js";

let value: PayScheduleFrequencyCreateUpdate = "Every week";
```

## Values

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly"
```