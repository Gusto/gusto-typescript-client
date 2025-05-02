# PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody

## Example Usage

```typescript
import { PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody } from "@gusto/embedded-api/models/operations/putv1companiescompanyidbankaccountsverify.js";

let value: PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody = {
  deposit1: 9569.41,
  deposit2: 8746.82,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `deposit1`                                    | *number*                                      | :heavy_check_mark:                            | The dollar amount of the first micro-deposit  |
| `deposit2`                                    | *number*                                      | :heavy_check_mark:                            | The dollar amount of the second micro-deposit |