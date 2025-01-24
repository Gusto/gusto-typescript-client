# PostV1CompaniesCompanyIdBankAccountsRequestBody

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdBankAccountsRequestBody } from "gusto-embedded/models/operations";

let value: PostV1CompaniesCompanyIdBankAccountsRequestBody = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `routingNumber`                                                  | *string*                                                         | :heavy_minus_sign:                                               | The bank routing number                                          |
| `accountNumber`                                                  | *string*                                                         | :heavy_minus_sign:                                               | The bank account number                                          |
| `accountType`                                                    | [operations.AccountType](../../models/operations/accounttype.md) | :heavy_minus_sign:                                               | The bank account type                                            |