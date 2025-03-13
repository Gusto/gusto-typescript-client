# GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse

## Example Usage

```typescript
import { GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse } from "@gusto/embedded-api/models/operations/getv1generateddocumentsdocumenttyperequestuuid.js";

let value: GetV1GeneratedDocumentsDocumentTypeRequestUuidResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `httpMeta`                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)           | :heavy_check_mark:                                                           | N/A                                                                          |
| `generatedDocument`                                                          | [components.GeneratedDocument](../../models/components/generateddocument.md) | :heavy_minus_sign:                                                           | Example response                                                             |