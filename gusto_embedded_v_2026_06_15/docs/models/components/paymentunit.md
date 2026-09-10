# PaymentUnit

The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.

## Example Usage

```typescript
import { PaymentUnit } from "@gusto/embedded-api-v-2026-06-15/models/components/compensation.js";

let value: PaymentUnit = "Year";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Hour" | "Week" | "Month" | "Year" | "Paycheck" | Unrecognized<string>
```