# EmployeePayStub

The representation of an employee pay stub information.

## Example Usage

```typescript
import { EmployeePayStub } from "@gusto/embedded-api/models/components/employeepaystub.js";

let value: EmployeePayStub = {
  uuid: "d2792c1f-7516-4a14-8da3-2e42f4176e21",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `uuid`                                                            | *string*                                                          | :heavy_check_mark:                                                | The UUID of the employee pay stub.                                |
| `checkDate`                                                       | *string*                                                          | :heavy_minus_sign:                                                | The check date of the pay stub.                                   |
| `grossPay`                                                        | *string*                                                          | :heavy_minus_sign:                                                | The gross pay amount for the pay stub.                            |
| `netPay`                                                          | *string*                                                          | :heavy_minus_sign:                                                | The net pay amount for the pay stub.                              |
| `payrollUuid`                                                     | *string*                                                          | :heavy_minus_sign:                                                | A unique identifier of the payroll to which the pay stub belongs. |
| `checkAmount`                                                     | *string*                                                          | :heavy_minus_sign:                                                | The check amount for the pay stub.                                |