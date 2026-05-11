# ExternalPayrollUpdateRequestEarning

## Example Usage

```typescript
import { ExternalPayrollUpdateRequestEarning } from "openapi/models";

let value: ExternalPayrollUpdateRequestEarning = {
  earningType: "CompanyPayType",
  earningId: 1,
  amount: "10000.00",
  hours: "80.0",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `earningType`                                            | [models.EarningTypeEnum](../models/earning-type-enum.md) | :heavy_minus_sign:                                       | The earning type class name.                             | CompanyPayType                                           |
| `earningId`                                              | *number*                                                 | :heavy_minus_sign:                                       | The ID of the earning type.                              | 1                                                        |
| `amount`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The earning amount in dollars.                           | 10000.00                                                 |
| `hours`                                                  | *string*                                                 | :heavy_minus_sign:                                       | The number of hours worked.                              | 80.0                                                     |