# PostCompaniesCompanyUuidReportsRequest

## Example Usage

```typescript
import { PostCompaniesCompanyUuidReportsRequest } from "openapi/models/operations";

let value: PostCompaniesCompanyUuidReportsRequest = {
  companyUuid: "<id>",
  body: {
    columns: [],
    groupings: [],
    fileType: "pdf",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-04-01"),
    dismissedStartDate: new Date("2024-01-01"),
    dismissedEndDate: new Date("2024-04-01"),
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [models.VersionHeader](../../models/version-header.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `body`                                                                                                                                                                                                                       | [operations.PostCompaniesCompanyUuidReportsRequestBody](../../models/operations/post-companies-company-uuid-reports-request-body.md)                                                                                         | :heavy_check_mark:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |