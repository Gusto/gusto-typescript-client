# GetV1CompaniesCompanyIdBankAccountsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdBankAccountsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidbankaccounts.js";

let value: GetV1CompaniesCompanyIdBankAccountsResponse = {
  contentType: "<value>",
  statusCode: 306,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `contentType`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | HTTP response content type for this operation                                    |
| `statusCode`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | HTTP response status code for this operation                                     |
| `rawResponse`                                                                    | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)            | :heavy_check_mark:                                                               | Raw HTTP response; suitable for custom response parsing                          |
| `companyBankAccountList`                                                         | [components.CompanyBankAccount](../../models/components/companybankaccount.md)[] | :heavy_minus_sign:                                                               | Example response                                                                 |