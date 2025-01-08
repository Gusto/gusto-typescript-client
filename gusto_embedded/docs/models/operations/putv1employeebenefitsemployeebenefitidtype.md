# PutV1EmployeeBenefitsEmployeeBenefitIdType

The company contribution scheme.

`amount`: The company contributes a fixed amount per payroll. If elective is true, the contribution is matching, dollar-for-dollar.

`percentage`: The company contributes a percentage of the payroll amount per payroll period. If elective is true, the contribution is matching, dollar-for-dollar.

`tiered`: The size of the company contribution corresponds to the size of the employee deduction relative to a tiered matching scheme.

## Example Usage

```typescript
import { PutV1EmployeeBenefitsEmployeeBenefitIdType } from "gusto_embedded/models/operations";

let value: PutV1EmployeeBenefitsEmployeeBenefitIdType = "percentage";
```

## Values

```typescript
"amount" | "percentage" | "tiered"
```