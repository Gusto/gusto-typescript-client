# PutV1CompaniesCompanyIdBankAccountsVerifyResponse

## Example Usage

```typescript
import { PutV1CompaniesCompanyIdBankAccountsVerifyResponse } from "@gusto/embedded-api/models/operations/putv1companiescompanyidbankaccountsverify.js";

let value: PutV1CompaniesCompanyIdBankAccountsVerifyResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `httpMeta`                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)             | :heavy_check_mark:                                                             | N/A                                                                            |
| `companyBankAccount`                                                           | [components.CompanyBankAccount](../../models/components/companybankaccount.md) | :heavy_minus_sign:                                                             | Example response                                                               |