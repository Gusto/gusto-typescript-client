# PayrollWithholdingPayPeriodType

The payment schedule tax rate the payroll is based on. Only included for off-cycle payrolls.

## Example Usage

```typescript
import { PayrollWithholdingPayPeriodType } from "@gusto/embedded-api-v2025-11-15/models/components/payrollwithholdingpayperiodtype.js";

let value: PayrollWithholdingPayPeriodType = "Quarterly";
```

## Values

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly" | "Quarterly" | "Semiannually" | "Annually"
```