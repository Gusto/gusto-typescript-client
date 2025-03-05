# WebhookSubscription

The representation of webhook subscription.

## Example Usage

```typescript
import { WebhookSubscription } from "@gusto/embedded-api/models/components/webhooksubscription.js";

let value: WebhookSubscription = {
  uuid: "58116467-ff2e-4182-b5b6-cbf8c5566181",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `uuid`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The UUID of the webhook subscription.                                                        |
| `url`                                                                                        | *string*                                                                                     | :heavy_minus_sign:                                                                           | The webhook subscriber URL. Updates will be POSTed to this URL.                              |
| `status`                                                                                     | [components.WebhookSubscriptionStatus](../../models/components/webhooksubscriptionstatus.md) | :heavy_minus_sign:                                                                           | The status of the webhook subscription.                                                      |
| `subscriptionTypes`                                                                          | [components.SubscriptionTypes](../../models/components/subscriptiontypes.md)[]               | :heavy_minus_sign:                                                                           | Receive updates for these types.                                                             |