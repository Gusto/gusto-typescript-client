# PostV1CompanyFlowsResponse

## Example Usage

```typescript
import { PostV1CompanyFlowsResponse } from "@gusto/embedded-api/models/operations/postv1companyflows.js";

let value: PostV1CompanyFlowsResponse = {
  contentType: "<value>",
  statusCode: 201,
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
| `flow`                                                                | [components.Flow](../../models/components/flow.md)                    | :heavy_minus_sign:                                                    | Example response                                                      |