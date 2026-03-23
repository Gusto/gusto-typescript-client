# PayrollShowDeductions

## Example Usage

```typescript
import { PayrollShowDeductions } from "@gusto/embedded-api/models/components/payroll.js";

let value: PayrollShowDeductions = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The name of the deduction.                                                                              |
| `amount`                                                                                                | *number*                                                                                                | :heavy_minus_sign:                                                                                      | The amount of the deduction for the pay period.                                                         |
| `amountType`                                                                                            | [components.PayrollShowAmountType](../../models/components/payrollshowamounttype.md)                    | :heavy_minus_sign:                                                                                      | The amount type of the deduction for the pay period. Only present for calculated or processed payrolls. |
| `uuid`                                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The UUID of the deduction. Only present for calculated or processed payrolls.                           |