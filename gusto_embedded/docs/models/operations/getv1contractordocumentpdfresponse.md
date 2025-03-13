# GetV1ContractorDocumentPdfResponse

## Example Usage

```typescript
import { GetV1ContractorDocumentPdfResponse } from "@gusto/embedded-api/models/operations/getv1contractordocumentpdf.js";

let value: GetV1ContractorDocumentPdfResponse = {
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
| `documentPdf`                                                      | [components.DocumentPdf](../../models/components/documentpdf.md)   | :heavy_minus_sign:                                                 | Example response                                                   |