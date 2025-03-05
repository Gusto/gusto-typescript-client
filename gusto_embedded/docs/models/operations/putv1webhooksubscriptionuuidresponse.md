# PutV1WebhookSubscriptionUuidResponse

## Example Usage

```typescript
import { PutV1WebhookSubscriptionUuidResponse } from "@gusto/embedded-api/models/operations";

let value: PutV1WebhookSubscriptionUuidResponse = {
  contentType: "<value>",
  statusCode: 300,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `contentType`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | HTTP response content type for this operation                                    |
| `statusCode`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | HTTP response status code for this operation                                     |
| `rawResponse`                                                                    | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)            | :heavy_check_mark:                                                               | Raw HTTP response; suitable for custom response parsing                          |
| `webhookSubscription`                                                            | [components.WebhookSubscription](../../models/components/webhooksubscription.md) | :heavy_minus_sign:                                                               | Example response                                                                 |