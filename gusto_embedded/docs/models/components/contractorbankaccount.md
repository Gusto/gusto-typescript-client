# ContractorBankAccount

## Example Usage

```typescript
import { ContractorBankAccount } from "@gusto/embedded-api/models/components/contractorbankaccount.js";

let value: ContractorBankAccount = {
  uuid: "97315eac-0778-4bb3-a940-156aaaf4d0b4",
  contractorUuid: "<id>",
  accountType: "Savings",
  name: "<value>",
  routingNumber: "<value>",
  hiddenAccountNumber: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | UUID of the bank account                                                                                   |
| `contractorUuid`                                                                                           | *string*                                                                                                   | :heavy_check_mark:                                                                                         | UUID of the contractor                                                                                     |
| `accountType`                                                                                              | [components.ContractorBankAccountAccountType](../../models/components/contractorbankaccountaccounttype.md) | :heavy_check_mark:                                                                                         | Bank account type                                                                                          |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Name for the bank account                                                                                  |
| `routingNumber`                                                                                            | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The bank account's routing number                                                                          |
| `hiddenAccountNumber`                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Masked bank account number                                                                                 |