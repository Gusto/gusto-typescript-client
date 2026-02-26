# WithholdingPayPeriod

The payment schedule tax rate the payroll is based on. Only relevant for off-cycle payrolls.

## Example Usage

```typescript
import { WithholdingPayPeriod } from "openapi/models";

let value: WithholdingPayPeriod = "Semiannually";
```

## Values

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly" | "Quarterly" | "Semiannually" | "Annually"
```