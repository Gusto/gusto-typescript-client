# GetV1CompaniesCompanyUuidTaxRequirementsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyUuidTaxRequirementsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyuuidtaxrequirements.js";

let value: GetV1CompaniesCompanyUuidTaxRequirementsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `httpMeta`                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)   | :heavy_check_mark:                                                   | N/A                                                                  |
| `responseBodies`                                                     | [operations.ResponseBody](../../models/operations/responsebody.md)[] | :heavy_minus_sign:                                                   | OK                                                                   |