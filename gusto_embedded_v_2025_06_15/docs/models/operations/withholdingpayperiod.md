# WithholdingPayPeriod

The payment schedule tax rate the payroll is based on.

## Example Usage

```typescript
import { WithholdingPayPeriod } from "@gusto/embedded-api/models/operations/postv1companiescompanyidpayrolls.js";

let value: WithholdingPayPeriod = "Semiannually";
```

## Values

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly" | "Quarterly" | "Semiannually" | "Annually"
```