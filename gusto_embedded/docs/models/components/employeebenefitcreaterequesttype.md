# EmployeeBenefitCreateRequestType

The company contribution scheme.

`amount`: The company contributes a fixed amount per payroll. If elective is true, the contribution is matching, dollar-for-dollar.

`percentage`: The company contributes a percentage of the payroll amount per payroll period. If elective is true, the contribution is matching, dollar-for-dollar.

`tiered`: The size of the company contribution corresponds to the size of the employee deduction relative to a tiered matching scheme.

## Example Usage

```typescript
import { EmployeeBenefitCreateRequestType } from "@gusto/embedded-api/models/components/employeebenefitcreaterequest.js";

let value: EmployeeBenefitCreateRequestType = "amount";
```

## Values

```typescript
"tiered" | "percentage" | "amount"
```