# GetV1ContractorFormResponse

## Example Usage

```typescript
import { GetV1ContractorFormResponse } from "@gusto/embedded-api/models/operations/getv1contractorform.js";

let value: GetV1ContractorFormResponse = {
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
| `form1099`                                                         | [components.Form1099](../../models/components/form1099.md)         | :heavy_minus_sign:                                                 | Example response                                                   |