# GetEventsResponse

## Example Usage

```typescript
import { GetEventsResponse } from "@gusto/embedded-api-v2025-11-15/models/operations/getevents.js";

let value: GetEventsResponse = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `eventList`                                                        | [components.Event](../../models/components/event.md)[]             | :heavy_minus_sign:                                                 | Successful                                                         |