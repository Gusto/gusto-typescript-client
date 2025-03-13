# PostV1JobsJobIdResponse

## Example Usage

```typescript
import { PostV1JobsJobIdResponse } from "@gusto/embedded-api/models/operations/postv1jobsjobid.js";

let value: PostV1JobsJobIdResponse = {
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
| `job`                                                              | [components.Job](../../models/components/job.md)                   | :heavy_minus_sign:                                                 | Example response                                                   |