# WithholdingPayPeriod

The payment schedule tax rate the payroll is based on.

## Example Usage

```typescript
import { WithholdingPayPeriod } from "@gusto/embedded-api/models/operations";

let value: WithholdingPayPeriod = "Quarterly";
```

## Values

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly" | "Quarterly" | "Semiannually" | "Annually"
```