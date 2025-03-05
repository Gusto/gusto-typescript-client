# GetV1CompaniesCompanyIdContractorPaymentGroupsResponse

## Example Usage

```typescript
import { GetV1CompaniesCompanyIdContractorPaymentGroupsResponse } from "@gusto/embedded-api/models/operations";

let value: GetV1CompaniesCompanyIdContractorPaymentGroupsResponse = {
  contentType: "<value>",
  statusCode: 302,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `contentType`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | HTTP response content type for this operation                                                          |
| `statusCode`                                                                                           | *number*                                                                                               | :heavy_check_mark:                                                                                     | HTTP response status code for this operation                                                           |
| `rawResponse`                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                  | :heavy_check_mark:                                                                                     | Raw HTTP response; suitable for custom response parsing                                                |
| `contractorPaymentGroupList`                                                                           | [components.ContractorPaymentGroupMinimal](../../models/components/contractorpaymentgroupminimal.md)[] | :heavy_minus_sign:                                                                                     | List of Contractor Payment Groups                                                                      |