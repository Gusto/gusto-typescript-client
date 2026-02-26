# PostV1EmployeesEmployeeIdEmployeeBenefitsDeductionReducesTaxableIncome

Whether the employee deduction reduces taxable income or not. Only valid for Group Term Life benefits. Note: when the value is not "unset", coverage amount and coverage salary multiplier are ignored.

## Example Usage

```typescript
import { PostV1EmployeesEmployeeIdEmployeeBenefitsDeductionReducesTaxableIncome } from "openapi/models/operations";

let value:
  PostV1EmployeesEmployeeIdEmployeeBenefitsDeductionReducesTaxableIncome =
    "reduces_taxable_income";
```

## Values

```typescript
"unset" | "reduces_taxable_income" | "does_not_reduce_taxable_income"
```