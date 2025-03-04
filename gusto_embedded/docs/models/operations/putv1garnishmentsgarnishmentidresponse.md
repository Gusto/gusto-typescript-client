# PutV1GarnishmentsGarnishmentIdResponse

## Example Usage

```typescript
import { PutV1GarnishmentsGarnishmentIdResponse } from "@gusto/embedded-api/models/operations";

let value: PutV1GarnishmentsGarnishmentIdResponse = {
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
| `garnishment`                                                         | [components.Garnishment](../../models/components/garnishment.md)      | :heavy_minus_sign:                                                    | Example response                                                      |