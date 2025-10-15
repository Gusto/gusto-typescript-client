# Occupations

## Example Usage

```typescript
import { Occupations } from "@gusto/embedded-api/models/components/salaryestimate.js";

let value: Occupations = {
  code: "<value>",
  experienceLevel: "skilled",
  timePercentage: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `code`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | Bureau of Labor Statistics (BLS) occupation code.                        |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Occupation name.                                                         |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | Occupation description.                                                  |
| `experienceLevel`                                                        | [components.ExperienceLevel](../../models/components/experiencelevel.md) | :heavy_check_mark:                                                       | Experience level for this occupation.                                    |
| `timePercentage`                                                         | *string*                                                                 | :heavy_check_mark:                                                       | Percentage of time spent in this occupation (as decimal string, 0-1).    |
| `primary`                                                                | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether this is the primary occupation.                                  |
| `salaries`                                                               | [components.Salaries](../../models/components/salaries.md)               | :heavy_minus_sign:                                                       | Salary percentile data for this occupation.                              |