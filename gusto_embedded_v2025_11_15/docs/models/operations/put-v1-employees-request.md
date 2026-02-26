# PutV1EmployeesRequest

## Example Usage

```typescript
import { PutV1EmployeesRequest } from "openapi/models/operations";

let value: PutV1EmployeesRequest = {
  employeeId: "<id>",
  body: {
    version: "56d00c178bc7393b2a206ed6a86afcb4",
    firstName: "Weezy",
    middleInitial: "F",
    lastName: "Baby",
    email: "tunechi@cashmoneyrecords.com",
    dateOfBirth: "1991-01-31",
    ssn: "824920233",
    workEmail: "new.partner.work@example.com",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PutV1EmployeesXGustoAPIVersion](../../models/operations/put-v1-employees-x-gusto-api-version.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `employeeId`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the employee                                                                                                                                                                                                     |
| `body`                                                                                                                                                                                                                       | [operations.PutV1EmployeesRequestBody](../../models/operations/put-v1-employees-request-body.md)                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |