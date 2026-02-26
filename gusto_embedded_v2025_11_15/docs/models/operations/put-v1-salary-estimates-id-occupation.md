# PutV1SalaryEstimatesIdOccupation

## Example Usage

```typescript
import { PutV1SalaryEstimatesIdOccupation } from "openapi/models/operations";

let value: PutV1SalaryEstimatesIdOccupation = {
  code: "151252",
  experienceLevel: "expert",
  timePercentage: "0.6",
  primary: true,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Bureau of Labor Statistics (BLS) occupation code                                                                           | 151252                                                                                                                     |
| `experienceLevel`                                                                                                          | [operations.PutV1SalaryEstimatesIdExperienceLevel](../../models/operations/put-v1-salary-estimates-id-experience-level.md) | :heavy_check_mark:                                                                                                         | Experience level for this occupation                                                                                       | expert                                                                                                                     |
| `timePercentage`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Percentage of time spent in this occupation (as decimal, e.g., 0.5 = 50%)                                                  | 0.6                                                                                                                        |
| `primary`                                                                                                                  | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | Whether this is the primary occupation                                                                                     | true                                                                                                                       |