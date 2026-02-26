# PutV1SalaryEstimatesIdOccupations

## Example Usage

```typescript
import { PutV1SalaryEstimatesIdOccupations } from "@gusto/embedded-api-v2025-11-15/models/operations/putv1salaryestimatesid.js";

let value: PutV1SalaryEstimatesIdOccupations = {
  code: "151252",
  experienceLevel: "expert",
  timePercentage: "0.6",
  primary: true,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Bureau of Labor Statistics (BLS) occupation code                                                                     | 151252                                                                                                               |
| `experienceLevel`                                                                                                    | [operations.PutV1SalaryEstimatesIdExperienceLevel](../../models/operations/putv1salaryestimatesidexperiencelevel.md) | :heavy_check_mark:                                                                                                   | Experience level for this occupation                                                                                 | expert                                                                                                               |
| `timePercentage`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Percentage of time spent in this occupation (as decimal, e.g., 0.5 = 50%)                                            | 0.6                                                                                                                  |
| `primary`                                                                                                            | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | Whether this is the primary occupation                                                                               | true                                                                                                                 |