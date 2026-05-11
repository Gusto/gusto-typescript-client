# PayScheduleFrequency

The frequency that employees on this pay schedule are paid with Gusto.

READ-ONLY in responses. Possible values:

- `Every week`: Employees are paid weekly.
- `Every other week`: Employees are paid bi-weekly (every two weeks).
- `Twice per month`: Employees are paid on two fixed days each month (e.g. 1st and 15th); use day_1 and day_2.
- `Monthly`: Employees are paid once per month; use day_1 for the pay day.
- `Quarterly`: Employees are paid every three months.
- `Annually`: Employees are paid once per year.


## Example Usage

```typescript
import { PayScheduleFrequency } from "openapi/models";

let value: PayScheduleFrequency = "Twice per month";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly" | "Quarterly" | "Annually" | Unrecognized<string>
```