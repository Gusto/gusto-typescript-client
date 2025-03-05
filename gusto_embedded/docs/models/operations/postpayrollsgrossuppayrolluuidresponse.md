# PostPayrollsGrossUpPayrollUuidResponse

## Example Usage

```typescript
import { PostPayrollsGrossUpPayrollUuidResponse } from "@gusto/embedded-api/models/operations/postpayrollsgrossuppayrolluuid.js";

let value: PostPayrollsGrossUpPayrollUuidResponse = {
  contentType: "<value>",
  statusCode: 415,
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
| `grossUpPay`                                                          | [components.GrossUpPay](../../models/components/grossuppay.md)        | :heavy_minus_sign:                                                    | Example response                                                      |