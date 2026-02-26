# RehireBody

## Example Usage

```typescript
import { RehireBody } from "@gusto/embedded-api-v2025-11-15/models/components/rehirebody.js";

let value: RehireBody = {
  effectiveDate: "<value>",
  fileNewHireReport: true,
  workLocationUuid: "<id>",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `effectiveDate`                                                                                                                    | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The day when the employee returns to work.                                                                                         |
| `fileNewHireReport`                                                                                                                | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | The boolean flag indicating whether Gusto will file a new hire report for the employee.                                            |
| `workLocationUuid`                                                                                                                 | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The uuid of the employee's work location.                                                                                          |
| `employmentStatus`                                                                                                                 | [components.EmploymentStatus](../../models/components/employmentstatus.md)                                                         | :heavy_minus_sign:                                                                                                                 | The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.                         |
| `twoPercentShareholder`                                                                                                            | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Whether the employee is a two percent shareholder of the company. This field only applies to companies with an S-Corp entity type. |