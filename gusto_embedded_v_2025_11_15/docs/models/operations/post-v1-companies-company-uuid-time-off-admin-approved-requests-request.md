# PostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsRequest

## Example Usage

```typescript
import { PostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsRequest } from "openapi/models/operations";

let value: PostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsRequest = {
  companyUuid: "<id>",
  body: {
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
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsXGustoAPIVersion](../../models/operations/post-v1-companies-company-uuid-time-off-admin-approved-requests-x-gusto-api-version.md)                          | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `companyUuid`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `body`                                                                                                                                                                                                                       | [operations.PostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsRequestBody](../../models/operations/post-v1-companies-company-uuid-time-off-admin-approved-requests-request-body.md)                                      | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |