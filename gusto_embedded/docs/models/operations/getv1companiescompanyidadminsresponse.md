# GetV1CompaniesCompanyIdAdminsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdAdminsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidadmins.js";

let value: GetV1CompaniesCompanyIdAdminsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `adminList`                                                        | [components.Admin](../../models/components/admin.md)[]             | :heavy_minus_sign:                                                 | Example response                                                   |