# PostV1CompaniesCompanyIdContractorPaymentsResponse

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdContractorPaymentsResponse } from "@gusto/embedded-api/models/operations/postv1companiescompanyidcontractorpayments.js";

let value: PostV1CompaniesCompanyIdContractorPaymentsResponse = {
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