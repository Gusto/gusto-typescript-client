# PutV1EmployeesEmployeeIdRehireResponse

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdRehireResponse } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidrehire.js";

let value: PutV1EmployeesEmployeeIdRehireResponse = {
  contentType: "<value>",
  statusCode: 510,
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
| `rehire`                                                              | [components.Rehire](../../models/components/rehire.md)                | :heavy_minus_sign:                                                    | Example response                                                      |