# EmployeeBankAccountRequest

Request body for creating or updating an employee bank account. Send these fields as top-level JSON keys (the API wraps them server-side).

## Example Usage

```typescript
import { EmployeeBankAccountRequest } from "@gusto/embedded-api-v-2026-02-01/models/components/employeebankaccountrequest.js";

let value: EmployeeBankAccountRequest = {
  routingNumber: "266905059",
  accountNumber: "5809431207",
  accountType: "Checking",
  name: "BoA Checking Account",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `routingNumber`                                                                                                      | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The bank routing number (nine digits).                                                                               | 266905059                                                                                                            |
| `accountNumber`                                                                                                      | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The bank account number.                                                                                             | 5809431207                                                                                                           |
| `accountType`                                                                                                        | [components.EmployeeBankAccountRequestAccountType](../../models/components/employeebankaccountrequestaccounttype.md) | :heavy_check_mark:                                                                                                   | The bank account type.                                                                                               | Checking                                                                                                             |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | A name for the bank account (e.g. "Primary Checking").                                                               | BoA Checking Account                                                                                                 |