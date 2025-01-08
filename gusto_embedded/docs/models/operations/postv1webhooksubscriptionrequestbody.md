# PostV1WebhookSubscriptionRequestBody

## Example Usage

```typescript
import { PostV1WebhookSubscriptionRequestBody } from "gusto_embedded/models/operations";

let value: PostV1WebhookSubscriptionRequestBody = {
  url: "https://entire-obesity.com/",
  subscriptionTypes: [
    "BankAccount",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `url`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `subscriptionTypes`                                                            | [operations.SubscriptionTypes](../../models/operations/subscriptiontypes.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |