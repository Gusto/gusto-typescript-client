# CompensationPaymentUnit

The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.

## Example Usage

```typescript
import { CompensationPaymentUnit } from "openapi/models";

let value: CompensationPaymentUnit = "Week";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Hour" | "Week" | "Month" | "Year" | "Paycheck" | Unrecognized<string>
```