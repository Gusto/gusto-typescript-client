# PostV1CompaniesCompanyUuidTimeOffRequestsRequest

## Example Usage

```typescript
import { PostV1CompaniesCompanyUuidTimeOffRequestsRequest } from "@gusto/embedded-api/models/operations/postv1companiescompanyuuidtimeoffrequests.js";

let value: PostV1CompaniesCompanyUuidTimeOffRequestsRequest = {
  companyUuid: "<id>",
  requestBody: {
    employeeUuid: "<id>",
    policyUuid: "<id>",
    startDate: "<value>",
    endDate: "<value>",
    days: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1CompaniesCompanyUuidTimeOffRequestsHeaderXGustoAPIVersion](../../models/operations/postv1companiescompanyuuidtimeoffrequestsheaderxgustoapiversion.md)                                                     | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `companyUuid`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `requestBody`                                                                                                                                                                                                                | [operations.PostV1CompaniesCompanyUuidTimeOffRequestsRequestBody](../../models/operations/postv1companiescompanyuuidtimeoffrequestsrequestbody.md)                                                                           | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |