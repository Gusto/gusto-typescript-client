# PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse } from "@gusto/embedded-api/models/operations/postv1companiescompanyidcontractorpaymentgroupspreview.js";

let value: PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewResponse = {
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
| `contractorPaymentGroup`                                                               | [components.ContractorPaymentGroup](../../models/components/contractorpaymentgroup.md) | :heavy_minus_sign:                                                                     | Full contractor payment group object with null uuid                                    |