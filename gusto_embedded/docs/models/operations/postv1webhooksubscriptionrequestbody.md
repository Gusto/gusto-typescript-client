# PostV1WebhookSubscriptionRequestBody

## Example Usage

```typescript
import { PostV1WebhookSubscriptionRequestBody } from "@gusto/embedded-api/models/operations";

let value: PostV1WebhookSubscriptionRequestBody = {
  url: "https://lasting-fit.org/",
  subscriptionTypes: [
    "CompanyBenefit",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `url`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `subscriptionTypes`                                                            | [operations.SubscriptionTypes](../../models/operations/subscriptiontypes.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |