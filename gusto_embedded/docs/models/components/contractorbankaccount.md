# ContractorBankAccount

Example response

## Example Usage

```typescript
import { ContractorBankAccount } from "@gusto/embedded-api/models/components";

let value: ContractorBankAccount = {
  uuid: "a1fbd979-87c2-4265-b1dc-8f1c453c2da0",
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