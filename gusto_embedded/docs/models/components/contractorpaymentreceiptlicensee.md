# ContractorPaymentReceiptLicensee

The licensed payroll processor

## Example Usage

```typescript
import { ContractorPaymentReceiptLicensee } from "@gusto/embedded-api/models/components/contractorpaymentreceipt.js";

let value: ContractorPaymentReceiptLicensee = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `name`                                           | *string*                                         | :heavy_minus_sign:                               | Always the fixed string "Gusto, Zenpayroll Inc." |
| `address`                                        | *string*                                         | :heavy_minus_sign:                               | Always the fixed string "525 20th St"            |
| `city`                                           | *string*                                         | :heavy_minus_sign:                               | Always the fixed string "San Francisco"          |
| `state`                                          | *string*                                         | :heavy_minus_sign:                               | Always the fixed string "CA"                     |
| `postalCode`                                     | *string*                                         | :heavy_minus_sign:                               | Always the fixed string "94107"                  |
| `phoneNumber`                                    | *string*                                         | :heavy_minus_sign:                               | Always the fixed string "4157778888"             |