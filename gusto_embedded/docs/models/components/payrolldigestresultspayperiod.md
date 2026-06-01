# PayrollDigestResultsPayPeriod

## Example Usage

```typescript
import { PayrollDigestResultsPayPeriod } from "@gusto/embedded-api/models/components/payrolldigestresults.js";

let value: PayrollDigestResultsPayPeriod = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `startDate`                                      | [RFCDate](../../types/rfcdate.md)                | :heavy_minus_sign:                               | First day of the pay period.                     |
| `endDate`                                        | [RFCDate](../../types/rfcdate.md)                | :heavy_minus_sign:                               | Last day of the pay period.                      |
| `checkDate`                                      | [RFCDate](../../types/rfcdate.md)                | :heavy_minus_sign:                               | The date employees get paid.                     |
| `runPayrollBy`                                   | [RFCDate](../../types/rfcdate.md)                | :heavy_minus_sign:                               | The deadline to run payroll for this pay period. |