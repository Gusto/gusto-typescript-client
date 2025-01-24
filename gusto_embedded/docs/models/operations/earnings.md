# Earnings

An array of earnings for the employee. Depends on your company selections, earnings includes wages, hours, bonuses, tips, commission and more.

## Example Usage

```typescript
import { Earnings } from "gusto-embedded/models/operations";

let value: Earnings = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `hours`                                                          | *string*                                                         | :heavy_minus_sign:                                               | The hour of the compensation for the pay period.                 |
| `amount`                                                         | *string*                                                         | :heavy_minus_sign:                                               | The amount of the earning.                                       |
| `earningId`                                                      | *number*                                                         | :heavy_minus_sign:                                               | The ID of the earning.                                           |
| `earningType`                                                    | [operations.EarningType](../../models/operations/earningtype.md) | :heavy_minus_sign:                                               | The earning type for the compensation.                           |