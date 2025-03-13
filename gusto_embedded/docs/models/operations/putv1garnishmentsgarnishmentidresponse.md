# PutV1GarnishmentsGarnishmentIdResponse

## Example Usage

```typescript
import { PutV1GarnishmentsGarnishmentIdResponse } from "@gusto/embedded-api/models/operations/putv1garnishmentsgarnishmentid.js";

let value: PutV1GarnishmentsGarnishmentIdResponse = {
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
| `garnishment`                                                      | [components.Garnishment](../../models/components/garnishment.md)   | :heavy_minus_sign:                                                 | Example response                                                   |