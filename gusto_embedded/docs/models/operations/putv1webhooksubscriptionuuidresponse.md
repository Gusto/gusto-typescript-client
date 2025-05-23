# PutV1WebhookSubscriptionUuidResponse

## Example Usage

```typescript
import { PutV1WebhookSubscriptionUuidResponse } from "@gusto/embedded-api/models/operations/putv1webhooksubscriptionuuid.js";

let value: PutV1WebhookSubscriptionUuidResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `webhookSubscription`                                                            | [components.WebhookSubscription](../../models/components/webhooksubscription.md) | :heavy_minus_sign:                                                               | Example response                                                                 |