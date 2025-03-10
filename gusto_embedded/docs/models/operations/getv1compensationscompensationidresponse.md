# GetV1CompensationsCompensationIdResponse

## Example Usage

```typescript
import { GetV1CompensationsCompensationIdResponse } from "@gusto/embedded-api/models/operations/getv1compensationscompensationid.js";

let value: GetV1CompensationsCompensationIdResponse = {
  contentType: "<value>",
  statusCode: 423,
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
| `compensation`                                                        | [components.Compensation](../../models/components/compensation.md)    | :heavy_minus_sign:                                                    | Example response                                                      |