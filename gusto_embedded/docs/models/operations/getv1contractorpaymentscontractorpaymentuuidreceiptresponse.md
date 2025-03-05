# GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse

## Example Usage

```typescript
import { GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse } from "@gusto/embedded-api/models/operations";
import { RFCDate } from "@gusto/embedded-api/types";

let value: GetV1ContractorPaymentsContractorPaymentUuidReceiptResponse = {
  contentType: "<value>",
  statusCode: 402,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
  contractorPaymentReceipt: {
    debitDate: new RFCDate("2022-05-30"),
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `contentType`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | HTTP response content type for this operation                                              |
| `statusCode`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | HTTP response status code for this operation                                               |
| `rawResponse`                                                                              | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                      | :heavy_check_mark:                                                                         | Raw HTTP response; suitable for custom response parsing                                    |
| `contractorPaymentReceipt`                                                                 | [components.ContractorPaymentReceipt](../../models/components/contractorpaymentreceipt.md) | :heavy_minus_sign:                                                                         | Example response                                                                           |