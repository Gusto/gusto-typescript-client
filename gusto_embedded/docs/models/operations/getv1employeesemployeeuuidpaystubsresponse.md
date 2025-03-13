# GetV1EmployeesEmployeeUuidPayStubsResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeUuidPayStubsResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeuuidpaystubs.js";

let value: GetV1EmployeesEmployeeUuidPayStubsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `httpMeta`                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `employeePayStubsList`                                                     | [components.EmployeePayStub](../../models/components/employeepaystub.md)[] | :heavy_minus_sign:                                                         | Example response                                                           |