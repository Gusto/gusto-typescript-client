# PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest } from "openapi/models/operations";
import { RFCDate } from "openapi/types";

let value: PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequest = {
  companyId: "<id>",
  requestBody: {
    checkDate: new RFCDate("2020-01-01"),
    creationToken: "1d532d13-8f61-4a57-ad3c-b5fac1c6e05e",
    contractorPayments: [
      {
        wage: 5000,
        hours: 40,
        bonus: 500,
        reimbursement: 20,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [components.VersionHeader](../../models/components/versionheader.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `requestBody`                                                                                                                                                                                                                | [operations.PostV1CompaniesCompanyIdContractorPaymentGroupsPreviewRequestBody](../../models/operations/postv1companiescompanyidcontractorpaymentgroupspreviewrequestbody.md)                                                 | :heavy_minus_sign:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |