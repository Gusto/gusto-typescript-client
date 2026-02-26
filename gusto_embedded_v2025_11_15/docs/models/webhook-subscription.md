# WebhookSubscription

The representation of webhook subscription.

## Example Usage

```typescript
import { WebhookSubscription } from "openapi/models";

let value: WebhookSubscription = {
  uuid: "f2ff9b63-a523-49f2-b2e2-1d74a4c6d547",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The UUID of the webhook subscription.                                        |
| `url`                                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | The webhook subscriber URL. Updates will be POSTed to this URL.              |
| `status`                                                                     | [models.WebhookSubscriptionStatus](../models/webhook-subscription-status.md) | :heavy_minus_sign:                                                           | The status of the webhook subscription.                                      |
| `subscriptionTypes`                                                          | [models.SubscriptionType](../models/subscription-type.md)[]                  | :heavy_minus_sign:                                                           | Receive updates for these types.                                             |