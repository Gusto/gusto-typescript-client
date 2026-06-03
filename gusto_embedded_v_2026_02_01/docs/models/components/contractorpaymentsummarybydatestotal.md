# ContractorPaymentSummaryByDatesTotal

The wage and reimbursement totals for all contractor payments within a given time period.

## Example Usage

```typescript
import { ContractorPaymentSummaryByDatesTotal } from "@gusto/embedded-api-v-2026-02-01/models/components/contractorpaymentsummarybydates.js";

let value: ContractorPaymentSummaryByDatesTotal = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `reimbursements`                                                             | *string*                                                                     | :heavy_minus_sign:                                                           | The total reimbursements for contractor payments within a given time period. |
| `wages`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | The total wages for contractor payments within a given time period.          |