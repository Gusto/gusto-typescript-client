# ContractorPaymentSummaryContractorPayment

## Example Usage

```typescript
import { ContractorPaymentSummaryContractorPayment } from "openapi/models";

let value: ContractorPaymentSummaryContractorPayment = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `contractorUuid`                                                        | *number*                                                                | :heavy_minus_sign:                                                      | The UUID of the contractor.                                             |
| `reimbursementTotal`                                                    | *string*                                                                | :heavy_minus_sign:                                                      | The total reimbursements for the contractor within a given time period. |
| `wageTotal`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | The total wages for the contractor within a given time period.          |
| `payments`                                                              | [models.ContractorPayment](../models/contractor-payment.md)[]           | :heavy_minus_sign:                                                      | The contractor's payments within a given time period.                   |