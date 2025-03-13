# PostV1CompensationsCompensationIdResponse

## Example Usage

```typescript
import { PostV1CompensationsCompensationIdResponse } from "@gusto/embedded-api/models/operations/postv1compensationscompensationid.js";

let value: PostV1CompensationsCompensationIdResponse = {
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
| `compensation`                                                     | [components.Compensation](../../models/components/compensation.md) | :heavy_minus_sign:                                                 | Example response                                                   |