# GetV1CompaniesCompanyIdBankAccountsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdBankAccountsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidbankaccounts.js";

let value: GetV1CompaniesCompanyIdBankAccountsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `companyBankAccountList`                                                         | [components.CompanyBankAccount](../../models/components/companybankaccount.md)[] | :heavy_minus_sign:                                                               | Example response                                                                 |