# PostV1CompaniesCompanyIdEarningTypesResponse

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdEarningTypesResponse } from "@gusto/embedded-api/models/operations/postv1companiescompanyidearningtypes.js";

let value: PostV1CompaniesCompanyIdEarningTypesResponse = {
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
| `earningType`                                                      | [components.EarningType](../../models/components/earningtype.md)   | :heavy_minus_sign:                                                 | Example response                                                   |