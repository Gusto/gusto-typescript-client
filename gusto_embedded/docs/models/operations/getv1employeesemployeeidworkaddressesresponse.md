# GetV1EmployeesEmployeeIdWorkAddressesResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdWorkAddressesResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidworkaddresses.js";

let value: GetV1EmployeesEmployeeIdWorkAddressesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `httpMeta`                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `employeeWorkAddressesList`                                                        | [components.EmployeeWorkAddress](../../models/components/employeeworkaddress.md)[] | :heavy_minus_sign:                                                                 | List of employee work addresses                                                    |