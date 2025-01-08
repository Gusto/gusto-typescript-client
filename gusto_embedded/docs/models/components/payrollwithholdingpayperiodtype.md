# PayrollWithholdingPayPeriodType

The payment schedule tax rate the payroll is based on. Only included for off-cycle payrolls.

## Example Usage

```typescript
import { PayrollWithholdingPayPeriodType } from "gusto_embedded/models/components";

let value: PayrollWithholdingPayPeriodType = "Semiannually";
```

## Values

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly" | "Quarterly" | "Semiannually" | "Annually"
```