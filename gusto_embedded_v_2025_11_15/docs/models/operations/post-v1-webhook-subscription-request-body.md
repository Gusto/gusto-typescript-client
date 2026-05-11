# PostV1WebhookSubscriptionRequestBody

## Example Usage

```typescript
import { PostV1WebhookSubscriptionRequestBody } from "openapi/models/operations";

let value: PostV1WebhookSubscriptionRequestBody = {
  url: "https://expert-bin.biz/",
  subscriptionTypes: [],
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                               | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | The URL where webhook events will be POSTed.                                                                                        |
| `subscriptionTypes`                                                                                                                 | [operations.PostV1WebhookSubscriptionSubscriptionType](../../models/operations/post-v1-webhook-subscription-subscription-type.md)[] | :heavy_check_mark:                                                                                                                  | The types of events to subscribe to.                                                                                                |