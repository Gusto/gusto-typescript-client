# PaymentUnit

The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.

## Example Usage

```typescript
import { PaymentUnit } from "@gusto/embedded-api/models/components";

let value: PaymentUnit = "Month";
```

## Values

```typescript
"Hour" | "Week" | "Month" | "Year" | "Paycheck"
```