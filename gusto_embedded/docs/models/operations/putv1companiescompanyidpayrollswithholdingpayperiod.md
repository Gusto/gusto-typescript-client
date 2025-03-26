# PutV1CompaniesCompanyIdPayrollsWithholdingPayPeriod

The payment schedule tax rate the payroll is based on. Only relevant for off-cycle payrolls.

## Example Usage

```typescript
import { PutV1CompaniesCompanyIdPayrollsWithholdingPayPeriod } from "@gusto/embedded-api/models/operations/putv1companiescompanyidpayrolls.js";

let value: PutV1CompaniesCompanyIdPayrollsWithholdingPayPeriod =
  "Twice per month";
```

## Values

```typescript
"Every week" | "Every other week" | "Twice per month" | "Monthly" | "Quarterly" | "Semiannually" | "Annually"
```