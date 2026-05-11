# PayrollEmployeeCompensationsTypeDeduction

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
| `amountType`                                                                                                      | [models.PayrollEmployeeCompensationsTypeAmountType](../models/payroll-employee-compensations-type-amount-type.md) | :heavy_minus_sign:                                                                                                | The amount type of the deduction for the pay period. Only present for unprocessed payrolls.                       |
| `uuid`                                                                                                            | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The UUID of the deduction. Only present for unprocessed payrolls.                                                 |
| `updatableViaPayroll`                                                                                             | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | Whether the deduction can be updated via the payroll update endpoint. Only present for unprocessed payrolls.      |