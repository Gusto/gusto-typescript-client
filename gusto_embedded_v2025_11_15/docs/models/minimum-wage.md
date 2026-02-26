# MinimumWage

Representation of a Minimum Wage

## Example Usage

```typescript
import { MinimumWage } from "openapi/models";

let value: MinimumWage = {
  uuid: "59e47de5-1ac6-48c6-96d8-3e1ff2de405b",
  wage: "<value>",
  wageType: "<value>",
  effectiveDate: new Date("2024-01-19"),
  authority: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `uuid`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | unique identifier of a minimum wage                                                        |
| `wage`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | The wage rate for a minimum wage record. Represented as a float, e.g. "15.0".              |
| `wageType`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | The type of wage the minimum wage applies to, e.g. "Regular", "Regular-Industry-Specific". |
| `effectiveDate`                                                                            | [Date](../types/rfcdate.md)                                                                | :heavy_check_mark:                                                                         | The date the minimum wage rule is effective on.                                            |
| `authority`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | The governing authority that created the minimum wage, e.g. "City", "State", or "Federal". |
| `notes`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | Description of parties the minimum wage applies to.                                        |