# ContractorPaymentSummaryByDates

The representation of the summary of contractor payments for a given company in a given time period.

## Example Usage

```typescript
import { ContractorPaymentSummaryByDates } from "openapi/models";

let value: ContractorPaymentSummaryByDates = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `total`                                                                                                                          | [models.ContractorPaymentSummaryByDatesTotal](../models/contractor-payment-summary-by-dates-total.md)                            | :heavy_minus_sign:                                                                                                               | The wage and reimbursement totals for all contractor payments within a given time period.                                        |
| `contractorPayments`                                                                                                             | [models.ContractorPaymentSummaryByDatesContractorPayment](../models/contractor-payment-summary-by-dates-contractor-payment.md)[] | :heavy_minus_sign:                                                                                                               | The individual contractor payments, within a given time period, grouped by check date.                                           |