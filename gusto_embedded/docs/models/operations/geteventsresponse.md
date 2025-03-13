# GetEventsResponse

## Example Usage

```typescript
import { GetEventsResponse } from "@gusto/embedded-api/models/operations/getevents.js";

let value: GetEventsResponse = {
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
| `eventList`                                                        | [components.Event](../../models/components/event.md)[]             | :heavy_minus_sign:                                                 | Example response                                                   |