# PayrollEmployeeCompensationsTypeDeduction

An array of deductions for the employee.

## Example Usage

```typescript
import { PayrollEmployeeCompensationsTypeDeduction } from "openapi/models";

let value: PayrollEmployeeCompensationsTypeDeduction = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                            | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The name of the deduction.                                                                                        |
| `amount`                                                                                                          | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | The amount of the deduction for the pay period.                                                                   |
| `amountType`                                                                                                      | [models.PayrollEmployeeCompensationsTypeAmountType](../models/payroll-employee-compensations-type-amount-type.md) | :heavy_minus_sign:                                                                                                | The amount type of the deduction for the pay period. Only present for calculated or processed payrolls.           |
| `uuid`                                                                                                            | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The UUID of the deduction. Only present for calculated or processed payrolls.                                     |