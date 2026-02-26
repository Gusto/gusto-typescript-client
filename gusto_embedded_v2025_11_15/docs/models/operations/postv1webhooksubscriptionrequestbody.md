# PostV1WebhookSubscriptionRequestBody

## Example Usage

```typescript
import { PostV1WebhookSubscriptionRequestBody } from "@gusto/embedded-api-v2025-11-15/models/operations/postv1webhooksubscription.js";

let value: PostV1WebhookSubscriptionRequestBody = {
  url: "https://expert-bin.biz/",
  subscriptionTypes: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `url`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `subscriptionTypes`                                                            | [operations.SubscriptionTypes](../../models/operations/subscriptiontypes.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |