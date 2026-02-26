# ContractorPaymentSummaryContractorPayments

## Example Usage

```typescript
import { ContractorPaymentSummaryContractorPayments } from "@gusto/embedded-api-v2025-11-15/models/components/contractorpaymentsummary.js";

let value: ContractorPaymentSummaryContractorPayments = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `contractorUuid`                                                               | *number*                                                                       | :heavy_minus_sign:                                                             | The UUID of the contractor.                                                    |
| `reimbursementTotal`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | The total reimbursements for the contractor within a given time period.        |
| `wageTotal`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | The total wages for the contractor within a given time period.                 |
| `payments`                                                                     | [components.ContractorPayment](../../models/components/contractorpayment.md)[] | :heavy_minus_sign:                                                             | The contractor's payments within a given time period.                          |