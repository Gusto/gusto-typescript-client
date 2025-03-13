# PostV1WebhookSubscriptionResponse

## Example Usage

```typescript
import { PostV1WebhookSubscriptionResponse } from "@gusto/embedded-api/models/operations/postv1webhooksubscription.js";

let value: PostV1WebhookSubscriptionResponse = {
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