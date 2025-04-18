# GetReportsReportUuidResponse

## Example Usage

```typescript
import { GetReportsReportUuidResponse } from "@gusto/embedded-api/models/operations/getreportsreportuuid.js";

let value: GetReportsReportUuidResponse = {
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
| `report`                                                           | [components.Report](../../models/components/report.md)             | :heavy_minus_sign:                                                 | Example response                                                   |