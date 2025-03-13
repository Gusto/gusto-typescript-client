# PostV1PlaidProcessorTokenResponse

## Example Usage

```typescript
import { PostV1PlaidProcessorTokenResponse } from "@gusto/embedded-api/models/operations/postv1plaidprocessortoken.js";

let value: PostV1PlaidProcessorTokenResponse = {
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
| `oneOf`                                                            | *operations.PostV1PlaidProcessorTokenResponseBody*                 | :heavy_minus_sign:                                                 | A JSON object containing bank information                          |