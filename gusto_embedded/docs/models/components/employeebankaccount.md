# EmployeeBankAccount

Example response

## Example Usage

```typescript
import { EmployeeBankAccount } from "@gusto/embedded-api/models/components";

let value: EmployeeBankAccount = {
  uuid: "e2e64ff3-a1ad-4a66-b69e-e021358abefa",
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