# WebhookSubscription

The representation of webhook subscription.

## Example Usage

```typescript
import { WebhookSubscription } from "@gusto/embedded-api/models/components";

let value: WebhookSubscription = {
  uuid: "b8d484f3-0580-48db-b9ff-d9709fd52cbf",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `uuid`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The UUID of the webhook subscription.                                                        |
| `url`                                                                                        | *string*                                                                                     | :heavy_minus_sign:                                                                           | The webhook subscriber URL. Updates will be POSTed to this URL.                              |
| `status`                                                                                     | [components.WebhookSubscriptionStatus](../../models/components/webhooksubscriptionstatus.md) | :heavy_minus_sign:                                                                           | The status of the webhook subscription.                                                      |
| `subscriptionTypes`                                                                          | [components.SubscriptionTypes](../../models/components/subscriptiontypes.md)[]               | :heavy_minus_sign:                                                                           | Receive updates for these types.                                                             |