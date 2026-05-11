# PayrollUpdateDeduction

An array of deductions for the employee.

## Example Usage

```typescript
import { PayrollUpdateDeduction } from "openapi/models";

let value: PayrollUpdateDeduction = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                              | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The name of the deduction.                                                                                          |
| `amount`                                                                                                            | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | The amount of the deduction for the pay period.                                                                     |
| `amountType`                                                                                                        | [models.PayrollUpdateAmountType](../models/payroll-update-amount-type.md)                                           | :heavy_minus_sign:                                                                                                  | The amount type of the deduction for the pay period.                                                                |
| `uuid`                                                                                                              | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The UUID of the deduction. This parameter is optional and can be provided in order to update an existing deduction. |