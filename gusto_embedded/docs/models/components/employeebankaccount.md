# EmployeeBankAccount

Example response

## Example Usage

```typescript
import { EmployeeBankAccount } from "@gusto/embedded-api/models/components/employeebankaccount.js";

let value: EmployeeBankAccount = {
  uuid: "844559a4-2092-40e8-b1df-7016e2d07a09",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `uuid`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | UUID of the bank account                                                                               |
| `employeeUuid`                                                                                         | *string*                                                                                               | :heavy_minus_sign:                                                                                     | UUID of the employee                                                                                   |
| `accountType`                                                                                          | [components.EmployeeBankAccountAccountType](../../models/components/employeebankaccountaccounttype.md) | :heavy_minus_sign:                                                                                     | Bank account type                                                                                      |
| `name`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Name for the bank account                                                                              |
| `routingNumber`                                                                                        | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The bank account's routing number                                                                      |
| `hiddenAccountNumber`                                                                                  | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Masked bank account number                                                                             |