# GetV1CompaniesAttachmentResponse

## Example Usage

```typescript
import { GetV1CompaniesAttachmentResponse } from "@gusto/embedded-api/models/operations/getv1companiesattachment.js";

let value: GetV1CompaniesAttachmentResponse = {
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
| `companyAttachment`                                                          | [components.CompanyAttachment](../../models/components/companyattachment.md) | :heavy_minus_sign:                                                           | Example response                                                             |