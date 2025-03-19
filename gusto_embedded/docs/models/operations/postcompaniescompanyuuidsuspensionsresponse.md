# PostCompaniesCompanyUuidSuspensionsResponse

## Example Usage

```typescript
import { PostCompaniesCompanyUuidSuspensionsResponse } from "@gusto/embedded-api/models/operations/postcompaniescompanyuuidsuspensions.js";

let value: PostCompaniesCompanyUuidSuspensionsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `httpMeta`                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)           | :heavy_check_mark:                                                           | N/A                                                                          |
| `companySuspension`                                                          | [components.CompanySuspension](../../models/components/companysuspension.md) | :heavy_minus_sign:                                                           | Example response                                                             |