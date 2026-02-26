# PostV1EmployeesEmployeeIdHomeAddressesRequest

## Example Usage

```typescript
import { PostV1EmployeesEmployeeIdHomeAddressesRequest } from "openapi/models/operations";

let value: PostV1EmployeesEmployeeIdHomeAddressesRequest = {
  employeeId: "<id>",
  body: {
    street1: "300 3rd Street",
    city: "San Francisco",
    state: "CA",
    zip: "94107",
    effectiveDate: new Date("2022-01-31"),
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `employeeId`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the employee                                                                                                                                                                                                     |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1EmployeesEmployeeIdHomeAddressesXGustoAPIVersion](../../models/operations/post-v1-employees-employee-id-home-addresses-x-gusto-api-version.md)                                                             | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `body`                                                                                                                                                                                                                       | [operations.PostV1EmployeesEmployeeIdHomeAddressesRequestBody](../../models/operations/post-v1-employees-employee-id-home-addresses-request-body.md)                                                                         | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |