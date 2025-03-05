# GetV1EmployeesEmployeeIdHomeAddressesResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdHomeAddressesResponse } from "@gusto/embedded-api/models/operations";

let value: GetV1EmployeesEmployeeIdHomeAddressesResponse = {
  contentType: "<value>",
  statusCode: 306,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
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
| `contentType`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | HTTP response content type for this operation                              |
| `statusCode`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | HTTP response status code for this operation                               |
| `rawResponse`                                                              | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)      | :heavy_check_mark:                                                         | Raw HTTP response; suitable for custom response parsing                    |
| `employeeAddressList`                                                      | [components.EmployeeAddress](../../models/components/employeeaddress.md)[] | :heavy_minus_sign:                                                         | List of employee addresses                                                 |