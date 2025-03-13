# GetV1CompanyFormPdfResponse

## Example Usage

```typescript
import { GetV1CompanyFormPdfResponse } from "@gusto/embedded-api/models/operations/getv1companyformpdf.js";

let value: GetV1CompanyFormPdfResponse = {
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
| `formPdf`                                                          | [components.FormPdf](../../models/components/formpdf.md)           | :heavy_minus_sign:                                                 | Example response                                                   |