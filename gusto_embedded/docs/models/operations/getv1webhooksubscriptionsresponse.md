# GetV1WebhookSubscriptionsResponse

## Example Usage

```typescript
import { GetV1WebhookSubscriptionsResponse } from "@gusto/embedded-api/models/operations/getv1webhooksubscriptions.js";

let value: GetV1WebhookSubscriptionsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `httpMeta`                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `webhookSubscriptionsList`                                                         | [components.WebhookSubscription](../../models/components/webhooksubscription.md)[] | :heavy_minus_sign:                                                                 | Example response                                                                   |