# PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse

## Example Usage

```typescript
import { PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse } from "@gusto/embedded-api/models/operations/putv1contractorpaymentgroupscontractorpaymentgroupidfund.js";

let value: PutV1ContractorPaymentGroupsContractorPaymentGroupIdFundResponse = {
  contentType: "<value>",
  statusCode: 203,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `contentType`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | HTTP response content type for this operation                                          |
| `statusCode`                                                                           | *number*                                                                               | :heavy_check_mark:                                                                     | HTTP response status code for this operation                                           |
| `rawResponse`                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                  | :heavy_check_mark:                                                                     | Raw HTTP response; suitable for custom response parsing                                |
| `contractorPaymentGroup`                                                               | [components.ContractorPaymentGroup](../../models/components/contractorpaymentgroup.md) | :heavy_minus_sign:                                                                     | Full contractor payment group object                                                   |