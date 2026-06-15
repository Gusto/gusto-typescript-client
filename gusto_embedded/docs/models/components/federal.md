# Federal

Federal one-time custom withholding override.

## Example Usage

```typescript
import { Federal } from "@gusto/embedded-api/models/components/payrollupdate.js";

let value: Federal = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `overrideType`                                                                                                                     | [components.OverrideType](../../models/components/overridetype.md)                                                                 | :heavy_minus_sign:                                                                                                                 | Override mode. Only `one_time` is currently supported.                                                                             |
| `amount`                                                                                                                           | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The amount to be withheld for this payroll.                                                                                        |
| `amountType`                                                                                                                       | [components.PayrollUpdateEmployeeCompensationsAmountType](../../models/components/payrollupdateemployeecompensationsamounttype.md) | :heavy_minus_sign:                                                                                                                 | How to interpret the amount.                                                                                                       |