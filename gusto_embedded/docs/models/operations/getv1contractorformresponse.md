# GetV1ContractorFormResponse

## Example Usage

```typescript
import { GetV1ContractorFormResponse } from "@gusto/embedded-api/models/operations/getv1contractorform.js";

let value: GetV1ContractorFormResponse = {
  contentType: "<value>",
  statusCode: 207,
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
| `form1099`                                                            | [components.Form1099](../../models/components/form1099.md)            | :heavy_minus_sign:                                                    | Example response                                                      |