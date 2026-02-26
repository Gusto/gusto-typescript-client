# EmployeeBankAccount

Example response

## Example Usage

```typescript
import { EmployeeBankAccount } from "openapi/models";

let value: EmployeeBankAccount = {
  uuid: "5535f674-d641-451a-b20b-c1727d7cc2d2",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `uuid`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | UUID of the bank account                                                                 |
| `employeeUuid`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | UUID of the employee                                                                     |
| `accountType`                                                                            | [models.EmployeeBankAccountAccountType](../models/employee-bank-account-account-type.md) | :heavy_minus_sign:                                                                       | Bank account type                                                                        |
| `name`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | Name for the bank account                                                                |
| `routingNumber`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | The bank account's routing number                                                        |
| `hiddenAccountNumber`                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | Masked bank account number                                                               |