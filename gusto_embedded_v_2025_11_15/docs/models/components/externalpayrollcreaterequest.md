# ExternalPayrollCreateRequest

The request body for creating an external payroll.

## Example Usage

```typescript
import { ExternalPayrollCreateRequest } from "@gusto/embedded-api-v-2025-11-15/models/components/externalpayrollcreaterequest.js";
import { RFCDate } from "@gusto/embedded-api-v-2025-11-15/types/rfcdate.js";

let value: ExternalPayrollCreateRequest = {
  checkDate: new RFCDate("2022-06-03"),
  paymentPeriodStartDate: new RFCDate("2022-05-15"),
  paymentPeriodEndDate: new RFCDate("2022-05-30"),
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `checkDate`                                            | [RFCDate](../../types/rfcdate.md)                      | :heavy_check_mark:                                     | The check date of the external payroll.                | 2022-06-03                                             |
| `paymentPeriodStartDate`                               | [RFCDate](../../types/rfcdate.md)                      | :heavy_check_mark:                                     | The start date of the external payroll payment period. | 2022-05-15                                             |
| `paymentPeriodEndDate`                                 | [RFCDate](../../types/rfcdate.md)                      | :heavy_check_mark:                                     | The end date of the external payroll payment period.   | 2022-05-30                                             |