# GetV1EmployeesEmployeeIdHomeAddressesResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdHomeAddressesResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidhomeaddresses.js";

let value: GetV1EmployeesEmployeeIdHomeAddressesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  employeeAddressList: [
    {
      street1: "412 Kiera Stravenue",
      street2: "Suite 391",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
      active: true,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `httpMeta`                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `employeeAddressList`                                                      | [components.EmployeeAddress](../../models/components/employeeaddress.md)[] | :heavy_minus_sign:                                                         | List of employee addresses                                                 |