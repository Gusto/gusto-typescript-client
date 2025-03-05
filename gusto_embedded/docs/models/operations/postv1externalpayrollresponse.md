# PostV1ExternalPayrollResponse

## Example Usage

```typescript
import { PostV1ExternalPayrollResponse } from "@gusto/embedded-api/models/operations/postv1externalpayroll.js";

let value: PostV1ExternalPayrollResponse = {
  contentType: "<value>",
  statusCode: 504,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `contentType`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | HTTP response content type for this operation                            |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | HTTP response status code for this operation                             |
| `rawResponse`                                                            | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)    | :heavy_check_mark:                                                       | Raw HTTP response; suitable for custom response parsing                  |
| `externalPayroll`                                                        | [components.ExternalPayroll](../../models/components/externalpayroll.md) | :heavy_minus_sign:                                                       | Example response                                                         |