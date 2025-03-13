# GetV1EmployeesEmployeeIdHomeAddressesResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdHomeAddressesResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidhomeaddresses.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

let value: GetV1EmployeesEmployeeIdHomeAddressesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  employeeAddressList: [
    {
      street1: "333 Kiera Stravenue",
      street2: "Suite 391",
      city: "San Francisco",
      state: "CA",
      zip: "94107",
      active: true,
      uuid: "9557fe01-f8f8-4c14-a61c-ca6221a9f118",
      employeeUuid: "da441196-43a9-4d23-ad5d-f37ce6bb99c0",
      effectiveDate: new RFCDate("2021-01-01"),
      courtesyWithholding: true,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `httpMeta`                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `employeeAddressList`                                                      | [components.EmployeeAddress](../../models/components/employeeaddress.md)[] | :heavy_minus_sign:                                                         | List of employee addresses                                                 |