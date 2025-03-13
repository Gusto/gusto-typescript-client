# PostV1CompanyFlowsResponse

## Example Usage

```typescript
import { PostV1CompanyFlowsResponse } from "@gusto/embedded-api/models/operations/postv1companyflows.js";

let value: PostV1CompanyFlowsResponse = {
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
| `flow`                                                             | [components.Flow](../../models/components/flow.md)                 | :heavy_minus_sign:                                                 | Example response                                                   |