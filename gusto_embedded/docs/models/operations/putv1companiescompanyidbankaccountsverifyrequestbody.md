# PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody

## Example Usage

```typescript
import { PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody } from "@gusto/embedded-api/models/operations";

let value: PutV1CompaniesCompanyIdBankAccountsVerifyRequestBody = {
  deposit1: 6719.57,
  deposit2: 9488.61,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `deposit1`                                    | *number*                                      | :heavy_check_mark:                            | The dollar amount of the first micro-deposit  |
| `deposit2`                                    | *number*                                      | :heavy_check_mark:                            | The dollar amount of the second micro-deposit |