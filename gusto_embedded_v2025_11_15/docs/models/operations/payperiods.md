# PayPeriods

## Example Usage

```typescript
import { PayPeriods } from "@gusto/embedded-api-v2025-11-15/models/operations/getv1companiescompanyidpayschedulespreview.js";

let value: PayPeriods = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `checkDate`                                                      | *string*                                                         | :heavy_minus_sign:                                               | The payment date, "Check date", for the pay period               |
| `runPayrollBy`                                                   | *string*                                                         | :heavy_minus_sign:                                               | The deadline to run payroll for direct deposit on the check date |
| `startDate`                                                      | *string*                                                         | :heavy_minus_sign:                                               | The first day of the pay period                                  |
| `endDate`                                                        | *string*                                                         | :heavy_minus_sign:                                               | The last day of the pay period.                                  |