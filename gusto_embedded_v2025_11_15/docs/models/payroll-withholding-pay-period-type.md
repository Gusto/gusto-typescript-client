# PayrollWithholdingPayPeriodType

The payment schedule tax rate the payroll is based on. Only included for off-cycle payrolls.

## Example Usage

```typescript
import { PayrollWithholdingPayPeriodType } from "openapi/models";

let value: PayrollWithholdingPayPeriodType = "Quarterly";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly" | "Quarterly" | "Semiannually" | "Annually" | Unrecognized<string>
```