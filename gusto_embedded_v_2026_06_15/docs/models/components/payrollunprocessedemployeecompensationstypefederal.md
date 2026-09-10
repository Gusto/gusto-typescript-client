# PayrollUnprocessedEmployeeCompensationsTypeFederal

Federal one-time custom withholding override applied to this payroll.

## Example Usage

```typescript
import { PayrollUnprocessedEmployeeCompensationsTypeFederal } from "@gusto/embedded-api-v-2026-06-15/models/components/payrollunprocessedemployeecompensationstype.js";

let value: PayrollUnprocessedEmployeeCompensationsTypeFederal = {};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `overrideType`                                                                                                                                           | [components.PayrollUnprocessedEmployeeCompensationsTypeOverrideType](../../models/components/payrollunprocessedemployeecompensationstypeoverridetype.md) | :heavy_minus_sign:                                                                                                                                       | Override mode. Only `one_time` is currently exposed.                                                                                                     |
| `amount`                                                                                                                                                 | *string*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                       | The amount that was withheld for this payroll.                                                                                                           |
| `amountType`                                                                                                                                             | [components.PayrollUnprocessedEmployeeCompensationsTypeAmountType](../../models/components/payrollunprocessedemployeecompensationstypeamounttype.md)     | :heavy_minus_sign:                                                                                                                                       | How to interpret the amount.                                                                                                                             |