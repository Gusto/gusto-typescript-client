# PostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsRequest

## Example Usage

```typescript
import { PostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsRequest } from "@gusto/embedded-api/models/operations/postv1companiescompanyuuidtimeoffadminapprovedrequests.js";

let value: PostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsRequest = {
  companyUuid: "<id>",
  requestBody: {
    employeeUuid: "<id>",
    policyUuid: "<id>",
    startDate: "<value>",
    endDate: "<value>",
    days: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsHeaderXGustoAPIVersion](../../models/operations/postv1companiescompanyuuidtimeoffadminapprovedrequestsheaderxgustoapiversion.md)                           | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `companyUuid`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `requestBody`                                                                                                                                                                                                                | [operations.PostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsRequestBody](../../models/operations/postv1companiescompanyuuidtimeoffadminapprovedrequestsrequestbody.md)                                                 | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |