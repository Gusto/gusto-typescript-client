# PayScheduleFrequency

The frequency that employees on this pay schedule are paid with Gusto.

## Example Usage

```typescript
import { PayScheduleFrequency } from "openapi/models";

let value: PayScheduleFrequency = "Twice per month";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly" | "Quarterly" | "Annually" | Unrecognized<string>
```