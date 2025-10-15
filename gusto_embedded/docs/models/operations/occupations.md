# Occupations

## Example Usage

```typescript
import { Occupations } from "@gusto/embedded-api/models/operations/postv1employeesemployeeidsalaryestimates.js";

let value: Occupations = {
  code: "151252",
  experienceLevel: "skilled",
  timePercentage: "1",
  primary: true,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `code`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | Bureau of Labor Statistics (BLS) occupation code                           | 151252                                                                     |
| `experienceLevel`                                                          | [operations.ExperienceLevel](../../models/operations/experiencelevel.md)   | :heavy_check_mark:                                                         | Experience level for this occupation                                       | skilled                                                                    |
| `timePercentage`                                                           | *string*                                                                   | :heavy_check_mark:                                                         | Percentage of time spent in this occupation (as decimal, e.g., 1.0 = 100%) | 1                                                                          |
| `primary`                                                                  | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether this is the primary occupation                                     | true                                                                       |