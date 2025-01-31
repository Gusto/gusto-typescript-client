# PostV1ExternalPayrollRequestBody

## Example Usage

```typescript
import { PostV1ExternalPayrollRequestBody } from "@gusto/embedded-api/models/operations";

let value: PostV1ExternalPayrollRequestBody = {
  checkDate: "<value>",
  paymentPeriodStartDate: "<value>",
  paymentPeriodEndDate: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `checkDate`                               | *string*                                  | :heavy_check_mark:                        | External payroll's check date.            |
| `paymentPeriodStartDate`                  | *string*                                  | :heavy_check_mark:                        | External payroll's pay period start date. |
| `paymentPeriodEndDate`                    | *string*                                  | :heavy_check_mark:                        | External payroll's pay period end date.   |