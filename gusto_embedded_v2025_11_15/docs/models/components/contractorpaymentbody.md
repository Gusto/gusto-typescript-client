# ContractorPaymentBody

Request body for creating a contractor payment.

## Example Usage

```typescript
import { ContractorPaymentBody } from "@gusto/embedded-api-v2025-11-15/models/components/contractorpaymentbody.js";
import { RFCDate } from "@gusto/embedded-api-v2025-11-15/types/rfcdate.js";

let value: ContractorPaymentBody = {
  contractorUuid: "<id>",
  date: new RFCDate("2020-01-01"),
  wage: "5000",
  hours: "40",
  bonus: "500",
  reimbursement: "20",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `contractorUuid`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The contractor receiving the payment.                                                                                |                                                                                                                      |
| `date`                                                                                                               | [RFCDate](../../types/rfcdate.md)                                                                                    | :heavy_check_mark:                                                                                                   | Date of contractor payment.                                                                                          | 2020-01-01                                                                                                           |
| `paymentMethod`                                                                                                      | [components.ContractorPaymentBodyPaymentMethod](../../models/components/contractorpaymentbodypaymentmethod.md)       | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `wage`                                                                                                               | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | If the contractor is on a fixed wage, this is the fixed wage payment for the contractor, regardless of hours worked. | 5000                                                                                                                 |
| `hours`                                                                                                              | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | If the contractor is on an hourly wage, this is the number of hours that the contractor worked for the payment.      | 40                                                                                                                   |
| `bonus`                                                                                                              | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | If the contractor is on an hourly wage, this is the bonus the contractor earned.                                     | 500                                                                                                                  |
| `reimbursement`                                                                                                      | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | Reimbursed wages for the contractor.                                                                                 | 20                                                                                                                   |