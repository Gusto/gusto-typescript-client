# PaymentUnit

The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.

## Example Usage

```typescript
import { PaymentUnit } from "@gusto/embedded-api/models/components/compensation.js";

let value: PaymentUnit = "Year";
```

## Values

```typescript
"Hour" | "Week" | "Month" | "Year" | "Paycheck"
```