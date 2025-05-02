# PutV1EmployeesEmployeeIdStateTaxesRequest

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdStateTaxesRequest } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidstatetaxes.js";

let value: PutV1EmployeesEmployeeIdStateTaxesRequest = {
  employeeUuid: "<id>",
  requestBody: {
    states: [
      {
        state: "Missouri",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `employeeUuid`                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the employee                                                                                                                                                                                                     |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [components.VersionHeader](../../models/components/versionheader.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `requestBody`                                                                                                                                                                                                                | [operations.PutV1EmployeesEmployeeIdStateTaxesRequestBody](../../models/operations/putv1employeesemployeeidstatetaxesrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |