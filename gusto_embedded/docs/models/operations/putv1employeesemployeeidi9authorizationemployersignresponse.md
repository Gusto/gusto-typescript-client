# PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidi9authorizationemployersign.js";

let value: PutV1EmployeesEmployeeIdI9AuthorizationEmployerSignResponse = {
  contentType: "<value>",
  statusCode: 307,
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
| `i9Authorization`                                                        | [components.I9Authorization](../../models/components/i9authorization.md) | :heavy_minus_sign:                                                       | Example response                                                         |