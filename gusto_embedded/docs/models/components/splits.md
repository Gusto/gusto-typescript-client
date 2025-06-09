# Splits

## Example Usage

```typescript
import { Splits } from "@gusto/embedded-api/models/components/contractorpaymentdetailslist.js";

let value: Splits = {
  bankAccountUuid: "<id>",
  name: "<value>",
  hiddenAccountNumber: "<value>",
  routingNumber: "<value>",
  priority: 660705,
  splitAmount: 9249.52,
  accountType: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `bankAccountUuid`        | *string*                 | :heavy_check_mark:       | N/A                      |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `hiddenAccountNumber`    | *string*                 | :heavy_check_mark:       | N/A                      |
| `encryptedAccountNumber` | *string*                 | :heavy_minus_sign:       | N/A                      |
| `routingNumber`          | *string*                 | :heavy_check_mark:       | N/A                      |
| `priority`               | *number*                 | :heavy_check_mark:       | N/A                      |
| `splitAmount`            | *number*                 | :heavy_check_mark:       | N/A                      |
| `accountType`            | *string*                 | :heavy_check_mark:       | N/A                      |