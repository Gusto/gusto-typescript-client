# GetV1EmployeesEmployeeIdI9AuthorizationDocumentOptionsResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdI9AuthorizationDocumentOptionsResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidi9authorizationdocumentoptions.js";

let value: GetV1EmployeesEmployeeIdI9AuthorizationDocumentOptionsResponse = {
  contentType: "<value>",
  statusCode: 403,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `contentType`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | HTTP response content type for this operation                                                          |
| `statusCode`                                                                                           | *number*                                                                                               | :heavy_check_mark:                                                                                     | HTTP response status code for this operation                                                           |
| `rawResponse`                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                  | :heavy_check_mark:                                                                                     | Raw HTTP response; suitable for custom response parsing                                                |
| `i9AuthorizationDocumentOptionsObject`                                                                 | [components.I9AuthorizationDocumentOption](../../models/components/i9authorizationdocumentoption.md)[] | :heavy_minus_sign:                                                                                     | Example response                                                                                       |