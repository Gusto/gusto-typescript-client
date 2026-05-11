# ContractorBankAccountCreateRequestBody

## Example Usage

```typescript
import { ContractorBankAccountCreateRequestBody } from "openapi/models";

let value: ContractorBankAccountCreateRequestBody = {
  name: "<value>",
  routingNumber: "<value>",
  accountNumber: "<value>",
  accountType: "Checking",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                            | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | Name for the bank account                                                                                                         |
| `routingNumber`                                                                                                                   | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The bank account's routing number                                                                                                 |
| `accountNumber`                                                                                                                   | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The bank account's account number                                                                                                 |
| `accountType`                                                                                                                     | [models.ContractorBankAccountCreateRequestBodyAccountType](../models/contractor-bank-account-create-request-body-account-type.md) | :heavy_check_mark:                                                                                                                | Bank account type                                                                                                                 |