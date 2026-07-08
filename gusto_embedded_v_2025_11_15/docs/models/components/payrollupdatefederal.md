# PayrollUpdateFederal

Federal one-time custom withholding override.

## Example Usage

```typescript
import { PayrollUpdateFederal } from "@gusto/embedded-api-v-2025-11-15/models/components/payrollupdate.js";

let value: PayrollUpdateFederal = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `overrideType`                                                                                                                     | [components.PayrollUpdateOverrideType](../../models/components/payrollupdateoverridetype.md)                                       | :heavy_minus_sign:                                                                                                                 | Override mode. Only `one_time` is currently supported.                                                                             |
| `amount`                                                                                                                           | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The amount to be withheld for this payroll.                                                                                        |
| `amountType`                                                                                                                       | [components.PayrollUpdateEmployeeCompensationsAmountType](../../models/components/payrollupdateemployeecompensationsamounttype.md) | :heavy_minus_sign:                                                                                                                 | How to interpret the amount.                                                                                                       |