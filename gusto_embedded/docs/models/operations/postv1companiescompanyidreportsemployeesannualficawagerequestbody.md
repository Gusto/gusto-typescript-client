# PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequestBody

## Example Usage

```typescript
import { PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequestBody } from "@gusto/embedded-api/models/operations/postv1companiescompanyidreportsemployeesannualficawage.js";

let value: PostV1CompaniesCompanyIdReportsEmployeesAnnualFicaWageRequestBody = {
  startYear: 2023,
  endYear: 2024,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `startYear`                                                                                  | *number*                                                                                     | :heavy_check_mark:                                                                           | The start year for the report (must be 2011 or later)                                        | 2023                                                                                         |
| `endYear`                                                                                    | *number*                                                                                     | :heavy_check_mark:                                                                           | The end year for the report (must be the current year or earlier, and must be >= start_year) | 2024                                                                                         |