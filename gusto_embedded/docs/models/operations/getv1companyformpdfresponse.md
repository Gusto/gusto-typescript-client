# GetV1CompanyFormPdfResponse

## Example Usage

```typescript
import { GetV1CompanyFormPdfResponse } from "@gusto/embedded-api/models/operations/getv1companyformpdf.js";

let value: GetV1CompanyFormPdfResponse = {
  contentType: "<value>",
  statusCode: 100,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |
| `formPdf`                                                             | [components.FormPdf](../../models/components/formpdf.md)              | :heavy_minus_sign:                                                    | Example response                                                      |