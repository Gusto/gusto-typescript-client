# PutV1EmployeesEmployeeIdStateTaxesRequest

## Example Usage

```typescript
import { PutV1EmployeesEmployeeIdStateTaxesRequest } from "@gusto/embedded-api/models/operations/putv1employeesemployeeidstatetaxes.js";

let value: PutV1EmployeesEmployeeIdStateTaxesRequest = {
  employeeUuid: "<id>",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                         | [operations.PutV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion](../../models/operations/putv1employeesemployeeidstatetaxesheaderxgustoapiversion.md) | :heavy_minus_sign:                                                                                                                                         | Determines the date-based API version associated with your API call.                                                                                       |
| `employeeUuid`                                                                                                                                             | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The UUID of the employee                                                                                                                                   |
| `employeeStateTaxesRequest`                                                                                                                                | [components.EmployeeStateTaxesRequest](../../models/components/employeestatetaxesrequest.md)                                                               | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |