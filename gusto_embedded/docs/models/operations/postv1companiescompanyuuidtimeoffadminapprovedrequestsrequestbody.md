# PostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsRequestBody

## Example Usage

```typescript
import { PostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsRequestBody } from "@gusto/embedded-api/models/operations/postv1companiescompanyuuidtimeoffadminapprovedrequests.js";

let value: PostV1CompaniesCompanyUuidTimeOffAdminApprovedRequestsRequestBody = {
  employeeUuid: "<id>",
  policyUuid: "<id>",
  startDate: "<value>",
  endDate: "<value>",
  days: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `employeeUuid`                                                                                                             | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The UUID of the employee                                                                                                   |
| `policyUuid`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The UUID of the time off policy                                                                                            |
| `employerNote`                                                                                                             | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | A note from the employer about the request                                                                                 |
| `approverUuid`                                                                                                             | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The UUID of the approving admin. Defaults to the primary payroll admin.                                                    |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The start date of the time off request (YYYY-MM-DD)                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The end date of the time off request (YYYY-MM-DD)                                                                          |
| `days`                                                                                                                     | Record<string, *string*>                                                                                                   | :heavy_check_mark:                                                                                                         | An object where keys are dates in YYYY-MM-DD format and values are hours as string decimals (e.g. {"2025-01-20": "8.000"}) |