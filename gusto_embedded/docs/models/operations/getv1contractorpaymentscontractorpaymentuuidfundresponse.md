# GetV1ContractorPaymentsContractorPaymentUuidFundResponse

## Example Usage

```typescript
import { GetV1ContractorPaymentsContractorPaymentUuidFundResponse } from "@gusto/embedded-api/models/operations/getv1contractorpaymentscontractorpaymentuuidfund.js";

let value: GetV1ContractorPaymentsContractorPaymentUuidFundResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `httpMeta`                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)           | :heavy_check_mark:                                                           | N/A                                                                          |
| `contractorPayment`                                                          | [components.ContractorPayment](../../models/components/contractorpayment.md) | :heavy_minus_sign:                                                           | Example response                                                             |