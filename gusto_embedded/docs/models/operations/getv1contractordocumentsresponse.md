# GetV1ContractorDocumentsResponse

## Example Usage

```typescript
import { GetV1ContractorDocumentsResponse } from "@gusto/embedded-api/models/operations/getv1contractordocuments.js";

let value: GetV1ContractorDocumentsResponse = {
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
| `documents`                                                        | [components.Document](../../models/components/document.md)[]       | :heavy_minus_sign:                                                 | Example response                                                   |