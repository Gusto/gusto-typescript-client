# PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody

## Example Usage

```typescript
import { PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody } from "@gusto/embedded-api/models/operations";

let value: PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody = {
  deposit1: 8817.21,
  deposit2: 2724.37,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `deposit1`                                    | *number*                                      | :heavy_check_mark:                            | The dollar amount of the first micro-deposit  |
| `deposit2`                                    | *number*                                      | :heavy_check_mark:                            | The dollar amount of the second micro-deposit |