# GetV1EmployeesEmployeeIdHomeAddressesResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdHomeAddressesResponse } from "@gusto/embedded-api/models/operations";
import { RFCDate } from "@gusto/embedded-api/types";

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
| `contentType`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | HTTP response content type for this operation                              |
| `statusCode`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | HTTP response status code for this operation                               |
| `rawResponse`                                                              | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)      | :heavy_check_mark:                                                         | Raw HTTP response; suitable for custom response parsing                    |
| `employeeAddressList`                                                      | [components.EmployeeAddress](../../models/components/employeeaddress.md)[] | :heavy_minus_sign:                                                         | List of employee addresses                                                 |