# PayPeriod

## Example Usage

```typescript
import { PayPeriod } from "openapi/models/operations";

let value: PayPeriod = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `checkDate`                                                      | *string*                                                         | :heavy_minus_sign:                                               | The payment date, "Check date", for the pay period               |
| `runPayrollBy`                                                   | *string*                                                         | :heavy_minus_sign:                                               | The deadline to run payroll for direct deposit on the check date |
| `startDate`                                                      | *string*                                                         | :heavy_minus_sign:                                               | The first day of the pay period                                  |
| `endDate`                                                        | *string*                                                         | :heavy_minus_sign:                                               | The last day of the pay period.                                  |