# PostV1CompaniesCompanyUuidTimeOffRequestsPreviewRequest

## Example Usage

```typescript
import { PostV1CompaniesCompanyUuidTimeOffRequestsPreviewRequest } from "@gusto/embedded-api/models/operations/postv1companiescompanyuuidtimeoffrequestspreview.js";

let value: PostV1CompaniesCompanyUuidTimeOffRequestsPreviewRequest = {
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
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1CompaniesCompanyUuidTimeOffRequestsPreviewHeaderXGustoAPIVersion](../../models/operations/postv1companiescompanyuuidtimeoffrequestspreviewheaderxgustoapiversion.md)                                       | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `companyUuid`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `requestBody`                                                                                                                                                                                                                | [operations.PostV1CompaniesCompanyUuidTimeOffRequestsPreviewRequestBody](../../models/operations/postv1companiescompanyuuidtimeoffrequestspreviewrequestbody.md)                                                             | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |