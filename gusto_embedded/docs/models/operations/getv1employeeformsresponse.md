# GetV1EmployeeFormsResponse

## Example Usage

```typescript
import { GetV1EmployeeFormsResponse } from "@gusto/embedded-api/models/operations/getv1employeeforms.js";

let value: GetV1EmployeeFormsResponse = {
  contentType: "<value>",
  statusCode: 404,
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
| `formList`                                                            | [components.Form](../../models/components/form.md)[]                  | :heavy_minus_sign:                                                    | Example response                                                      |