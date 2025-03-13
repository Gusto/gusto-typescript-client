# GetV1CompaniesAttachmentsResponse

## Example Usage

```typescript
import { GetV1CompaniesAttachmentsResponse } from "@gusto/embedded-api/models/operations/getv1companiesattachments.js";

let value: GetV1CompaniesAttachmentsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `httpMeta`                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)             | :heavy_check_mark:                                                             | N/A                                                                            |
| `companyAttachmentList`                                                        | [components.CompanyAttachment](../../models/components/companyattachment.md)[] | :heavy_minus_sign:                                                             | Example response                                                               |