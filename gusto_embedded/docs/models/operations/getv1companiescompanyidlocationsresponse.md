# GetV1CompaniesCompanyIdLocationsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdLocationsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidlocations.js";

let value: GetV1CompaniesCompanyIdLocationsResponse = {
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
| `locationList`                                                     | [components.Location](../../models/components/location.md)[]       | :heavy_minus_sign:                                                 | Example response                                                   |