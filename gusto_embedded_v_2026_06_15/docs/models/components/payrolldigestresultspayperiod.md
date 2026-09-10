# PayrollDigestResultsPayPeriod

## Example Usage

```typescript
import { PayrollDigestResultsPayPeriod } from "@gusto/embedded-api-v-2026-06-15/models/components/payrolldigestresults.js";

let value: PayrollDigestResultsPayPeriod = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `startDate`                                      | [Date](../../types/rfcdate.md)                   | :heavy_minus_sign:                               | First day of the pay period.                     |
| `endDate`                                        | [Date](../../types/rfcdate.md)                   | :heavy_minus_sign:                               | Last day of the pay period.                      |
| `checkDate`                                      | [Date](../../types/rfcdate.md)                   | :heavy_minus_sign:                               | The date employees get paid.                     |
| `runPayrollBy`                                   | [Date](../../types/rfcdate.md)                   | :heavy_minus_sign:                               | The deadline to run payroll for this pay period. |