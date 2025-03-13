# GetV1EmployeesEmployeeIdCustomFieldsResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdCustomFieldsResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidcustomfields.js";

let value: GetV1EmployeesEmployeeIdCustomFieldsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                         | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `object`                                                                                                                                   | [operations.GetV1EmployeesEmployeeIdCustomFieldsResponseBody](../../models/operations/getv1employeesemployeeidcustomfieldsresponsebody.md) | :heavy_minus_sign:                                                                                                                         | OK                                                                                                                                         |