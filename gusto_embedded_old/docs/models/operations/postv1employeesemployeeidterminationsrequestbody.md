# PostV1EmployeesEmployeeIdTerminationsRequestBody

## Example Usage

```typescript
import { PostV1EmployeesEmployeeIdTerminationsRequestBody } from "openapi/models/operations";

let value: PostV1EmployeesEmployeeIdTerminationsRequestBody = {
  effectiveDate: "<value>",
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `effectiveDate`                                                                                                                                                 | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | The employee's last day of work.                                                                                                                                |
| `runTerminationPayroll`                                                                                                                                         | *boolean*                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                              | If true, the employee should receive their final wages via an off-cycle payroll. If false, they should receive their final wages on their current pay schedule. |