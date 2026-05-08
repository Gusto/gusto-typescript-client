# GetV1WebhookSubscriptionsResponse

## Example Usage

```typescript
import { GetV1WebhookSubscriptionsResponse } from "@gusto/embedded-api/models/operations/getv1webhooksubscriptions.js";

let value: GetV1WebhookSubscriptionsResponse = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `httpMeta`                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `webhookSubscriptions`                                                             | [components.WebhookSubscription](../../models/components/webhooksubscription.md)[] | :heavy_minus_sign:                                                                 | successful                                                                         |