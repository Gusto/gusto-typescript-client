# PostV1CompaniesCompanyUuidTimeOffRequestsRequest

## Example Usage

```typescript
import { PostV1CompaniesCompanyUuidTimeOffRequestsRequest } from "openapi/models/operations";

let value: PostV1CompaniesCompanyUuidTimeOffRequestsRequest = {
  companyUuid: "<id>",
  body: {
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
| `xGustoAPIVersion`                                                                                                                                                                                                           | [operations.PostV1CompaniesCompanyUuidTimeOffRequestsXGustoAPIVersion](../../models/operations/post-v1-companies-company-uuid-time-off-requests-x-gusto-api-version.md)                                                      | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `companyUuid`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `body`                                                                                                                                                                                                                       | [operations.PostV1CompaniesCompanyUuidTimeOffRequestsRequestBody](../../models/operations/post-v1-companies-company-uuid-time-off-requests-request-body.md)                                                                  | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |