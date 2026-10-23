# PayrollShowFederal

Federal one-time custom withholding override applied to this payroll.

## Example Usage

```typescript
import { PayrollShowFederal } from "@gusto/embedded-api-v-2025-11-15/models/components/unprocessedpayroll.js";

let value: PayrollShowFederal = {};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `overrideType`                                                                                                                                                     | [components.PayrollShowOverrideType](../../models/components/payrollshowoverridetype.md)                                                                           | :heavy_minus_sign:                                                                                                                                                 | Override mode. Only `one_time` is currently exposed.                                                                                                               |
| `amount`                                                                                                                                                           | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The amount that was withheld for this payroll.                                                                                                                     |
| `amountType`                                                                                                                                                       | [components.PayrollShowEmployeeCompensationsCustomWithholdingsAmountType](../../models/components/payrollshowemployeecompensationscustomwithholdingsamounttype.md) | :heavy_minus_sign:                                                                                                                                                 | How to interpret the amount.                                                                                                                                       |