# ExternalPayrollCreateRequest

The request body for creating an external payroll.

## Example Usage

```typescript
import { ExternalPayrollCreateRequest } from "openapi/models";

let value: ExternalPayrollCreateRequest = {
  checkDate: new Date("2022-06-03"),
  paymentPeriodStartDate: new Date("2022-05-15"),
  paymentPeriodEndDate: new Date("2022-05-30"),
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `checkDate`                                            | [Date](../types/rfcdate.md)                            | :heavy_check_mark:                                     | The check date of the external payroll.                | 2022-06-03                                             |
| `paymentPeriodStartDate`                               | [Date](../types/rfcdate.md)                            | :heavy_check_mark:                                     | The start date of the external payroll payment period. | 2022-05-15                                             |
| `paymentPeriodEndDate`                                 | [Date](../types/rfcdate.md)                            | :heavy_check_mark:                                     | The end date of the external payroll payment period.   | 2022-05-30                                             |