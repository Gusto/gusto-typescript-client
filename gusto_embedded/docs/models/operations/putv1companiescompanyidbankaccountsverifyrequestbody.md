# PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody

## Example Usage

```typescript
import { PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody } from "gusto_embedded/models/operations";

let value: PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody = {
  deposit1: 114.27,
  deposit2: 7705.81,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `deposit1`                                    | *number*                                      | :heavy_check_mark:                            | The dollar amount of the first micro-deposit  |
| `deposit2`                                    | *number*                                      | :heavy_check_mark:                            | The dollar amount of the second micro-deposit |