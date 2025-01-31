# PaymentUnit

The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.

## Example Usage

```typescript
import { PaymentUnit } from "@gusto/embedded-api/models/operations";

let value: PaymentUnit = "Paycheck";
```

## Values

```typescript
"Hour" | "Week" | "Month" | "Year" | "Paycheck"
```