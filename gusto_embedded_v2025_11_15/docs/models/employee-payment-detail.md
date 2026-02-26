# EmployeePaymentDetail

Represents an employee's payment method details.

## Example Usage

```typescript
import { EmployeePaymentDetail } from "openapi/models";

let value: EmployeePaymentDetail = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `employeeUuid`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | The UUID of the employee.                                                                        |
| `paymentMethod`                                                                                  | [models.EmployeePaymentDetailPaymentMethod](../models/employee-payment-detail-payment-method.md) | :heavy_minus_sign:                                                                               | The type of payment method.                                                                      |
| `splitBy`                                                                                        | [models.EmployeePaymentDetailSplitBy](../models/employee-payment-detail-split-by.md)             | :heavy_minus_sign:                                                                               | How the payment is split. This field is applicable when `payment_method` is "Direct Deposit".    |
| `splits`                                                                                         | [models.DetailedPaymentAccountSplit](../models/detailed-payment-account-split.md)[]              | :heavy_minus_sign:                                                                               | An array of payment splits. This field is applicable when `payment_method` is "Direct Deposit".  |