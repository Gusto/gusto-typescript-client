# GetV1EmployeesEmployeeIdStateTaxesRequest

## Example Usage

```typescript
import { GetV1EmployeesEmployeeIdStateTaxesRequest } from "@gusto/embedded-api/models/operations/getv1employeesemployeeidstatetaxes.js";

let value: GetV1EmployeesEmployeeIdStateTaxesRequest = {
  employeeUuid: "<id>",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                         | [operations.GetV1EmployeesEmployeeIdStateTaxesHeaderXGustoAPIVersion](../../models/operations/getv1employeesemployeeidstatetaxesheaderxgustoapiversion.md) | :heavy_minus_sign:                                                                                                                                         | Determines the date-based API version associated with your API call.                                                                                       |
| `employeeUuid`                                                                                                                                             | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The UUID of the employee                                                                                                                                   |