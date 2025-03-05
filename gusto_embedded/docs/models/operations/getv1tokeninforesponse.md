# GetV1TokenInfoResponse

## Example Usage

```typescript
import { GetV1TokenInfoResponse } from "@gusto/embedded-api/models/operations/getv1tokeninfo.js";

let value: GetV1TokenInfoResponse = {
  contentType: "<value>",
  statusCode: 206,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `contentType`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | HTTP response content type for this operation                                                  |
| `statusCode`                                                                                   | *number*                                                                                       | :heavy_check_mark:                                                                             | HTTP response status code for this operation                                                   |
| `rawResponse`                                                                                  | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                          | :heavy_check_mark:                                                                             | Raw HTTP response; suitable for custom response parsing                                        |
| `object`                                                                                       | [operations.GetV1TokenInfoResponseBody](../../models/operations/getv1tokeninforesponsebody.md) | :heavy_minus_sign:                                                                             | Example response                                                                               |