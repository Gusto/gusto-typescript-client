# PutV1VerifyWebhookSubscriptionUuidRequestBody

## Example Usage

```typescript
import { PutV1VerifyWebhookSubscriptionUuidRequestBody } from "@gusto/embedded-api-v-2026-02-01/models/operations/putv1verifywebhooksubscriptionuuid.js";

let value: PutV1VerifyWebhookSubscriptionUuidRequestBody = {
  verificationToken: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `verificationToken`                                              | *string*                                                         | :heavy_check_mark:                                               | The verification token received at the webhook subscription URL. |