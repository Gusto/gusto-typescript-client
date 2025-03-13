# PutV1ContractorDocumentSignResponse

## Example Usage

```typescript
import { PutV1ContractorDocumentSignResponse } from "@gusto/embedded-api/models/operations/putv1contractordocumentsign.js";

let value: PutV1ContractorDocumentSignResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `httpMeta`                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)     | :heavy_check_mark:                                                     | N/A                                                                    |
| `documentSigned`                                                       | [components.DocumentSigned](../../models/components/documentsigned.md) | :heavy_minus_sign:                                                     | Example response                                                       |