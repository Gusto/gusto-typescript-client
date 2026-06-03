# WithholdingPayPeriod

The payment schedule tax rate the payroll is based on. Only relevant for off-cycle payrolls.

## Example Usage

```typescript
import { WithholdingPayPeriod } from "@gusto/embedded-api-v-2026-02-01/models/components/payrollupdate.js";

let value: WithholdingPayPeriod = "Semiannually";
```

## Values

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly" | "Quarterly" | "Semiannually" | "Annually"
```