# PutV1LocationsLocationIdResponse

## Example Usage

```typescript
import { PutV1LocationsLocationIdResponse } from "@gusto/embedded-api/models/operations/putv1locationslocationid.js";

let value: PutV1LocationsLocationIdResponse = {
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
| `location`                                                         | [components.Location](../../models/components/location.md)         | :heavy_minus_sign:                                                 | successful                                                         |