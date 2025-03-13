# GetNotificationsNotificationUuidResponse

## Example Usage

```typescript
import { GetNotificationsNotificationUuidResponse } from "@gusto/embedded-api/models/operations/getnotificationsnotificationuuid.js";

let value: GetNotificationsNotificationUuidResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `notification`                                                     | [components.Notification](../../models/components/notification.md) | :heavy_minus_sign:                                                 | Example response                                                   |