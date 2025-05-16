# PutV1EmployeesRequest

## Example Usage

```typescript
import { PutV1EmployeesRequest } from "@gusto/embedded-api/models/operations/putv1employees.js";

let value: PutV1EmployeesRequest = {
  employeeId: "<id>",
  requestBody: {
    version: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                           | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `employeeId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | The UUID of the employee                                                                     |
| `requestBody`                                                                                | [operations.PutV1EmployeesRequestBody](../../models/operations/putv1employeesrequestbody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |