# ContractorBankAccountCreateRequestBody

## Example Usage

```typescript
import { ContractorBankAccountCreateRequestBody } from "@gusto/embedded-api/models/components/contractorbankaccountcreaterequestbody.js";

let value: ContractorBankAccountCreateRequestBody = {
  name: "<value>",
  routingNumber: "<value>",
  accountNumber: "<value>",
  accountType: "Checking",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                       | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Name for the bank account                                                                                                                    |
| `routingNumber`                                                                                                                              | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The bank account's routing number                                                                                                            |
| `accountNumber`                                                                                                                              | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The bank account's account number                                                                                                            |
| `accountType`                                                                                                                                | [components.ContractorBankAccountCreateRequestBodyAccountType](../../models/components/contractorbankaccountcreaterequestbodyaccounttype.md) | :heavy_check_mark:                                                                                                                           | Bank account type                                                                                                                            |