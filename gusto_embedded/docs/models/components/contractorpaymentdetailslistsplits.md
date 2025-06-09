# ContractorPaymentDetailsListSplits

## Example Usage

```typescript
import { ContractorPaymentDetailsListSplits } from "@gusto/embedded-api/models/components/contractorpaymentdetailslist.js";

let value: ContractorPaymentDetailsListSplits = {
  bankAccountUuid: "<id>",
  name: "<value>",
  hiddenAccountNumber: "<value>",
  routingNumber: "<value>",
  priority: 202279,
  splitAmount: 8159.46,
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