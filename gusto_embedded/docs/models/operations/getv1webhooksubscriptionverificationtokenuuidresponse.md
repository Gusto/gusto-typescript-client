# GetV1WebhookSubscriptionVerificationTokenUuidResponse

## Example Usage

```typescript
import { GetV1WebhookSubscriptionVerificationTokenUuidResponse } from "@gusto/embedded-api/models/operations/getv1webhooksubscriptionverificationtokenuuid.js";

let value: GetV1WebhookSubscriptionVerificationTokenUuidResponse = {
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