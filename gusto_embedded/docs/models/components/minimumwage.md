# MinimumWage

Representation of a Minimum Wage

## Example Usage

```typescript
import { MinimumWage } from "@gusto/embedded-api/models/components";
import { RFCDate } from "@gusto/embedded-api/types";

let value: MinimumWage = {
  uuid: "20f42b14-fa86-4c2f-ad90-be851ce1c0f9",
  wage: "<value>",
  wageType: "<value>",
  effectiveDate: new RFCDate("2023-11-21"),
  authority: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `uuid`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | unique identifier of a minimum wage                                                        |
| `wage`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | The wage rate for a minimum wage record. Represented as a float, e.g. "15.0".              |
| `wageType`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | The type of wage the minimum wage applies to, e.g. "Regular", "Regular-Industry-Specific". |
| `effectiveDate`                                                                            | [RFCDate](../../types/rfcdate.md)                                                          | :heavy_check_mark:                                                                         | The date the minimum wage rule is effective on.                                            |
| `authority`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | The governing authority that created the minimum wage, e.g. "City", "State", or "Federal". |
| `notes`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | Description of parties the minimum wage applies to.                                        |