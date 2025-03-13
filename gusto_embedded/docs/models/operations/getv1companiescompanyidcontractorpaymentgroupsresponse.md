# GetV1CompaniesCompanyIdContractorPaymentGroupsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdContractorPaymentGroupsResponse } from "@gusto/embedded-api/models/operations/getv1companiescompanyidcontractorpaymentgroups.js";

let value: GetV1CompaniesCompanyIdContractorPaymentGroupsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `contractorPaymentGroupList`                                                                           | [components.ContractorPaymentGroupMinimal](../../models/components/contractorpaymentgroupminimal.md)[] | :heavy_minus_sign:                                                                                     | List of Contractor Payment Groups                                                                      |