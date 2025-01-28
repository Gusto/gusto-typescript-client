# PaidTimeOff

The representation of paid time off in Gusto.

## Example Usage

```typescript
import { PaidTimeOff } from "openapi/models/components";

let value: PaidTimeOff = {
  accrualUnit: "Hour",
  accrualMethod: "unlimited",
  accrualPeriod: "Year",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `name`                                                                          | [components.Name](../../models/components/name.md)                              | :heavy_minus_sign:                                                              | The name of the paid time off type.                                             |                                                                                 |
| `policyName`                                                                    | *string*                                                                        | :heavy_minus_sign:                                                              | The name of the time off policy.                                                |                                                                                 |
| `policyUuid`                                                                    | *string*                                                                        | :heavy_minus_sign:                                                              | The UUID of the time off policy.                                                |                                                                                 |
| `accrualUnit`                                                                   | *string*                                                                        | :heavy_minus_sign:                                                              | The unit the PTO type is accrued in.                                            | Hour                                                                            |
| `accrualRate`                                                                   | *string*                                                                        | :heavy_minus_sign:                                                              | The number of accrual units accrued per accrual period.                         |                                                                                 |
| `accrualMethod`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | The accrual method of the time off policy                                       | unlimited                                                                       |
| `accrualPeriod`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | The frequency at which the PTO type is accrued.                                 | Year                                                                            |
| `accrualBalance`                                                                | *string*                                                                        | :heavy_minus_sign:                                                              | The number of accrual units accrued.                                            |                                                                                 |
| `maximumAccrualBalance`                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | The maximum number of accrual units allowed. A null value signifies no maximum. |                                                                                 |
| `paidAtTermination`                                                             | *boolean*                                                                       | :heavy_minus_sign:                                                              | Whether the accrual balance is paid to the employee upon termination.           |                                                                                 |