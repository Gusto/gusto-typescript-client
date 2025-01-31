# EmploymentHistoryList

Example response

## Example Usage

```typescript
import { EmploymentHistoryList } from "@gusto/embedded-api/models/components";

let value: EmploymentHistoryList = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `hireDate`                                                                                                                         | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The employee's start day of work for an employment.                                                                                |
| `terminationDate`                                                                                                                  | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The employee's last day of work for an employment.                                                                                 |
| `fileNewHireReport`                                                                                                                | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | The boolean flag indicating whether Gusto will file a new hire report for the employee.                                            |
| `twoPercentShareholder`                                                                                                            | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Whether the employee is a two percent shareholder of the company. This field only applies to companies with an S-Corp entity type. |
| `employmentStatus`                                                                                                                 | [components.EmploymentHistoryListEmploymentStatus](../../models/components/employmenthistorylistemploymentstatus.md)               | :heavy_minus_sign:                                                                                                                 | The employee's employment status. Supplying an invalid option will set the employment_status to *not_set*.                         |