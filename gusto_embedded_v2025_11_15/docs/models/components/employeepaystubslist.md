# EmployeePayStubsList

The representation of an employee pay stub information.

## Example Usage

```typescript
import { EmployeePayStubsList } from "@gusto/embedded-api-v2025-11-15/models/components/employeepaystubslist.js";

let value: EmployeePayStubsList = {
  uuid: "25fc4170-1319-4aeb-b537-b75bbccd2a76",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `uuid`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The UUID of the employee pay stub.                                                                           |
| `checkDate`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The check date of the pay stub.                                                                              |
| `grossPay`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The gross pay amount for the pay stub.                                                                       |
| `netPay`                                                                                                     | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The net pay amount for the pay stub.                                                                         |
| `payrollUuid`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | A unique identifier of the payroll to which the pay stub belongs.                                            |
| `checkAmount`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The check amount for the pay stub.                                                                           |
| `paymentMethod`                                                                                              | [components.EmployeePayStubsListPaymentMethod](../../models/components/employeepaystubslistpaymentmethod.md) | :heavy_minus_sign:                                                                                           | The payment method for the pay stub.                                                                         |