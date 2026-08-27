# GetTaxPaymentsResponse

## Example Usage

```typescript
import { GetTaxPaymentsResponse } from "@gusto/embedded-api-v-2026-02-01/models/operations/gettaxpayments.js";

let value: GetTaxPaymentsResponse = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `taxPaymentList`                                                   | [components.TaxPayment](../../models/components/taxpayment.md)[]   | :heavy_minus_sign:                                                 | Success                                                            |