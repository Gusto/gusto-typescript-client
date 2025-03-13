# GetV1CompaniesCompanyIdCustomFieldsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdCustomFieldsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidcustomfields.js";

let value: GetV1CompaniesCompanyIdCustomFieldsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `httpMeta`                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `companyCustomFieldList`                                                               | [components.CompanyCustomFieldList](../../models/components/companycustomfieldlist.md) | :heavy_minus_sign:                                                                     | Example response                                                                       |