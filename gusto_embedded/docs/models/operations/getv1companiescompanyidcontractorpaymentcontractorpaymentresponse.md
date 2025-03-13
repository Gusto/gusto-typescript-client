# GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidcontractorpaymentcontractorpayment.js";

let value: GetV1CompaniesCompanyIdContractorPaymentContractorPaymentResponse = {
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