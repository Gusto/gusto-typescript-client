# ContractorPaymentSummary

The representation of the summary of contractor payments for a given company in a given time period.

## Example Usage

```typescript
import { ContractorPaymentSummary } from "@gusto/embedded-api/models/components";

let value: ContractorPaymentSummary = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `total`                                                                                                                          | [components.Total](../../models/components/total.md)                                                                             | :heavy_minus_sign:                                                                                                               | The wage and reimbursement totals for all contractor payments within a given time period.                                        |
| `contractorPayments`                                                                                                             | [components.ContractorPaymentSummaryContractorPayments](../../models/components/contractorpaymentsummarycontractorpayments.md)[] | :heavy_minus_sign:                                                                                                               | The individual contractor payments, within a given time period, grouped by contractor.                                           |