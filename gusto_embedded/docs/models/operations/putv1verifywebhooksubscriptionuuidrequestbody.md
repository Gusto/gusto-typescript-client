# PutV1VerifyWebhookSubscriptionUuidRequestBody

## Example Usage

```typescript
import { PutV1VerifyWebhookSubscriptionUuidRequestBody } from "@gusto/embedded-api/models/operations";

let value: PutV1VerifyWebhookSubscriptionUuidRequestBody = {
  verificationToken: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `verificationToken`                       | *string*                                  | :heavy_check_mark:                        | The token POSTed to the Subscription URL. |