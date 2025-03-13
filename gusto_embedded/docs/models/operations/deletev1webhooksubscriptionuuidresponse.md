# DeleteV1WebhookSubscriptionUuidResponse

## Example Usage

```typescript
import { DeleteV1WebhookSubscriptionUuidResponse } from "@gusto/embedded-api/models/operations/deletev1webhooksubscriptionuuid.js";

let value: DeleteV1WebhookSubscriptionUuidResponse = {
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