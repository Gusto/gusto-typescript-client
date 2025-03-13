# PostV1CompaniesCompanyIdContractorPaymentGroupsResponse

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdContractorPaymentGroupsResponse } from "@gusto/embedded-api/models/operations/postv1companiescompanyidcontractorpaymentgroups.js";

let value: PostV1CompaniesCompanyIdContractorPaymentGroupsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `httpMeta`                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `contractorPaymentGroup`                                                               | [components.ContractorPaymentGroup](../../models/components/contractorpaymentgroup.md) | :heavy_minus_sign:                                                                     | Full contractor payment group object                                                   |