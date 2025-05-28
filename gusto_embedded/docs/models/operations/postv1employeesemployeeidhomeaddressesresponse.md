# PostV1EmployeesEmployeeIdHomeAddressesResponse

## Example Usage

```typescript
import { PostV1EmployeesEmployeeIdHomeAddressesResponse } from "@gusto/embedded-api/models/operations/postv1employeesemployeeidhomeaddresses.js";

let value: PostV1EmployeesEmployeeIdHomeAddressesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `httpMeta`                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `employeeAddress`                                                        | [components.EmployeeAddress](../../models/components/employeeaddress.md) | :heavy_minus_sign:                                                       | created                                                                  |