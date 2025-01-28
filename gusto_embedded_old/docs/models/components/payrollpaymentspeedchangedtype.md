# PayrollPaymentSpeedChangedType

Only applicable when a payroll is moved to four day processing instead of fast ach.

## Example Usage

```typescript
import { PayrollPaymentSpeedChangedType } from "openapi/models/components";

let value: PayrollPaymentSpeedChangedType = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `originalCheckDate`                              | *string*                                         | :heavy_minus_sign:                               | Original check date when fast ach applies.       |
| `currentCheckDate`                               | *string*                                         | :heavy_minus_sign:                               | Current check date.                              |
| `originalDebitDate`                              | *string*                                         | :heavy_minus_sign:                               | Original debit date when fast ach applies.       |
| `currentDebitDate`                               | *string*                                         | :heavy_minus_sign:                               | Current debit date.                              |
| `reason`                                         | *string*                                         | :heavy_minus_sign:                               | The reason why the payroll is moved to four day. |