# PostV1CompaniesCompanyIdAdminsResponse

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdAdminsResponse } from "@gusto/embedded-api/models/operations/postv1companiescompanyidadmins.js";

let value: PostV1CompaniesCompanyIdAdminsResponse = {
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
| `admin`                                                            | [components.Admin](../../models/components/admin.md)               | :heavy_minus_sign:                                                 | Example response                                                   |