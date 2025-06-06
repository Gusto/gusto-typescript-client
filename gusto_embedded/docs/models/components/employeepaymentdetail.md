# EmployeePaymentDetail

Represents an employee's payment method details.

## Example Usage

```typescript
import { EmployeePaymentDetail } from "@gusto/embedded-api/models/components/employeepaymentdetail.js";

let value: EmployeePaymentDetail = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `employeeUuid`                                                                                                 | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The UUID of the employee.                                                                                      |
| `paymentMethod`                                                                                                | [components.EmployeePaymentDetailPaymentMethod](../../models/components/employeepaymentdetailpaymentmethod.md) | :heavy_minus_sign:                                                                                             | The type of payment method.                                                                                    |
| `splitBy`                                                                                                      | [components.SplitBy](../../models/components/splitby.md)                                                       | :heavy_minus_sign:                                                                                             | How the payment is split. This field is applicable when `payment_method` is "Direct Deposit".                  |
| `splits`                                                                                                       | [components.DetailedPaymentAccountSplit](../../models/components/detailedpaymentaccountsplit.md)[]             | :heavy_minus_sign:                                                                                             | An array of payment splits. This field is applicable when `payment_method` is "Direct Deposit".                |