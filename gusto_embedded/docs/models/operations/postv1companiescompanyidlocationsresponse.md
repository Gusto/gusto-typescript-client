# PostV1CompaniesCompanyIdLocationsResponse

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdLocationsResponse } from "@gusto/embedded-api/models/operations/postv1companiescompanyidlocations.js";

let value: PostV1CompaniesCompanyIdLocationsResponse = {
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
| `location`                                                         | [components.Location](../../models/components/location.md)         | :heavy_minus_sign:                                                 | Example response                                                   |