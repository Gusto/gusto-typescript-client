# CompanyBankAccountRequest

## Example Usage

```typescript
import { CompanyBankAccountRequest } from "openapi/models";

let value: CompanyBankAccountRequest = {
  routingNumber: "<value>",
  accountNumber: "<value>",
  accountType: "Savings",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `routingNumber`                                                                                       | *string*                                                                                              | :heavy_check_mark:                                                                                    | The bank routing number                                                                               |
| `accountNumber`                                                                                       | *string*                                                                                              | :heavy_check_mark:                                                                                    | The bank account number                                                                               |
| `accountType`                                                                                         | [models.CompanyBankAccountRequestAccountType](../models/company-bank-account-request-account-type.md) | :heavy_check_mark:                                                                                    | The bank account type                                                                                 |