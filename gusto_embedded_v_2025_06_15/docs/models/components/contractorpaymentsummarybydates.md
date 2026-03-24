# ContractorPaymentSummaryByDates

The representation of the summary of contractor payments for a given company in a given time period.

## Example Usage

```typescript
import { ContractorPaymentSummaryByDates } from "@gusto/embedded-api/models/components/contractorpaymentsummarybydates.js";

let value: ContractorPaymentSummaryByDates = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `total`                                                                                                                                        | [components.ContractorPaymentSummaryByDatesTotal](../../models/components/contractorpaymentsummarybydatestotal.md)                             | :heavy_minus_sign:                                                                                                                             | The wage and reimbursement totals for all contractor payments within a given time period.                                                      |
| `contractorPayments`                                                                                                                           | [components.ContractorPaymentSummaryByDatesContractorPayments](../../models/components/contractorpaymentsummarybydatescontractorpayments.md)[] | :heavy_minus_sign:                                                                                                                             | The individual contractor payments, within a given time period, grouped by check date.                                                         |