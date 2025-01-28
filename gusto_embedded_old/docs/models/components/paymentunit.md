# PaymentUnit

The unit accompanying the compensation rate. If the employee is an owner, rate should be 'Paycheck'.

## Example Usage

```typescript
import { PaymentUnit } from "openapi/models/components";

let value: PaymentUnit = "Hour";
```

## Values

```typescript
"Hour" | "Week" | "Month" | "Year" | "Paycheck"
```