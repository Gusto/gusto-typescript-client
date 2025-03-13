# PutV1CompanyIndustryResponse

## Example Usage

```typescript
import { PutV1CompanyIndustryResponse } from "@gusto/embedded-api/models/operations/putv1companyindustry.js";

let value: PutV1CompanyIndustryResponse = {
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
| `industry`                                                         | [components.Industry](../../models/components/industry.md)         | :heavy_minus_sign:                                                 | Example response                                                   |