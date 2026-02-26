# Occupation

## Example Usage

```typescript
import { Occupation } from "openapi/models";

let value: Occupation = {
  code: "<value>",
  experienceLevel: "average",
  timePercentage: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `code`                                                                | *string*                                                              | :heavy_check_mark:                                                    | Bureau of Labor Statistics (BLS) occupation code.                     |
| `name`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | Occupation name.                                                      |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | Occupation description.                                               |
| `experienceLevel`                                                     | [models.ExperienceLevel](../models/experience-level.md)               | :heavy_check_mark:                                                    | Experience level for this occupation.                                 |
| `timePercentage`                                                      | *string*                                                              | :heavy_check_mark:                                                    | Percentage of time spent in this occupation (as decimal string, 0-1). |
| `primary`                                                             | *boolean*                                                             | :heavy_minus_sign:                                                    | Whether this is the primary occupation.                               |