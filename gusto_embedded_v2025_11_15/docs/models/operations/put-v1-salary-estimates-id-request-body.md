# PutV1SalaryEstimatesIdRequestBody

## Example Usage

```typescript
import { PutV1SalaryEstimatesIdRequestBody } from "openapi/models/operations";

let value: PutV1SalaryEstimatesIdRequestBody = {
  annualNetRevenue: 600000,
  zipCode: "94107",
  occupations: [
    {
      code: "151252",
      experienceLevel: "expert",
      timePercentage: "0.6",
      primary: true,
    },
  ],
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `annualNetRevenue`                                                                                                | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | The annual net revenue of the business (must be greater than 0)                                                   | 600000                                                                                                            |
| `zipCode`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The ZIP code for location-based salary calculations                                                               | 94107                                                                                                             |
| `occupations`                                                                                                     | [operations.PutV1SalaryEstimatesIdOccupation](../../models/operations/put-v1-salary-estimates-id-occupation.md)[] | :heavy_check_mark:                                                                                                | Array of occupations. Time percentages must sum to 100%.                                                          |                                                                                                                   |