# GetV1WebhookSubscriptionVerificationTokenUuidResponse

## Example Usage

```typescript
import { GetV1WebhookSubscriptionVerificationTokenUuidResponse } from "@gusto/embedded-api/models/operations/getv1webhooksubscriptionverificationtokenuuid.js";

let value: GetV1WebhookSubscriptionVerificationTokenUuidResponse = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `webhookVerificationTokenResponse`                                                                         | [components.WebhookVerificationTokenResponse](../../models/components/webhookverificationtokenresponse.md) | :heavy_minus_sign:                                                                                         | No Content. The `verification_token` is POSTed to the Subscription URL.                                    |