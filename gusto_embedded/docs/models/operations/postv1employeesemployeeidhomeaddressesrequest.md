# PostV1EmployeesEmployeeIdHomeAddressesRequest

## Example Usage

```typescript
import { PostV1EmployeesEmployeeIdHomeAddressesRequest } from "@gusto/embedded-api/models/operations/postv1employeesemployeeidhomeaddresses.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

let value: PostV1EmployeesEmployeeIdHomeAddressesRequest = {
  employeeId: "<id>",
  requestBody: {
    street1: "300 3rd Street",
    city: "San Francisco",
    state: "CA",
    zip: "94107",
    effectiveDate: new RFCDate("2022-01-31"),
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `employeeId`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the employee                                                                                                                                                                                                     |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1EmployeesEmployeeIdHomeAddressesHeaderXGustoAPIVersion](../../models/operations/postv1employeesemployeeidhomeaddressesheaderxgustoapiversion.md)                                                           | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `requestBody`                                                                                                                                                                                                                | [operations.PostV1EmployeesEmployeeIdHomeAddressesRequestBody](../../models/operations/postv1employeesemployeeidhomeaddressesrequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |