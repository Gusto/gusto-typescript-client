# PaymentUnit

The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.

## Example Usage

```typescript
import { PaymentUnit } from "openapi/models";

let value: PaymentUnit = "Year";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Hour" | "Week" | "Month" | "Year" | "Paycheck" | Unrecognized<string>
```