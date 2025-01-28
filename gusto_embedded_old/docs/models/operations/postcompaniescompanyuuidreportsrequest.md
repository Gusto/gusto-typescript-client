# PostCompaniesCompanyUuidReportsRequest

## Example Usage

```typescript
import { PostCompaniesCompanyUuidReportsRequest } from "openapi/models/operations";
import { RFCDate } from "openapi/types";

let value: PostCompaniesCompanyUuidReportsRequest = {
  companyUuid: "<id>",
  requestBody: {
    columns: [
      "total_time_off_earnings",
    ],
    groupings: [
      "work_address",
    ],
    fileType: "json",
    startDate: new RFCDate("2024-01-01"),
    endDate: new RFCDate("2024-04-01"),
    dismissedStartDate: new RFCDate("2024-01-01"),
    dismissedEndDate: new RFCDate("2024-04-01"),
  },
};
```

## Fields

| Field                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyUuid`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                           | The UUID of the company                                                                                                                                                                                                      |
| `xGustoAPIVersion`                                                                                                                                                                                                           | [components.VersionHeader](../../models/components/versionheader.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                           | Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used. |
| `requestBody`                                                                                                                                                                                                                | [operations.PostCompaniesCompanyUuidReportsRequestBody](../../models/operations/postcompaniescompanyuuidreportsrequestbody.md)                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                          |