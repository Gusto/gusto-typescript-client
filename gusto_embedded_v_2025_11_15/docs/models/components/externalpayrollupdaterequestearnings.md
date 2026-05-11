# ExternalPayrollUpdateRequestEarnings

## Example Usage

```typescript
import { ExternalPayrollUpdateRequestEarnings } from "@gusto/embedded-api-v-2025-11-15/models/components/externalpayrollupdaterequest.js";

let value: ExternalPayrollUpdateRequestEarnings = {
  earningType: "CompanyPayType",
  earningId: 1,
  amount: "10000.00",
  hours: "80.0",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `earningType`                                                                                                            | [components.ExternalPayrollUpdateRequestEarningType](../../models/components/externalpayrollupdaterequestearningtype.md) | :heavy_minus_sign:                                                                                                       | The earning type class name.                                                                                             | CompanyPayType                                                                                                           |
| `earningId`                                                                                                              | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The ID of the earning type.                                                                                              | 1                                                                                                                        |
| `amount`                                                                                                                 | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The earning amount in dollars.                                                                                           | 10000.00                                                                                                                 |
| `hours`                                                                                                                  | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The number of hours worked.                                                                                              | 80.0                                                                                                                     |