# GetV1EmployeesEmployeeIdWorkAddressesResponse

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdWorkAddressesResponse } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidworkaddresses.js";

let value: GetV1EmployeesEmployeeIdWorkAddressesResponse = {
  contentType: "<value>",
  statusCode: 508,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  employeeWorkAddressList: [
    {
      uuid: "34925ef7-6234-440d-83b8-788a24d0d69a",
      effectiveDate: "2023-05-15",
      active: true,
      locationUuid: "aba6d0fd-7294-4997-b1a4-bc9268c45932",
      employeeUuid: "2363b9c0-6625-4425-9261-47627fd68783",
      version: "6a22da647ed391f184a212e6e83a541d",
      street1: "977 Marks Viaduct",
      street2: null,
      city: "Pink Hill",
      state: "NC",
      zip: "28572",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `contentType`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | HTTP response content type for this operation                                      |
| `statusCode`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | HTTP response status code for this operation                                       |
| `rawResponse`                                                                      | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)              | :heavy_check_mark:                                                                 | Raw HTTP response; suitable for custom response parsing                            |
| `employeeWorkAddressList`                                                          | [components.EmployeeWorkAddress](../../models/components/employeeworkaddress.md)[] | :heavy_minus_sign:                                                                 | List of employee work addresses                                                    |