# PayPeriod

The representation of a pay period.

## Example Usage

```typescript
import { PayPeriod } from "openapi/models/components";

let value: PayPeriod = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `startDate`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | The start date, inclusive, of the pay period.                              |
| `endDate`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | The end date, inclusive, of the pay period.                                |
| `payScheduleUuid`                                                          | *string*                                                                   | :heavy_minus_sign:                                                         | A unique identifier of the pay schedule to which the pay period belongs.   |
| `payroll`                                                                  | [components.PayPeriodPayroll](../../models/components/payperiodpayroll.md) | :heavy_minus_sign:                                                         | Information about the payroll for the pay period.                          |