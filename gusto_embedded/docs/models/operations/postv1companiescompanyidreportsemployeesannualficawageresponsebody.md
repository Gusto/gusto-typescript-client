# PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponseBody

accepted

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponseBody } from "@gusto/embedded-api/models/operations/postv1companiescompanyidreportsemployeesannualficawage.js";

let value: PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageResponseBody =
  {
    requestUuid: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    companyUuid: "12345678-abcd-ef12-3456-7890abcdef12",
    startYear: 2023,
    endYear: 2024,
  };
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `requestUuid`                                                           | *string*                                                                | :heavy_check_mark:                                                      | The UUID of the report request. Use this to poll for report completion. |
| `companyUuid`                                                           | *string*                                                                | :heavy_check_mark:                                                      | The UUID of the company                                                 |
| `startYear`                                                             | *number*                                                                | :heavy_check_mark:                                                      | The start year for the report                                           |
| `endYear`                                                               | *number*                                                                | :heavy_check_mark:                                                      | The end year for the report                                             |