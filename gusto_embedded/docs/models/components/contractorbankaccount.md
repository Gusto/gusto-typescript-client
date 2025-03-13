# ContractorBankAccount

Example response

## Example Usage

```typescript
import { ContractorBankAccount } from "@gusto/embedded-api/models/components/contractorbankaccount.js";

let value: ContractorBankAccount = {
  uuid: "0232c8ad-35b6-406e-b65f-a51cbe31b325",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | UUID of the bank account                                                                                   |
| `contractorUuid`                                                                                           | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | UUID of the employee                                                                                       |
| `accountType`                                                                                              | [components.ContractorBankAccountAccountType](../../models/components/contractorbankaccountaccounttype.md) | :heavy_minus_sign:                                                                                         | Bank account type                                                                                          |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Name for the bank account                                                                                  |
| `routingNumber`                                                                                            | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The bank account's routing number                                                                          |
| `hiddenAccountNumber`                                                                                      | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Masked bank account number                                                                                 |