# PayScheduleFrequencyCreateUpdate

The frequency that employees on this pay schedule are paid with Gusto.

## Example Usage

```typescript
import { PayScheduleFrequencyCreateUpdate } from "openapi/models";

let value: PayScheduleFrequencyCreateUpdate = "Every week";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly" | Unrecognized<string>
```