# PostV1EmployeesEmployeeIdSalaryEstimatesRequestBody

## Example Usage

```typescript
import { PostV1EmployeesEmployeeIdSalaryEstimatesRequestBody } from "@gusto/embedded-api-v2025-11-15/models/operations/postv1employeesemployeeidsalaryestimates.js";

let value: PostV1EmployeesEmployeeIdSalaryEstimatesRequestBody = {
  annualNetRevenue: 500000,
  zipCode: "94107",
  occupations: [],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `annualNetRevenue`                                                 | *number*                                                           | :heavy_minus_sign:                                                 | The annual net revenue of the business (must be greater than 0)    | 500000                                                             |
| `zipCode`                                                          | *string*                                                           | :heavy_check_mark:                                                 | The ZIP code for location-based salary calculations                | 94107                                                              |
| `occupations`                                                      | [operations.Occupations](../../models/operations/occupations.md)[] | :heavy_check_mark:                                                 | Array of occupations. Time percentages must sum to 100%.           |                                                                    |