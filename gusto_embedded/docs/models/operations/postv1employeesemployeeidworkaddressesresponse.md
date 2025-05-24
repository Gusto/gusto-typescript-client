# PostV1EmployeesEmployeeIdWorkAddressesResponse

## Example Usage

```typescript
import { PostV1EmployeesEmployeeIdWorkAddressesResponse } from "@gusto/embedded-api/models/operations/postv1employeesemployeeidworkaddresses.js";

let value: PostV1EmployeesEmployeeIdWorkAddressesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `employeeWorkAddress`                                                            | [components.EmployeeWorkAddress](../../models/components/employeeworkaddress.md) | :heavy_minus_sign:                                                               | created                                                                          |