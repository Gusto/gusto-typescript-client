# PayrollPayPeriodType

## Example Usage

```typescript
import { PayrollPayPeriodType } from "@gusto/embedded-api/models/components/payrollpayperiodtype.js";

let value: PayrollPayPeriodType = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `startDate`                                   | *string*                                      | :heavy_minus_sign:                            | The start date, inclusive, of the pay period. |
| `endDate`                                     | *string*                                      | :heavy_minus_sign:                            | The start date, inclusive, of the pay period. |
| `payScheduleUuid`                             | *string*                                      | :heavy_minus_sign:                            | The UUID of the pay schedule for the payroll. |