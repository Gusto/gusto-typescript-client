# GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidi9authorizationdocuments.js";

let value: GetV1EmployeesEmployeeIdI9AuthorizationDocumentsResponse = {
  contentType: "<value>",
  statusCode: 425,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `contentType`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | HTTP response content type for this operation                                              |
| `statusCode`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | HTTP response status code for this operation                                               |
| `rawResponse`                                                                              | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                      | :heavy_check_mark:                                                                         | Raw HTTP response; suitable for custom response parsing                                    |
| `i9AuthorizationDocumentsObject`                                                           | [components.I9AuthorizationDocument](../../models/components/i9authorizationdocument.md)[] | :heavy_minus_sign:                                                                         | Example response                                                                           |