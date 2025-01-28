# PaymentUnit

The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.

## Example Usage

```typescript
import { PaymentUnit } from "openapi/models/operations";

let value: PaymentUnit = "Month";
```

## Values

```typescript
"Hour" | "Week" | "Month" | "Year" | "Paycheck"
```