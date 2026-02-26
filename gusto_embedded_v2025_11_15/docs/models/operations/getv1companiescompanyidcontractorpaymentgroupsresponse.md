# GetV1CompaniesCompanyIdContractorPaymentGroupsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdContractorPaymentGroupsResponse } from "@gusto/embedded-api-v2025-11-15/models/operations/getv1companiescompanyidcontractorpaymentgroups.js";

let value: GetV1CompaniesCompanyIdContractorPaymentGroupsResponse = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `contractorPaymentGroupWithBlockers`                                                                             | [components.ContractorPaymentGroupWithBlockers](../../models/components/contractorpaymentgroupwithblockers.md)[] | :heavy_minus_sign:                                                                                               | List of Contractor Payment Groups                                                                                |