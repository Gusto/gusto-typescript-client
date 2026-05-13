# PostV1CompaniesCompanyUuidTimeOffRequestsPreviewRequestBody

## Example Usage

```typescript
import { PostV1CompaniesCompanyUuidTimeOffRequestsPreviewRequestBody } from "@gusto/embedded-api-v-2025-11-15/models/operations/postv1companiescompanyuuidtimeoffrequestspreview.js";

let value: PostV1CompaniesCompanyUuidTimeOffRequestsPreviewRequestBody = {
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
| `requestUuid`                                                                                                              | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The UUID of an existing time off request to preview changes for                                                            |
| `employeeUuid`                                                                                                             | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The UUID of the employee                                                                                                   |
| `policyUuid`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The UUID of the time off policy                                                                                            |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The start date of the time off request (YYYY-MM-DD)                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The end date of the time off request (YYYY-MM-DD)                                                                          |
| `days`                                                                                                                     | Record<string, *string*>                                                                                                   | :heavy_check_mark:                                                                                                         | An object where keys are dates in YYYY-MM-DD format and values are hours as string decimals (e.g. {"2025-01-20": "8.000"}) |