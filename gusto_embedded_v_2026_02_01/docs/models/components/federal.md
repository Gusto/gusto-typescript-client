# Federal

Federal one-time custom withholding override applied to this payroll.

## Example Usage

```typescript
import { Federal } from "@gusto/embedded-api-v-2026-02-01/models/components/payrollemployeecompensationstype.js";

let value: Federal = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `overrideType`                                                                                                                 | [components.OverrideType](../../models/components/overridetype.md)                                                             | :heavy_minus_sign:                                                                                                             | Override mode. Only `one_time` is currently exposed.                                                                           |
| `amount`                                                                                                                       | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The amount that was withheld for this payroll.                                                                                 |
| `amountType`                                                                                                                   | [components.PayrollEmployeeCompensationsTypeAmountType](../../models/components/payrollemployeecompensationstypeamounttype.md) | :heavy_minus_sign:                                                                                                             | How to interpret the amount.                                                                                                   |