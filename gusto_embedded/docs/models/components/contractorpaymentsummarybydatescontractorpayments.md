# ContractorPaymentSummaryByDatesContractorPayments

## Example Usage

```typescript
import { ContractorPaymentSummaryByDatesContractorPayments } from "@gusto/embedded-api/models/components";

let value: ContractorPaymentSummaryByDatesContractorPayments = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `contractorUuid`                                                               | *string*                                                                       | :heavy_minus_sign:                                                             | The UUID of the contractor.                                                    |
| `checkDate`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | The payment check date.                                                        |
| `reimbursementTotal`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | The total reimbursements for the contractor within a given time period.        |
| `wageTotal`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | The total wages for the contractor within a given time period.                 |
| `payments`                                                                     | [components.ContractorPayment](../../models/components/contractorpayment.md)[] | :heavy_minus_sign:                                                             | The contractor’s payments within a given time period.<br/>                     |