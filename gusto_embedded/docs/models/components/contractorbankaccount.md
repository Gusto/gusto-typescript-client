# ContractorBankAccount

Example response

## Example Usage

```typescript
import { ContractorBankAccount } from "@gusto/embedded-api/models/components/contractorbankaccount.js";

let value: ContractorBankAccount = {
  uuid: "f09b4fde-094d-4a81-a8af-9ffa87e011c5",
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