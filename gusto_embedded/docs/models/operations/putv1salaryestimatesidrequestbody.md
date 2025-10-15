# PutV1SalaryEstimatesIdRequestBody

## Example Usage

```typescript
import { PutV1SalaryEstimatesIdRequestBody } from "@gusto/embedded-api/models/operations/putv1salaryestimatesid.js";

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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `annualNetRevenue`                                                                                             | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The annual net revenue of the business (must be greater than 0)                                                | 600000                                                                                                         |
| `zipCode`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ZIP code for location-based salary calculations                                                            | 94107                                                                                                          |
| `occupations`                                                                                                  | [operations.PutV1SalaryEstimatesIdOccupations](../../models/operations/putv1salaryestimatesidoccupations.md)[] | :heavy_check_mark:                                                                                             | Array of occupations. Time percentages must sum to 100%.                                                       |                                                                                                                |