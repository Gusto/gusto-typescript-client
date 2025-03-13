# GetV1CompaniesAttachmentUrlResponse

## Example Usage

```typescript
import { GetV1CompaniesAttachmentUrlResponse } from "@gusto/embedded-api/models/operations/getv1companiesattachmenturl.js";

let value: GetV1CompaniesAttachmentUrlResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `object`                                                                                                                 | [operations.GetV1CompaniesAttachmentUrlResponseBody](../../models/operations/getv1companiesattachmenturlresponsebody.md) | :heavy_minus_sign:                                                                                                       | Example response                                                                                                         |