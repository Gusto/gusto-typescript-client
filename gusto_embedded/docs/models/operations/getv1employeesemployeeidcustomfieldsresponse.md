# GetV1EmployeesEmployeeIdCustomFieldsResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdCustomFieldsResponse } from "@gusto/embedded-api/models/operations";

let value: GetV1EmployeesEmployeeIdCustomFieldsResponse = {
  contentType: "<value>",
  statusCode: 100,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `contentType`                                                                                                                              | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | HTTP response content type for this operation                                                                                              |
| `statusCode`                                                                                                                               | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | HTTP response status code for this operation                                                                                               |
| `rawResponse`                                                                                                                              | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                      | :heavy_check_mark:                                                                                                                         | Raw HTTP response; suitable for custom response parsing                                                                                    |
| `object`                                                                                                                                   | [operations.GetV1EmployeesEmployeeIdCustomFieldsResponseBody](../../models/operations/getv1employeesemployeeidcustomfieldsresponsebody.md) | :heavy_minus_sign:                                                                                                                         | OK                                                                                                                                         |