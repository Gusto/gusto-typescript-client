# GetV1CompaniesCompanyIdContractorPaymentsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdContractorPaymentsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidcontractorpayments.js";

let value: GetV1CompaniesCompanyIdContractorPaymentsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `oneOf`                                                            | *operations.GetV1CompaniesCompanyIdContractorPaymentsResponseBody* | :heavy_minus_sign:                                                 | A JSON object containing contractor payments information           |