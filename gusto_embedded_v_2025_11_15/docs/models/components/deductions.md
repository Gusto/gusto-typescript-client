# Deductions

## Example Usage

```typescript
import { Deductions } from "@gusto/embedded-api-v-2025-11-15/models/components/payrollemployeecompensationstype.js";

let value: Deductions = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The name of the deduction.                                                                                   |
| `amount`                                                                                                     | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | The amount of the deduction for the pay period.                                                              |
| `amountType`                                                                                                 | [components.AmountType](../../models/components/amounttype.md)                                               | :heavy_minus_sign:                                                                                           | The amount type of the deduction for the pay period. Only present for unprocessed payrolls.                  |
| `uuid`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The UUID of the deduction. Only present for unprocessed payrolls.                                            |
| `updatableViaPayroll`                                                                                        | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | Whether the deduction can be updated via the payroll update endpoint. Only present for unprocessed payrolls. |