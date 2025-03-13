# GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse

## Example Usage

```typescript
import { GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse } from "@gusto/embedded-api/models/operations/getv1contractorpaymentscontractorpaymentuuidreceipt.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

let value: GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  contractorPaymentReceipt: {
    debitDate: new RFCDate("2022-05-30"),
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `contractorPaymentReceipt`                                                                 | [components.ContractorPaymentReceipt](../../models/components/contractorpaymentreceipt.md) | :heavy_minus_sign:                                                                         | Example response                                                                           |