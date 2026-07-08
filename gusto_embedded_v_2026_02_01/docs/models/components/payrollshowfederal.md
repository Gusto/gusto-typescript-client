# PayrollShowFederal

Federal one-time custom withholding override applied to this payroll.

## Example Usage

```typescript
import { PayrollShowFederal } from "@gusto/embedded-api-v-2026-02-01/models/components/payrollshow.js";

let value: PayrollShowFederal = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `overrideType`                                                                                                                     | [components.PayrollShowEmployeeCompensationsOverrideType](../../models/components/payrollshowemployeecompensationsoverridetype.md) | :heavy_minus_sign:                                                                                                                 | Override mode. Only `one_time` is currently exposed.                                                                               |
| `amount`                                                                                                                           | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The amount that was withheld for this payroll.                                                                                     |
| `amountType`                                                                                                                       | [components.PayrollShowEmployeeCompensationsAmountType](../../models/components/payrollshowemployeecompensationsamounttype.md)     | :heavy_minus_sign:                                                                                                                 | How to interpret the amount.                                                                                                       |