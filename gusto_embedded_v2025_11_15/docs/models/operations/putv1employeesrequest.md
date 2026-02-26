# PutV1EmployeesRequest

## Example Usage

```typescript
import { PutV1EmployeesRequest } from "@gusto/embedded-api-v2025-11-15/models/operations/putv1employees.js";

let value: PutV1EmployeesRequest = {
  employeeId: "<id>",
  requestBody: {
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
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PutV1EmployeesHeaderXGustoAPIVersion](../../models/operations/putv1employeesheaderxgustoapiversion.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `employeeId`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the employee                                                                                                                                                                                                     |
| `requestBody`                                                                                                                                                                                                                | [operations.PutV1EmployeesRequestBody](../../models/operations/putv1employeesrequestbody.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |