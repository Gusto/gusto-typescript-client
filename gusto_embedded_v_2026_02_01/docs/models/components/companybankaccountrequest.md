# CompanyBankAccountRequest

## Example Usage

```typescript
import { CompanyBankAccountRequest } from "@gusto/embedded-api/models/components/companybankaccountrequest.js";

let value: CompanyBankAccountRequest = {
  routingNumber: "<value>",
  accountNumber: "<value>",
  accountType: "Savings",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `routingNumber`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The bank routing number                                                                                            |
| `accountNumber`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The bank account number                                                                                            |
| `accountType`                                                                                                      | [components.CompanyBankAccountRequestAccountType](../../models/components/companybankaccountrequestaccounttype.md) | :heavy_check_mark:                                                                                                 | The bank account type                                                                                              |