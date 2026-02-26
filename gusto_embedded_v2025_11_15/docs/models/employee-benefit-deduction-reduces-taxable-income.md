# EmployeeBenefitDeductionReducesTaxableIncome

Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not "unset", coverage amount and coverage salary multiplier are ignored.

## Example Usage

```typescript
import { EmployeeBenefitDeductionReducesTaxableIncome } from "openapi/models";

let value: EmployeeBenefitDeductionReducesTaxableIncome = "unset";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"unset" | "reduces_taxable_income" | "does_not_reduce_taxable_income" | Unrecognized<string>
```