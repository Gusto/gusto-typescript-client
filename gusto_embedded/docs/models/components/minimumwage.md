# MinimumWage

Representation of a Minimum Wage

## Example Usage

```typescript
import { MinimumWage } from "@gusto/embedded-api/models/components/minimumwage.js";
import { RFCDate } from "@gusto/embedded-api/types/rfcdate.js";

let value: MinimumWage = {
  uuid: "12544cf8-f616-447a-97ee-b726b41eb9cd",
  wage: "<value>",
  wageType: "<value>",
  effectiveDate: new RFCDate("2025-08-23"),
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