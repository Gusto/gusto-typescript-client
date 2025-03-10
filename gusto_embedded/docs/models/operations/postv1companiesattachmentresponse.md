# PostV1CompaniesAttachmentResponse

## Example Usage

```typescript
import { PostV1CompaniesAttachmentResponse } from "@gusto/embedded-api/models/operations/postv1companiesattachment.js";

let value: PostV1CompaniesAttachmentResponse = {
  contentType: "<value>",
  statusCode: 407,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `contentType`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | HTTP response content type for this operation                                |
| `statusCode`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | HTTP response status code for this operation                                 |
| `rawResponse`                                                                | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)        | :heavy_check_mark:                                                           | Raw HTTP response; suitable for custom response parsing                      |
| `companyAttachment`                                                          | [components.CompanyAttachment](../../models/components/companyattachment.md) | :heavy_minus_sign:                                                           | Example response                                                             |