# ContractorPayment

The representation of a single contractor payment.

## Example Usage

```typescript
import { ContractorPayment } from "openapi/models";

let value: ContractorPayment = {
  uuid: "e83fee65-e74a-48f2-b54a-dc40a192969c",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `uuid`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | The unique identifier of the contractor payment in Gusto.                               |
| `contractorUuid`                                                                        | *string*                                                                                | :heavy_minus_sign:                                                                      | The UUID of the contractor.                                                             |
| `bonus`                                                                                 | *string*                                                                                | :heavy_minus_sign:                                                                      | The bonus amount in the payment.                                                        |
| `date`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | The payment date.                                                                       |
| `hours`                                                                                 | *string*                                                                                | :heavy_minus_sign:                                                                      | The number of hours worked for the payment.                                             |
| `paymentMethod`                                                                         | [models.ContractorPaymentPaymentMethod](../models/contractor-payment-payment-method.md) | :heavy_minus_sign:                                                                      | The payment method.                                                                     |
| `reimbursement`                                                                         | *string*                                                                                | :heavy_minus_sign:                                                                      | The reimbursement amount in the payment.                                                |
| `status`                                                                                | [models.ContractorPaymentStatus](../models/contractor-payment-status.md)                | :heavy_minus_sign:                                                                      | Contractor payment status                                                               |
| `hourlyRate`                                                                            | *string*                                                                                | :heavy_minus_sign:                                                                      | The rate per hour worked for the payment.                                               |
| `mayCancel`                                                                             | *boolean*                                                                               | :heavy_minus_sign:                                                                      | Determine if the contractor payment can be cancelled.                                   |
| `wage`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | The fixed wage of the payment, regardless of hours worked.                              |
| `wageType`                                                                              | [models.ContractorPaymentWageType](../models/contractor-payment-wage-type.md)           | :heavy_minus_sign:                                                                      | The wage type for the payment.                                                          |
| `wageTotal`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | (hours * hourly_rate) + wage + bonus                                                    |