# DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse

## Example Usage

```typescript
import { DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse } from "@gusto/embedded-api/models/operations/deletev1employeesemployeeidi9authorizationdocumentsdocumentid.js";

let value:
  DeleteV1EmployeesEmployeeIdI9AuthorizationDocumentsDocumentIdResponse = {
    contentType: "<value>",
    statusCode: 203,
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